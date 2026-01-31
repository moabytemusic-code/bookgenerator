// API endpoint for generating book packages
module.exports = async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { keyword, toolName, toolUrl, authorName, price } = req.body;

    if (!keyword || !toolName || !toolUrl) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        const package = generateBookPackage(keyword, toolName, toolUrl, authorName || 'Ken Thompson', price || '2.99');
        return res.status(200).json(package);
    } catch (error) {
        return res.status(500).json({ error: 'Error generating package', details: error.message });
    }
}

function generateBookPackage(keyword, toolName, toolUrl, authorName, price) {
    const title = `How to ${capitalizeWords(keyword)}: The Complete Guide for Beginners (2026 Edition)`;
    const subtitle = `Validate Your Ideas in 30 Seconds, Launch in 24 Hours, and Build a Profitable ${capitalizeWords(keyword)} Business`;

    // Generate outline
    const outline = {
        book_title: title,
        target_length: "50-60 pages",
        tone: "conversational, helpful, actionable",
        target_audience: `beginners looking to get started with ${keyword}`,

        front_matter: {
            page_1_dedication: `This book is a companion guide to the FREE ${toolName} tool.\n\nGet instant access at: ${toolUrl}\n\nUse it to validate your ideas in 30 seconds before investing time and money.`,

            page_2_introduction: {
                hook: `Most people fail at ${keyword} because they skip one critical step: validation.`,
                story: "I learned this the hard way. I spent 6 months building something nobody wanted. Made $47 total. The problem? I never validated the market.",
                promise: `This book will show you exactly how to ${keyword} the RIGHT way - with validation first, execution second.`,
                tool_mention: `Throughout this book, I'll reference the ${toolName} tool (free at ${toolUrl}). Use it alongside this guide for best results.`
            }
        },

        chapters: [
            {
                chapter: 1,
                title: `Why Most People Fail at ${capitalizeWords(keyword)}`,
                page_count: "4-5 pages",
                key_points: [
                    "The #1 mistake beginners make",
                    "Why 70% of attempts fail (and how to avoid it)",
                    "The validation-first approach",
                    `Real case study: Someone who succeeded with ${keyword}`
                ],
                tool_callout: `✅ ACTION STEP: Go to ${toolUrl} and validate your first idea right now. It takes 30 seconds.`
            },
            {
                chapter: 2,
                title: "The Validation Framework",
                page_count: "5-6 pages",
                key_points: [
                    "The 3 validation signals you need",
                    "How to check search demand (with screenshots)",
                    "How to analyze competition",
                    "How to estimate profit potential",
                    `Step-by-step walkthrough using ${toolName}`
                ],
                tool_callout: `✅ TOOL DEMO: [Include screenshot of ${toolName} in action]`
            },
            {
                chapter: 3,
                title: `10 Proven ${capitalizeWords(keyword)} Ideas`,
                page_count: "8-10 pages",
                key_points: [
                    `Idea #1: [Specific ${keyword} idea with validation data]`,
                    "Idea #2: [Another validated idea]",
                    "... (continue for 10 ideas)",
                    "How to choose the right one for YOU",
                    "Red flags to avoid"
                ],
                tool_callout: `✅ VALIDATE THESE: Run each idea through ${toolUrl} to see which scores highest for your situation.`
            },
            {
                chapter: 4,
                title: "The 24-Hour Launch Plan",
                page_count: "6-8 pages",
                key_points: [
                    "Hour 1-4: Validation and planning",
                    "Hour 5-12: Building your minimum viable offer",
                    "Hour 13-20: Creating your landing page",
                    "Hour 21-24: Getting your first customers",
                    "Real example: $340 in the first week"
                ],
                tool_callout: `✅ BONUS: Want the complete 24-Hour Launchpad with templates? Get it at ${toolUrl}/thank-you.html`
            },
            {
                chapter: 5,
                title: "Getting Traffic Without Ads",
                page_count: "6-8 pages",
                key_points: [
                    "The 5 free traffic sources that actually work",
                    "Reddit strategy (with examples)",
                    "Twitter/X growth tactics",
                    "LinkedIn outreach template",
                    "Product Hunt launch guide",
                    "How to get your first 100 visitors"
                ],
                tool_callout: `✅ TRAFFIC CHECKLIST: Download the complete zero-ad-spend checklist at ${toolUrl}`
            },
            {
                chapter: 6,
                title: "Scaling from $0 to $1000/month",
                page_count: "5-6 pages",
                key_points: [
                    "The 3 levers of growth",
                    "How to optimize your conversion rate",
                    "When to raise prices",
                    "Adding upsells and cross-sells",
                    "Building a simple email funnel"
                ],
                tool_callout: `✅ NEXT LEVEL: Ready to scale? Check out the Viral Content Engine at ${toolUrl}/shop`
            },
            {
                chapter: 7,
                title: "Common Mistakes and How to Avoid Them",
                page_count: "4-5 pages",
                key_points: [
                    "Mistake #1: Building before validating",
                    "Mistake #2: Targeting too broad a market",
                    "Mistake #3: Giving up too early",
                    "Mistake #4: Not collecting emails",
                    "Mistake #5: Ignoring the data"
                ],
                tool_callout: `✅ AVOID THESE: Use ${toolName} to validate before you build. Every. Single. Time.`
            },
            {
                chapter: 8,
                title: "Your 30-Day Action Plan",
                page_count: "4-5 pages",
                key_points: [
                    "Week 1: Validation and planning",
                    "Week 2: Building your offer",
                    "Week 3: Launch and first sales",
                    "Week 4: Optimization and scaling",
                    "Daily checklist",
                    "Success metrics to track"
                ],
                tool_callout: `✅ ACCOUNTABILITY: Join our free community and share your progress at ${toolUrl}/community`
            }
        ],

        back_matter: {
            conclusion: {
                summary: `You now have everything you need to succeed with ${keyword}.`,
                call_to_action: `Don't just read this. Take action TODAY. Go to ${toolUrl} and validate your first idea right now.`,
                final_offer: `Want the complete toolkit? Get the 24-Hour Side Hustle Launchpad, landing page templates, and more at ${toolUrl}/thank-you.html for just $7.`
            },

            bonus_resources: {
                title: "Free Resources",
                items: [
                    `🔧 ${toolName} (free tool): ${toolUrl}`,
                    `📋 Traffic Checklist: ${toolUrl}/resources`,
                    `🎯 Landing Page Templates: ${toolUrl}/templates`,
                    `💰 24-Hour Launchpad ($7): ${toolUrl}/thank-you.html`
                ]
            },

            about_author: {
                bio: `The author is the creator of ${toolName}, a free tool that has helped thousands of entrepreneurs validate their ideas before wasting time and money. After a failed launch that made only $47, they built a system to prevent others from making the same mistakes.`,
                website: toolUrl,
                contact: "Questions? Email: ken@smarthustlermarketing.com"
            }
        }
    };

    // Generate KDP metadata
    const description = `**Stop wasting months on ideas that won't work. Learn how to ${keyword} the RIGHT way.**

Most people fail at ${keyword} because they skip one critical step: validation.

This book shows you exactly how to:
✅ Validate any idea in 30 seconds (using a free tool)
✅ Launch your first offer in 24 hours
✅ Get traffic without spending on ads
✅ Scale from $0 to $1000/month

**What's Inside:**
• The validation framework that prevents costly mistakes
• 10 proven ${keyword} ideas (with real data)
• The 24-hour launch plan (step-by-step)
• Free traffic strategies that actually work
• Common mistakes and how to avoid them
• Your 30-day action plan

**Bonus:** Access to free tools and templates worth $200+

**Perfect for:**
- Beginners with zero experience
- People who tried and failed before
- Anyone tired of "gurus" selling hype
- Action-takers ready to launch THIS MONTH

**About the Author:**
After a failed launch that made only $47, the author built a validation system that has helped thousands avoid the same mistakes. This book shares that exact system.

**Ready to stop planning and start earning?**

Scroll up and click "Buy Now" to get started today.`;

    const kdpMetadata = {
        title: title,
        subtitle: subtitle,
        author: authorName,
        description: description,
        keywords: [
            keyword,
            `${keyword} for beginners`,
            `how to ${keyword}`,
            "side hustle",
            "passive income",
            "online business",
            "entrepreneurship"
        ],
        categories: [
            "Business & Money > Entrepreneurship",
            "Business & Money > Small Business & Entrepreneurship > New Business Enterprises"
        ],
        language: "English",
        publication_rights: "I own the copyright",
        pricing: {
            us: parseFloat(price),
            uk: 1.99,
            eu: 2.99,
            ca: 2.99,
            au: 2.99
        },
        enrollment: {
            kdp_select: true,
            reason: "70% royalty + free promo days"
        }
    };

    // Generate EbookWriter.ai prompt
    const ebookPrompt = generateEbookPrompt(outline, toolName, toolUrl);

    // Return complete package
    return {
        generated_at: new Date().toISOString(),
        keyword: keyword,
        tool_name: toolName,
        tool_url: toolUrl,
        outline: outline,
        kdp_metadata: kdpMetadata,
        ebookwriter_prompt: ebookPrompt,
        cover_specs: {
            trim_size: "6 x 9 inches",
            style: "Modern, professional, trustworthy",
            colors: "Purple/blue gradient (matches Signal Engines brand)",
            recommended_tool: "Canva (search 'Book Cover 6x9')"
        }
    };
}

