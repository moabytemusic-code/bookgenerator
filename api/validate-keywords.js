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
        const wordCount = keyword.split(' ').length;
        if (wordCount >= 4) {
            competition = 'LOW';
        } else if (wordCount === 3) {
            competition = 'MEDIUM';
        } else {
            competition = 'HIGH';
        }

        // Bonus points for high-intent patterns
        if (keyword.includes('how to')) score += 5;
        if (keyword.includes('for beginners')) score += 5;
        if (keyword.includes('guide')) score += 3;
        if (keyword.match(/\d{4}/)) score += 2; // Year-specific

    } catch (error) {
        console.error(`Error validating ${keyword}:`, error);
        score = 30; // Default score on error
    }

    return {
        keyword,
        score: Math.min(Math.round(score), 100),
        googleSuggestions,
        amazonSuggestions,
        buyerIntent,
        competition,
        timestamp: new Date().toISOString()
    };
}

async function checkGoogleAutocomplete(keyword) {
    try {
        const url = `http://suggestqueries.google.com/complete/search?client=firefox&q=${encodeURIComponent(keyword)}`;

        const response = await fetch(url);
        const data = await response.json();

        const suggestions = data[1] || [];

        return {
            count: suggestions.length,
            suggestions: suggestions.slice(0, 5)
        };
    } catch (error) {
        console.error('Google autocomplete error:', error);
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

        const data = await response.json();

        // Amazon returns suggestions in a different format
        const suggestions = data.suggestions || [];

        return {
            count: suggestions.length,
            suggestions: suggestions.slice(0, 5).map(s => s.value || s)
        };
    } catch (error) {
        console.error('Amazon autocomplete error:', error);
        // Fallback: return 0 if Amazon fails
        return { count: 0, suggestions: [] };
    }
}
