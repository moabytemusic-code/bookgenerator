// API endpoint for curated profitable niche ideas
module.exports = async function handler(req, res) {
    const niches = [
        {
            category: "💰 Wealth & High-End Biz",
            items: [
                {
                    keyword: "Grant writing for nonprofits",
                    description: "High-value skill. People buy books to secure millions in funding.",
                    product_idea: "Grant Proposal Template Pack ($97)",
                    sourcing: "Create 5 standard templates (Cover letter, Needs statement, Budget). Sell on Gumroad.",
                    difficulty: "Medium"
                },
                {
                    keyword: "Quickbooks online for beginners",
                    description: "Software guides are massive. Business owners NEED this.",
                    product_idea: "Quickbooks Setup Video Course",
                    sourcing: "Screen-record yourself setting up a dummy account. 1-hour tutorial.",
                    difficulty: "Low"
                },
                {
                    keyword: "LLC for beginners",
                    description: "Legal confusion drives book sales. High pain point.",
                    product_idea: "'Start Your LLC' Checklist & Filing Guide",
                    sourcing: "Compile links to Secretary of State forms for all 50 states.",
                    difficulty: "Medium"
                },
                {
                    keyword: "Notary signing agent certification study guide",
                    description: "Exam prep is the #1 buyer intent category.",
                    product_idea: "Notary Practice Exam App",
                    sourcing: "Turn public practice questions into a simple quiz app/webpage.",
                    difficulty: "Medium"
                }
            ]
        },
        {
            category: "❤️ Diet & Special Health",
            items: [
                {
                    keyword: "Diabetic air fryer cookbook",
                    description: "Specific Device + Specific Condition = Gold Mine.",
                    product_idea: "Printable Meal Plan & Grocery List",
                    sourcing: "Use ChatGPT to generate 30 days of diabetic-friendly air fryer recipes.",
                    difficulty: "Low"
                },
                {
                    keyword: "Wall pilates for seniors",
                    description: "Huge trend. Niche audience (seniors) + specific method.",
                    product_idea: "Wall Pilates Wall Chart (Physical Product)",
                    sourcing: "Design a poster in Canva. Drop-ship via Printful.",
                    difficulty: "Low"
                },
                {
                    keyword: "Dr Sebi alkaline diet",
                    description: "Cult-like following. Very high search volume.",
                    product_idea: "Alkaline Herbs & Supplements Guide",
                    sourcing: "Affiliate site reviewing Dr. Sebi approved supplements.",
                    difficulty: "Low"
                },
                {
                    keyword: "Gastric sleeve bariatric cookbook",
                    description: "Post-surgery patients MUST follow strict diets.",
                    product_idea: "Bariatric Portion Control Plate",
                    sourcing: "Source portion plates from Alibaba, brand them 'Bariatric Success'.",
                    difficulty: "High"
                }
            ]
        },
        {
            category: "🧠 Workbooks & Therapy",
            items: [
                {
                    keyword: "Shadow work journal with prompts",
                    description: "Interactive books outperform reading books 10-to-1.",
                    product_idea: "Digital Shadow Work Journal (iPad/Goodnotes)",
                    sourcing: "Create hyperlinked PDF in Canva for Goodnotes users.",
                    difficulty: "Low"
                },
                {
                    keyword: "CBT workbook for adults",
                    description: "Cognitive Behavioral Therapy. Evergreen bestseller.",
                    product_idea: "CBT Anxiety Tracker App",
                    sourcing: "Simple logging app for 'Trigger -> Thought -> Reaction'.",
                    difficulty: "High"
                },
                {
                    keyword: "ADHD organization hacks",
                    description: "Desperate problem solvers.",
                    product_idea: "ADHD Visual Planner (Printable)",
                    sourcing: "Design high-contrast, simple daily planners. Sell on Etsy.",
                    difficulty: "Low"
                },
                {
                    keyword: "Codependency recovery workbook",
                    description: "Relationship pain points drive impulse buys.",
                    product_idea: "Recovery Support Group community ($10/mo)",
                    sourcing: "Private Skool or Facebook group.",
                    difficulty: "Medium"
                }
            ]
        },
        {
            category: "🌿 Specific Hobbies",
            items: [
                {
                    keyword: "Raised bed gardening for beginners",
                    description: "Specific method (Raised Bed) > Generic Gardening.",
                    product_idea: "Garden Layout Planner Layouts",
                    sourcing: "PDF blueprints for 4x4 and 4x8 beds.",
                    difficulty: "Low"
                },
                {
                    keyword: "Crochet patterns for beginners",
                    description: "Pattern books are bought in bunches.",
                    product_idea: "Video Stitch Guide Library",
                    sourcing: "Curate best YouTube tutorials into an organized ad-free course.",
                    difficulty: "Low"
                },
                {
                    keyword: "Backyard homesteading",
                    description: "Self-reliance trend is peaking.",
                    product_idea: "Homestead Project Calculator (Coop cost, garden yield)",
                    sourcing: "Simple web calculator.",
                    difficulty: "Medium"
                }
            ]
        }
    ];

    res.status(200).json(niches);
};
