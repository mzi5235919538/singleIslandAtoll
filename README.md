# 🌴 Fuvahmulah Tourism Website

A modern, responsive tourism website for **Fuvahmulah (Sinle Atoll)** in the Maldives, built with the latest **Next.js 16**, **TypeScript**, and **Tailwind CSS**.

## ✨ Features

- 🏝️ **Multi-page responsive design** - Home, Attractions, Accommodation, Dining, Activities, Contact
- 🎠 **Interactive image carousel** - Powered by Swiper with auto-play
- 📢 **Google AdSense ready** - Pre-configured containers for ads
- 📧 **Working contact form** - API endpoint for submissions
- 🔍 **SEO optimized** - Meta tags, Open Graph, structured data
- 📱 **Mobile responsive** - Works on all devices
- ⚡ **High performance** - Static generation, code splitting
- 🎨 **Modern UI** - Beautiful Tailwind CSS design

## 🛠️ Tech Stack

- Next.js 16 (Latest)
- TypeScript
- Tailwind CSS 4
- Swiper (Carousel)
- React Icons
- Custom React Components

## 🚀 Quick Start

```bash
# Install dependencies (if not done)
npm install

# Run dev server
npm run dev

# Build for production
npm run build
npm run start
```

Visit `http://localhost:3000`

## 📂 Project Structure

```
app/
├── attractions/        # Top attractions page
├── accommodation/      # Hotels & resorts page
├── dining/            # Restaurants page
├── activities/        # Water sports page
├── contact/           # Contact form & FAQ
├── api/contact/       # Contact form API
├── layout.tsx         # Root layout
├── page.tsx           # Home page
└── globals.css        # Global styles

components/
├── Header.tsx         # Navigation
├── Footer.tsx         # Footer with info
├── HeroCarousel.tsx   # Image carousel
├── PlaceCard.tsx      # Card component
└── AdSenseContainer.tsx # Ad placeholder
```

## 📄 Pages

| Page | Purpose |
|------|---------|
| `/` | Home with carousel |
| `/attractions` | Beaches, attractions, wildlife |
| `/accommodation` | Hotels, resorts, guest houses |
| `/dining` | Restaurants, cafes, local food |
| `/activities` | Diving, snorkeling, tours |
| `/contact` | Contact form, FAQs, info |

## 🔧 Google AdSense Setup

1. Get your AdSense code from Google AdSense console
2. Replace placeholder `data-ad-client` and `data-ad-slot` values
3. Uncomment the Google AdSense script tag in `app/layout.tsx`
4. AdSense containers are pre-placed on all pages

## 📧 Contact Form

The form logs submissions to console. To enable email:

```typescript
// Update app/api/contact/route.ts with:
// - Nodemailer configuration, OR
// - SendGrid API, OR  
// - Your preferred email service
```

Set environment variables in `.env.local`:
```
EMAIL_SERVICE=your-service
EMAIL_USER=your-email
EMAIL_PASSWORD=your-password
```

## 🎨 Customize

### Colors
Edit `app/globals.css`:
```css
:root {
  --primary: #0077b6;
  --secondary: #00b4d8;
  --accent: #90e0ef;
}
```

### Content
- Edit pages in `app/*/page.tsx`
- Update footer: `components/Footer.tsx`
- Update header: `components/Header.tsx`

## 📱 Responsive Design

- ✅ Desktop optimized
- ✅ Tablet responsive
- ✅ Mobile first approach
- ✅ Touch-friendly buttons
- ✅ Flexible layouts

## 🚀 Deploy

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Other Platforms
- Netlify
- AWS Amplify
- DigitalOcean
- Google Cloud
- Self-hosted

## ⚡ Performance

- Server-side rendering
- Static site generation
- Code splitting
- Image optimization
- CSS minification
- Fast build times

## 🔒 Security

- Input validation on forms
- No sensitive data in frontend
- HTTPS ready
- Content Security Policy compatible

## 📊 AdSense Compliance

✅ High-quality original content  
✅ Clear site navigation  
✅ Professional layout  
✅ Mobile responsive  
✅ No prohibited content  
✅ Valid HTML/CSS  

## 🎯 SEO

✅ Meta descriptions  
✅ Heading hierarchy  
✅ Internal linking  
✅ Mobile optimized  
✅ Fast loading  
✅ Structured data  

## 📞 Contact

**Email**: info@fuvahmulah-tourism.com  
**Location**: Fuvahmulah, Sinle Atoll, Maldives  
**Support**: 24/7

## 📜 License

MIT License - Use freely for your tourism business

---

**Version**: 1.0.0  
**Built with**: Next.js 16, TypeScript, Tailwind CSS  
**Last Updated**: December 2024
