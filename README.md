# 📚 Amazon KDP Book Generator - Web App

Generate complete Amazon KDP book packages in seconds!

---

## 🚀 What This App Does

This web app generates everything you need to publish a book on Amazon KDP:

1. ✅ **Complete book outline** (8 chapters, 50-60 pages)
2. ✅ **EbookWriter.ai prompt** (ready to paste and generate)
3. ✅ **KDP metadata** (title, description, keywords, categories)
4. ✅ **Cover specifications** (design brief, dimensions, colors)
5. ✅ **Downloadable files** (TXT, JSON formats)

---

## 🎯 Features

- **Beautiful UI** - Modern, gradient design
- **Instant Generation** - Complete package in seconds
- **Customizable** - Your tool, your URL, your branding
- **Download Everything** - All files ready for KDP
- **Copy/Paste Ready** - One-click copy for descriptions and prompts

---

## 📁 Project Structure

```
book_generator_app/
├── public/
│   └── index.html          # Frontend UI
├── api/
│   └── generate-book.js    # API endpoint
├── package.json            # Dependencies
├── vercel.json             # Vercel config
└── README.md               # This file
```

---

## 🚀 Deploy to Vercel

### Option 1: Deploy via Vercel CLI (Recommended)

```bash
# Install Vercel CLI (if not already installed)
npm install -g vercel

# Navigate to project
cd ~/clawd/book_generator_app

# Deploy
vercel --prod
```

### Option 2: Deploy via GitHub

1. **Push to GitHub:**
```bash
cd ~/clawd/book_generator_app
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/book-generator.git
git push -u origin main
```

2. **Connect to Vercel:**
   - Go to https://vercel.com
   - Click "New Project"
   - Import your GitHub repo
   - Click "Deploy"

---

## 🧪 Test Locally

```bash
# Install Vercel CLI
npm install -g vercel

# Run local dev server
cd ~/clawd/book_generator_app
vercel dev
```

Then open: http://localhost:3000

---

## 🎨 How to Use the App

### Step 1: Fill Out the Form
- **Book Keyword:** e.g., "side hustle ideas"
- **Tool Name:** e.g., "Micro-Niche Finder"
- **Tool URL:** e.g., "smarthustlermarketing.com/niche-finder"
- **Author Name:** Your name
- **Price:** $2.99 - $9.99

### Step 2: Generate
Click "Generate Book Package" and wait 2-3 seconds.

### Step 3: Download
- **EbookWriter.ai Prompt** - Paste into App.Ebookwriter.ai
- **KDP Metadata** - Use when publishing on Amazon
- **Complete Package** - Full JSON with everything

### Step 4: Publish
1. Generate book with EbookWriter.ai
2. Create cover on Canva
3. Upload to Amazon KDP
4. Use the metadata provided
5. Publish!

---

## 📊 What Gets Generated

### 1. Book Outline
- 8 detailed chapters
- 50-60 pages total
- Links to your tool throughout
- Upsell opportunities built-in

### 2. KDP Metadata
```json
{
  "title": "How to [Keyword]: The Complete Guide...",
  "subtitle": "Validate Your Ideas in 30 Seconds...",
  "author": "Your Name",
  "description": "Full sales copy (500+ words)",
  "keywords": ["keyword 1", "keyword 2", ...],
  "categories": ["Business & Money > Entrepreneurship", ...],
  "pricing": { "us": 2.99, ... }
}
```

### 3. EbookWriter.ai Prompt
Complete prompt with:
- Book structure
- Chapter outlines
- Writing instructions
- Tool integration points
- Call-to-action placement

### 4. Cover Specs
- Trim size: 6 x 9 inches
- Design style guide
- Color palette
- Canva template recommendations

---

## 🔧 Customization

### Change the Default Tool
Edit `public/index.html`:
```html
<input type="text" id="toolName" value="YOUR TOOL NAME" required>
<input type="text" id="toolUrl" value="your-domain.com/tool" required>
```

### Change the Color Scheme
Edit `public/index.html` CSS:
```css
background: linear-gradient(135deg, #YOUR_COLOR_1 0%, #YOUR_COLOR_2 100%);
```

### Add More Chapters
Edit `api/generate-book.js` and add to the `chapters` array.

---

## 💡 Pro Tips

### Tip 1: Generate Multiple Books
Use different keywords to create a series:
- "side hustle ideas"
- "side hustle ideas for introverts"
- "side hustle ideas for teachers"

### Tip 2: Customize Per Niche
For real estate books, change the tool URL to a real estate tool.

### Tip 3: Batch Generate
Generate 10 books in 10 minutes, then publish them all.

---

## 📈 Revenue Model

### Per Book:
- Book sales: $2/book (royalty)
- Tool traffic: 30% of readers click
- Email signups: 30% of visitors
- Upsells: 10% buy $7-$97 products

### With 10 Books:
- 500 downloads/month
- 150 tool visitors/month
- 50 email signups/month
- 10 sales/month
- **Revenue: $1,000-$2,000/month**

---

## 🚨 Important Notes

### Amazon KDP Rules
- Provide real value (not just a link dump)
- Don't violate content policies
- Use unique content (not plagiarized)

### Tool Integration
- Link to your tool is allowed
- Provide value first, promote second
- Make the book useful on its own

### Pricing Strategy
- $2.99 = 70% royalty ($2.09 per sale)
- Lower price = more downloads
- More downloads = more tool traffic

---

## 🎯 Next Steps

1. **Deploy the app** to Vercel
2. **Generate your first book** package
3. **Create the book** with EbookWriter.ai
4. **Design the cover** on Canva
5. **Publish on Amazon KDP**
6. **Track results** for 30 days
7. **Scale** with more books

---

## 📞 Support

Questions? Email: ken@smarthustlermarketing.com

---

## 📄 License

MIT License - Use this however you want!

---

**Ready to publish?** Deploy the app and generate your first book! 🚀