function generateEbookPrompt(outline, toolName, toolUrl) {
    let prompt = `Write a complete 50-60 page book based on this outline:

BOOK TITLE: ${outline.book_title}

TARGET AUDIENCE: ${outline.target_audience}

TONE: ${outline.tone}

FRONT MATTER:
Page 1 - Dedication:
${outline.front_matter.page_1_dedication}

Page 2 - Introduction:
Hook: ${outline.front_matter.page_2_introduction.hook}
Story: ${outline.front_matter.page_2_introduction.story}
Promise: ${outline.front_matter.page_2_introduction.promise}
Tool Mention: ${outline.front_matter.page_2_introduction.tool_mention}

CHAPTERS:
`;

    outline.chapters.forEach(chapter => {
        prompt += `
Chapter ${chapter.chapter}: ${chapter.title}
Length: ${chapter.page_count}
Key Points:
`;
        chapter.key_points.forEach(point => {
            prompt += `- ${point}\n`;
        });
        prompt += `\nTool Callout: ${chapter.tool_callout}\n`;
    });

    prompt += `
BACK MATTER:
Conclusion:
${outline.back_matter.conclusion.summary}
${outline.back_matter.conclusion.call_to_action}
${outline.back_matter.conclusion.final_offer}

Bonus Resources:
${outline.back_matter.bonus_resources.title}
`;
    outline.back_matter.bonus_resources.items.forEach(item => {
        prompt += `${item}\n`;
    });

    prompt += `
About the Author:
${outline.back_matter.about_author.bio}
Website: ${outline.back_matter.about_author.website}
Contact: ${outline.back_matter.about_author.contact}

IMPORTANT INSTRUCTIONS:
1. Write in a conversational, helpful tone
2. Include specific examples and case studies
3. Make it actionable (not just theory)
4. Reference the ${toolName} tool every 10 pages
5. Include clear calls-to-action
6. Use short paragraphs (3-4 sentences max)
7. Add bullet points and lists for readability
8. Include "Action Step" boxes in each chapter
9. End each chapter with a summary
10. Make it feel like a friend teaching, not a professor lecturing
`;

    return prompt;
}

function capitalizeWords(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
