// API endpoint for curated profitable niche ideas
module.exports = async function handler(req, res) {
    const niches = [
        {
            category: "💰 Wealth & Side Hustles",
            items: [
                {
                    keyword: "Chair yoga for seniors",
                    description: "Low-impact exercise for the aging population.",
                    product_idea: "Subscription Video App for Seniors",
                    sourcing: "Hire a yoga instructor on Upwork ($500) to film 10 videos. Host on Uscreen or Teachable.",
                    difficulty: "Low"
                },
                {
                    keyword: "Notary public loan signing agent",
                    description: "High-demand service business certification.",
                    product_idea: "State-Specific Certification Study Guide App",
                    sourcing: "Source public domain state laws. Use AppGuyver or Bubble to build a simple quiz app.",
                    difficulty: "Medium"
                },
                {
                    keyword: "Vending machine business",
                    description: "Passive income through physical locations.",
                    product_idea: "Location Finder Service / Lead Gen",
                    sourcing: "Scrape local business data or use Google Maps API to find businesses without machines. Sell the leads.",
                    difficulty: "Medium"
                },
                {
                    keyword: "Airbnb arbitrage",
                    description: "Renting properties to sublet on Airbnb.",
                    product_idea: "Airbnb Profit Calculator / Chrome Extension",
                    sourcing: "Developer on Fiverr ($300) to build extension that scrapes Zillow rents vs. AirDNA data.",
                    difficulty: "High"
                }
            ]
        },
        {
            category: "❤️ Health & Wellness",
            items: [
                {
                    keyword: "Somatic exercises for trauma",
                    description: "Mind-body connection exercises gaining viral traction.",
                    product_idea: "Daily Somatic Release Audio Deck",
                    sourcing: "Record audio tracks yourself or hire voice actor. Sell as digital bundle or mobile app.",
                    difficulty: "Low"
                },
                {
                    keyword: "Anti-inflammatory diet for beginners",
                    description: "Dietary approach to reduce chronic pain.",
                    product_idea: "Meal Planner & Grocery List App",
                    sourcing: "Use Glide Apps (No-code) to turn a Google Sheet of recipes into an app.",
                    difficulty: "Low"
                },
                {
                    keyword: "Vagus nerve stimulation",
                    description: "Nervous system regulation techniques.",
                    product_idea: "Vagus Nerve Breathing Tool (Hardware/App)",
                    sourcing: "AliBaba for simple breathing necklace (hardware) or App for timed breathing patterns.",
                    difficulty: "Medium"
                }
            ]
        },
        {
            category: "🧠 Self-Help & Skills",
            items: [
                {
                    keyword: "Shadow work journal",
                    description: "Deep psychological self-reflection prompts.",
                    product_idea: "Interactive Digital Journal App",
                    sourcing: "FlutterFlow or Adalo to build a journaling app with daily push notification prompts.",
                    difficulty: "Medium"
                },
                {
                    keyword: "Credit repair secrets",
                    description: "DIY credit improvement strategies.",
                    product_idea: "Dispute Letter Generator SaaS",
                    sourcing: "Simple web form that populates PDF templates. Build with Typeform + Webmerge or custom Python script.",
                    difficulty: "Medium"
                },
                {
                    keyword: "Excel for beginners",
                    description: "Corporate survival skill.",
                    product_idea: "Excel Formula Generator / Plugin",
                    sourcing: "Build a simple GPT wrapper that translates English to Excel formulas.",
                    difficulty: "High"
                }
            ]
        },
        {
            category: "🌿 Hobbies & Survival",
            items: [
                {
                    keyword: "Container gardening",
                    description: "Growing food in small spaces/apartments.",
                    product_idea: "Garden Planner Helper",
                    sourcing: "Create a 'What to plant when' calendar generator based on zip code (USDA zones).",
                    difficulty: "Low"
                },
                {
                    keyword: "Backyard chickens",
                    description: "Sustainable living and fresh eggs.",
                    product_idea: "Smart Coop Monitor (IoT)",
                    sourcing: "Source temperature sensors from AliBaba. Connect to Tuya Smart Life app (Whitelabel).",
                    difficulty: "High"
                },
                {
                    keyword: "Prepping for survival",
                    description: "Disaster readiness.",
                    product_idea: "Digital Bug Out Bag Checklist & Vault",
                    sourcing: "PDF Bundle or Notion Template. Zero cost to source.",
                    difficulty: "Low"
                }
            ]
        }
    ];

    res.status(200).json(niches);
};
