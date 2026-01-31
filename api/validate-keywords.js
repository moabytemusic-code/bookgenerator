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
    let suggestions = 0;
    let competition = 'Unknown';

    try {
        // Check Google Autocomplete
        const autocompleteData = await checkGoogleAutocomplete(keyword);
        suggestions = autocompleteData.count;

        // Score based on autocomplete suggestions
        if (suggestions >= 10) {
            score += 40; // High search interest
        } else if (suggestions >= 5) {
            score += 25;
        } else {
            score += 10;
        }

        // Estimate competition based on keyword length and specificity
        const wordCount = keyword.split(' ').length;
        if (wordCount >= 4) {
            competition = 'LOW';
            score += 40; // Long-tail = less competition
        } else if (wordCount === 3) {
            competition = 'MEDIUM';
            score += 25;
        } else {
            competition = 'HIGH';
            score += 10;
        }

        // Bonus for specific patterns
        if (keyword.includes('how to')) score += 10;
        if (keyword.includes('for beginners')) score += 10;
        if (keyword.match(/\d{4}/)) score += 5; // Year-specific

    } catch (error) {
        console.error(`Error validating ${keyword}:`, error);
        score = 30; // Default score on error
    }

    return {
        keyword,
        score: Math.min(Math.round(score), 100),
        suggestions,
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
        console.error('Autocomplete error:', error);
        return { count: 0, suggestions: [] };
    }
}
