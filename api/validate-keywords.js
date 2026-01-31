// API endpoint for validating keywords
module.exports = async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { keywords } = req.body;

    if (!keywords || !Array.isArray(keywords)) {
        return res.status(400).json({ error: 'Keywords array required' });
    }

    if (keywords.length > 10) {
        return res.status(400).json({ error: 'Maximum 10 keywords allowed' });
    }

    try {
        const results = await validateKeywords(keywords);
        return res.status(200).json({ results });
    } catch (error) {
        console.error('Validation Error:', error);
        return res.status(500).json({ error: 'Error validating keywords', details: error.message });
    }
};

async function validateKeywords(keywords) {
    const results = [];

    for (const keyword of keywords) {
        const validation = await validateSingleKeyword(keyword.trim());
        results.push(validation);
    }

    // Sort by score (highest first)
    results.sort((a, b) => b.score - a.score);

    return results;
}

async function validateSingleKeyword(keyword) {
    let score = 0;
    let googleSuggestions = 0;
    let amazonSuggestions = 0;
    let topAmazonSuggestions = []; // Initialize empty array
    let competition = 'Unknown';
    let buyerIntent = 'Unknown';

    try {
        // Check Google Autocomplete (40% weight)
        const googleData = await checkGoogleAutocomplete(keyword);
        googleSuggestions = googleData.count;

        let googleScore = 0;
        if (googleSuggestions >= 10) {
            googleScore = 40;
        } else if (googleSuggestions >= 5) {
            googleScore = 25;
        } else {
            googleScore = 10;
        }

        // Check Amazon Autocomplete (60% weight - BUYER INTENT!)
        const amazonData = await checkAmazonAutocomplete(keyword);
        amazonSuggestions = amazonData.count;
        topAmazonSuggestions = amazonData.suggestions; // Store suggestions safely

        let amazonScore = 0;
        if (amazonSuggestions >= 10) {
            amazonScore = 60;
            buyerIntent = 'HIGH';
        } else if (amazonSuggestions >= 5) {
            amazonScore = 40;
            buyerIntent = 'MEDIUM';
        } else if (amazonSuggestions >= 1) {
            amazonScore = 20;
            buyerIntent = 'LOW';
        } else {
            amazonScore = 0;
            buyerIntent = 'NONE';
        }

        // Base score from autocomplete
        score = googleScore + amazonScore;

        // Estimate competition based on keyword length
        // REVISED LOGIC: Long tail on Amazon usually means BETTER conversion, not just low volume.
        const wordCount = keyword.split(' ').length;

        if (wordCount >= 4) {
            competition = 'LOW';
            score += 10; // Bonus for being specific/long-tail
        } else if (wordCount === 3) {
            competition = 'MEDIUM';
            score += 5;
        } else {
            competition = 'HIGH';
        }

        // Bonus points for high-intent patterns
        // These are distinct "Money Words"
        const moneyWords = ['workbook', 'cookbook', 'journal', 'planner', 'guide', 'log book', 'diary', 'exam', 'prep', 'certification'];
        const lowerKeyword = keyword.toLowerCase();

        if (moneyWords.some(w => lowerKeyword.includes(w))) {
            score += 15; // Major bonus for product-type words
            buyerIntent = 'HIGH'; // These are physical products people buy
        }

        if (lowerKeyword.includes('how to')) score += 5;
        if (lowerKeyword.includes('for beginners')) score += 5;
        if (keyword.match(/\d{4}/)) score += 5; // Year-specific (e.g. 2026)

    } catch (error) {
        console.error(`Error validating ${keyword}:`, error);
        score = 30; // Default score on error
    }

    // Cap score at 100
    score = Math.min(Math.round(score), 100);

    return {
        keyword,
        score,
        googleSuggestions,
        amazonSuggestions,
        topAmazonSuggestions,
        buyerIntent,
        competition,
        timestamp: new Date().toISOString()
    };
}

async function checkGoogleAutocomplete(keyword) {
    try {
        const url = `http://suggestqueries.google.com/complete/search?client=firefox&q=${encodeURIComponent(keyword)}`;

        const response = await fetch(url);

        if (!response.ok) {
            console.error(`Google API Error: ${response.status}`);
            return { count: 0, suggestions: [] };
        }

        const data = await response.json();
        const suggestions = data[1] || [];

        return {
            count: suggestions.length,
            suggestions: suggestions.slice(0, 5)
        };
    } catch (error) {
        console.error('Google autocomplete error:', error.message);
        return { count: 0, suggestions: [] };
    }
}

async function checkAmazonAutocomplete(keyword) {
    try {
        // Amazon autocomplete API
        const url = `https://completion.amazon.com/api/2017/suggestions?mid=ATVPDKIKX0DER&alias=stripbooks&prefix=${encodeURIComponent(keyword)}&suggestion-type=KEYWORD&suggestion-type=WIDGET&page-type=Gateway&lop=en_US&site-variant=desktop&client-info=amazon-search-ui&wc=`;

        const response = await fetch(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
                'Accept': 'application/json'
            }
        });

        if (!response.ok) {
            console.error(`Amazon API Error: ${response.status}`);
            return { count: 0, suggestions: [] };
        }

        const data = await response.json();

        // Amazon returns suggestions in a different format
        const suggestions = data.suggestions || [];

        return {
            count: suggestions.length,
            suggestions: suggestions.slice(0, 5).map(s => s.value || s)
        };
    } catch (error) {
        console.error('Amazon autocomplete error:', error.message);
        // Fallback: return 0 if Amazon fails
        return { count: 0, suggestions: [] };
    }
}
