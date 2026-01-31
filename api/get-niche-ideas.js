// API endpoint for curated profitable niche ideas
module.exports = async function handler(req, res) {
    const niches = [
        {
            category: "💰 Wealth & High-End Biz",
            items: [
                {
                    keyword: "Grant writing for nonprofits",
                    description: "High-value skill. People buy books to secure millions in funding.",
                    product_idea: "BOOK: Grant Writing Guide ($12.99) → UPSELL: Grant Proposal Template Pack ($97)",
                    sourcing: "Book teaches strategy. Templates save 20+ hours. Include Gumroad link in book appendix.",
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
                    product_idea: "BOOK: Diabetic Air Fryer Cookbook ($9.99) → UPSELL: 28-Day Meal Plan + Grocery Lists ($27)",
                    sourcing: "Book has 50 recipes. Upsell is a done-for-you meal plan. Generate with ChatGPT, sell on Gumroad.",
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
                    product_idea: "BOOK: Shadow Work Journal ($8.99) → UPSELL: Digital Goodnotes Version ($19)",
                    sourcing: "Physical book for Amazon. Digital hyperlinked PDF for iPad users. Sell digital on Etsy/Gumroad.",
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
            category: "⚡ Fresh Gold Mine (Auto-Mined)",
            items: [
                {
                    keyword: "Workbook for complex ptsd recovery",
                    description: "Auto-Mined Score: 95/100. High pain point + 'Workbook' money word.",
                    product_idea: "CPTSD Recovery Exercises PDF",
                    sourcing: "Research therapy exercises (grounding, safety planning). Compile into workbook format.",
                    difficulty: "High"
                },
                {
                    keyword: "Cookbook for fatty liver disease",
                    description: "Auto-Mined Score: 92/100. Specific medical diet + 'Cookbook'.",
                    product_idea: "28-Day Liver Detox Meal Plan",
                    sourcing: "Generate liver-friendly recipes (no alcohol, low sugar). Focus on cruciferous veggies.",
                    difficulty: "Low"
                },
                {
                    keyword: "Planner for adhd adults 2026",
                    description: "Auto-Mined Score: 90/100. Specific audience + Year specific.",
                    product_idea: "Dopamine Menu & Weekly Planner",
                    sourcing: "Create colorful, low-clutter layouts. Gamify the tasks.",
                    difficulty: "Low"
                },
                {
                    keyword: "Guide for starting a nonprofit 501c3",
                    description: "Auto-Mined Score: 88/100. Specific legal outcome.",
                    product_idea: "BOOK: 'How to Start a 501c3' Guide ($14.99) → UPSELL: Nonprofit Bylaws Template Kit ($97)",
                    sourcing: "Book teaches the process. Templates let them execute instantly. Sell templates on Gumroad with book link in back matter.",
                    difficulty: "High"
                },
                {
                    keyword: "Log book for blood sugar monitoring",
                    description: "Auto-Mined Score: 85/100. Daily use product (consumable).",
                    product_idea: "Simple Data Log Book (Physical)",
                    sourcing: "Create a simple grid layout (Time, Glucose, Insulin, Notes). Duplicate for 100 pages.",
                    difficulty: "Very Low"
                },
                {
                    keyword: "Workbook for dysgraphia for kids",
                    description: "Auto-Mined Score: 95/100. Underserved learning disability niche.",
                    product_idea: "Handwriting Mechanics Worksheets",
                    sourcing: "Create large-format tracing exercises and motor skill games.",
                    difficulty: "Medium"
                },
                {
                    keyword: "Cookbook for gastritis healing",
                    description: "Auto-Mined Score: 91/100. High urgency (pain relief).",
                    product_idea: "Gastritis Soothing Recipe Pack",
                    sourcing: "Focus on low-acid, soft foods. Avoid common triggers.",
                    difficulty: "Low"
                },
                {
                    keyword: "Journal for new dads",
                    description: "Auto-Mined Score: 87/100. Giftable market.",
                    product_idea: "First Year Fatherhood prompts",
                    sourcing: "Prompts like 'First time I held you', 'My hopes for you'.",
                    difficulty: "Low"
                },
                {
                    keyword: "Exam prep for pharmacy technician",
                    description: "Auto-Mined Score: 98/100. Career certification.",
                    product_idea: "PTCB Practice Test Bank",
                    sourcing: "Find previous exam questions. Create practice quizzes.",
                    difficulty: "High"
                },
                {
                    keyword: "Activity book for seniors with dementia",
                    description: "Auto-Mined Score: 93/100. Caregiver driven purchase.",
                    product_idea: "Large Print Puzzle & Memory Game Pack",
                    sourcing: "Very simple word searches, spot the difference, and nostalgic photo recognition.",
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
