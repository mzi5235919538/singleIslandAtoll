# 🚀 Deployment Guide - Fuvahmulah Tourism Website

## Quick Deployment to Vercel (Recommended)

### Step 1: Prepare Your Code
```bash
cd d:\Codes\fuvahmulah
git init
git add .
git commit -m "Initial commit: Fuvahmulah tourism website"
```

### Step 2: Push to GitHub (Optional but Recommended)
```bash
# Create a repo on GitHub and push
git remote add origin https://github.com/yourusername/fuvahmulah.git
git branch -M main
git push -u origin main
```

### Step 3: Deploy to Vercel
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

Follow the prompts:
- Link to GitHub account (optional)
- Select project settings
- Deploy

Your site will be live in seconds!

---

## Alternative: Deploy to Netlify

### Step 1: Build the Project
```bash
npm run build
```

### Step 2: Deploy
- Drag and drop the `.next` folder to Netlify
- Or connect GitHub for auto-deploys

---

## Alternative: Deploy to AWS Amplify

### Step 1: Install Amplify CLI
```bash
npm install -g @aws-amplify/cli
amplify configure
```

### Step 2: Initialize and Deploy
```bash
amplify init
amplify publish
```

---

## Self-Hosted Deployment (VPS)

### Step 1: Prepare Server
```bash
# SSH into your server
ssh user@your-domain.com

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2 for process management
npm install -g pm2
```

### Step 2: Clone and Setup
```bash
# Clone your repository
git clone https://github.com/yourusername/fuvahmulah.git
cd fuvahmulah

# Install dependencies
npm install

# Build
npm run build
```

### Step 3: Start with PM2
```bash
# Start the app
pm2 start npm --name "fuvahmulah" -- start

# Save PM2 process list
pm2 save

# Setup startup script
pm2 startup
```

### Step 4: Configure Nginx (Reverse Proxy)
```bash
# Install Nginx
sudo apt-get install nginx

# Create config file
sudo nano /etc/nginx/sites-available/fuvahmulah
```

Add this config:
```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable the site:
```bash
sudo ln -s /etc/nginx/sites-available/fuvahmulah /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### Step 5: Enable HTTPS (SSL)
```bash
# Install Certbot
sudo apt-get install certbot python3-certbot-nginx

# Get certificate
sudo certbot --nginx -d your-domain.com

# Auto-renew
sudo systemctl enable certbot.timer
```

---

## Environment Variables Setup

Create `.env.local` file:

```env
# Email Configuration
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
CONTACT_EMAIL=info@fuvahmulah-tourism.com

# Google AdSense
NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-xxxxxxxxxxxxxxxx

# Analytics (Optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

For production deployments, add these to your hosting platform's environment variables.

---

## Post-Deployment Checklist

### 1. Test the Website
- [ ] Home page loads correctly
- [ ] All navigation links work
- [ ] Carousel displays properly
- [ ] Contact form submits
- [ ] Mobile responsive

### 2. Configure Google AdSense
- [ ] Add AdSense verification code to `<head>`
- [ ] Replace ad client IDs
- [ ] Replace ad slot IDs
- [ ] Test ads display correctly
- [ ] Monitor AdSense dashboard

### 3. Set Up Analytics
- [ ] Add Google Analytics code
- [ ] Test events tracking
- [ ] Monitor user behavior
- [ ] Check bounce rate

### 4. SEO Optimization
- [ ] Submit sitemap to Google Search Console
- [ ] Submit to Bing Webmaster Tools
- [ ] Check mobile usability
- [ ] Monitor Core Web Vitals

### 5. Email Configuration
- [ ] Test contact form
- [ ] Verify email delivery
- [ ] Set up auto-reply
- [ ] Create email templates

### 6. Security
- [ ] Enable HTTPS (auto with most platforms)
- [ ] Set security headers
- [ ] Enable CORS if needed
- [ ] Regular backups

### 7. Performance Monitoring
- [ ] Monitor page speed
- [ ] Check server response time
- [ ] Monitor error rates
- [ ] Set up alerting

---

## Continuous Deployment

### GitHub Actions (Auto-deploy on push)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: vercel/action@master
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

---

## Domain Configuration

### Point Domain to Deployment

**For Vercel**:
1. Go to Vercel dashboard
2. Project Settings → Domains
3. Add your domain
4. Update DNS records:
   - CNAME: `cname.vercel-dns.com`

**For Self-Hosted**:
1. Update DNS A record to your server IP
2. Wait 24-48 hours for propagation
3. Test with `nslookup your-domain.com`

---

## Monitoring & Maintenance

### Essential Checks
- [ ] Daily: Check error logs
- [ ] Weekly: Monitor analytics
- [ ] Monthly: Review AdSense performance
- [ ] Quarterly: Update dependencies
- [ ] Annually: Security audit

### Useful Commands
```bash
# Check Node version
node --version

# View running processes
pm2 list

# View logs
pm2 logs fuvahmulah

# Update dependencies
npm update

# Check for vulnerabilities
npm audit
```

---

## Troubleshooting Deployment

### Issue: Port 3000 Already in Use
```bash
# Kill process
lsof -ti:3000 | xargs kill -9

# Or use different port
PORT=3001 npm run dev
```

### Issue: Out of Memory
```bash
# Increase Node memory
NODE_OPTIONS=--max-old-space-size=2048 npm run build
```

### Issue: Build Timeout
```bash
# Increase build timeout in vercel.json
{
  "buildCommand": "next build",
  "buildFunctions": {
    "api/**": {
      "memory": 1024,
      "maxDuration": 60
    }
  }
}
```

### Issue: AdSense Not Loading
- Check ad client ID is correct
- Verify ads.txt file is in public/
- Check browser console for errors
- Allow 24 hours for ads to appear

---

## Success! 🎉

Your website is now:
- ✅ Live and accessible
- ✅ Optimized for AdSense
- ✅ Mobile responsive
- ✅ SEO friendly
- ✅ Fast and secure
- ✅ Auto-scaling (if using serverless)

For support, visit:
- Vercel Docs: vercel.com/docs
- Next.js Docs: nextjs.org/docs
- Tailwind Docs: tailwindcss.com/docs

---

**Happy Deploying! 🚀**

Last Updated: December 2024
