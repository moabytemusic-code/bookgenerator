# 🚀 Deploy to Vercel via GitHub

## ✅ Complete Deployment Guide

This guide shows you how to deploy your Book Generator app to Vercel via GitHub.

---

## 📋 Prerequisites

- GitHub account
- Vercel account (free)
- Git installed

---

## 🎯 Deployment Steps

### Step 1: Initialize Git Repository

```bash
cd ~/clawd/book_generator_app

# Initialize git
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Amazon KDP Book Generator"
```

### Step 2: Create GitHub Repository

**Option A: Via GitHub Website**
1. Go to https://github.com/new
2. Repository name: `book-generator`
3. Description: "Amazon KDP Book Package Generator"
4. Visibility: Public or Private
5. Click "Create repository"

**Option B: Via GitHub CLI** (if installed)
```bash
gh repo create book-generator --public --source=. --remote=origin --push
```

### Step 3: Push to GitHub

```bash
# Add GitHub remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/book-generator.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 4: Connect to Vercel

1. Go to https://vercel.com
2. Click "New Project"
3. Click "Import Git Repository"
4. Select your `book-generator` repo
5. Click "Import"

### Step 5: Configure Project

Vercel will auto-detect the settings. Just click "Deploy"!

**Default Settings:**
- Framework Preset: Other
- Root Directory: ./
- Build Command: (none needed)
- Output Directory: public

### Step 6: Wait for Deployment

Takes 30-60 seconds. You'll get a URL like:
```
https://book-generator-xyz.vercel.app
```

---

## ✅ Done!

Your app is now live! 🎉

---

## 🔄 Making Updates

After deployment, any push to GitHub auto-deploys:

```bash
# Make changes to your files
# Then:

git add .
git commit -m "Updated book template"
git push

# Vercel auto-deploys in 30 seconds!
```

---

## 🎨 Custom Domain (Optional)

### Step 1: Add Domain in Vercel
1. Go to your project in Vercel
2. Click "Settings" → "Domains"
3. Add your domain (e.g., `books.smarthustlermarketing.com`)

### Step 2: Update DNS
Add these records to your domain:

**For subdomain (books.smarthustlermarketing.com):**
```
Type: CNAME
Name: books
Value: cname.vercel-dns.com
```

**For root domain (smarthustlermarketing.com):**
```
Type: A
Name: @
Value: 76.76.21.21
```

---

## 🚨 Troubleshooting

### "Permission denied (publickey)"
Generate SSH key:
```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
cat ~/.ssh/id_ed25519.pub
```
Add to GitHub: Settings → SSH Keys → New SSH Key

### "Repository not found"
Make sure the remote URL is correct:
```bash
git remote -v
```

### "Build failed on Vercel"
Check the build logs in Vercel dashboard. Common issues:
- Missing files
- Incorrect vercel.json config

---

## 💡 Pro Tips

### Tip 1: Use Environment Variables
For sensitive data, use Vercel environment variables:
1. Vercel Dashboard → Settings → Environment Variables
2. Add variables
3. Access in code: `process.env.VARIABLE_NAME`

### Tip 2: Enable Analytics
Vercel Dashboard → Analytics → Enable

Track:
- Page views
- Unique visitors
- Top pages

### Tip 3: Set Up Previews
Every GitHub branch gets a preview URL automatically!

```bash
git checkout -b new-feature
git push origin new-feature
# Vercel creates preview URL
```

---

## 🎯 Quick Reference

### Deploy via GitHub (Recommended)
```bash
cd ~/clawd/book_generator_app
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/book-generator.git
git push -u origin main
```
Then connect on Vercel.com

### Deploy via Vercel CLI (Alternative)
```bash
cd ~/clawd/book_generator_app
vercel --prod
```

---

## 📊 What Happens After Deployment

1. ✅ App is live at your Vercel URL
2. ✅ Auto-deploys on every git push
3. ✅ Free SSL certificate
4. ✅ Global CDN (fast worldwide)
5. ✅ Automatic scaling

---

**Ready to deploy?** Follow the steps above! 🚀
