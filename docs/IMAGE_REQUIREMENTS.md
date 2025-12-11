# Image Requirements & Submission Guidelines

## Overview

This document outlines the technical specifications, file formats, and naming conventions for photos used on the Fuvahmulah website. All images should be authentic photos of Fuvahmulah locations and experiences, not generic stock photos.

---

## 📸 Recommended Image Dimensions

### Hero Carousel Images
- **Dimensions:** 1920px × 1080px (16:9 aspect ratio)
- **Use Case:** Full-screen carousel slides on homepage
- **Best For:** Wide landscape shots, aerial views
- **File Size:** Max 500KB (compressed for web)

### Attraction Page Hero Images
- **Dimensions:** 800px × 600px (4:3 aspect ratio)
- **Use Case:** Primary image on attraction detail pages
- **Best For:** Main/iconic view of location
- **File Size:** Max 400KB

### Highlight Card Images
- **Dimensions:** 400px × 300px (4:3 aspect ratio)
- **Use Case:** Cards displayed on homepage and category pages
- **Best For:** Medium shots that work well in grid layouts
- **File Size:** Max 200KB

### Gallery Images
- **Dimensions:** 800px × 600px (4:3 aspect ratio) or square 500px × 500px
- **Use Case:** Gallery grid pages
- **Best For:** Variety of angles and moments
- **File Size:** Max 400KB each

### Testimonial Avatar Images
- **Dimensions:** 100px × 100px (1:1 aspect ratio, square)
- **Use Case:** User profile photos in testimonials
- **Best For:** Close-up portraits or avatars
- **File Size:** Max 50KB
- **Note:** Can use placeholder avatars if real photos unavailable

### Accommodation Room Images
- **Dimensions:** 800px × 600px (4:3 aspect ratio)
- **Use Case:** Hotel and resort room/facility photos
- **Best For:** Interior and exterior shots
- **File Size:** Max 400KB

### Dining Images
- **Dimensions:** 800px × 600px (4:3 aspect ratio)
- **Use Case:** Restaurant/dining venue photos and food shots
- **Best For:** Restaurant atmosphere, food, and ambiance
- **File Size:** Max 400KB

---

## 📁 File Organization

All images are organized in `public/images/` with the following structure:

```
public/images/
├── hero/                           # Homepage carousel slides
│   ├── dive-into-adventure.jpg
│   ├── experience-paradise.jpg
│   ├── explore-fuvahmulah.jpg
│   └── create-memories.jpg
│
├── attractions/                    # Attraction location photos
│   ├── tiger-point/
│   │   ├── hero.jpg
│   │   ├── gallery-1.jpg
│   │   ├── gallery-2.jpg
│   │   └── gallery-3.jpg
│   ├── vasho-veyo/
│   ├── bikini-beach/
│   ├── lily-beach/
│   ├── dhiddhoo-central/
│   └── hammerhead-point/
│
├── accommodation/                  # Hotel and accommodation photos
│   ├── hotels/
│   │   └── fuvahmulah-resort-spa/
│   │       ├── hero.jpg
│   │       ├── room-1.jpg
│   │       ├── lobby.jpg
│   │       └── spa.jpg
│   ├── guest-houses/
│   └── inns/
│
├── dining/                         # Restaurant and dining photos
│   ├── reef-restaurant/
│   │   ├── hero.jpg
│   │   ├── dining-area.jpg
│   │   └── dish-1.jpg
│   └── local-cuisine.jpg
│
├── highlights/                     # Homepage highlight card images
│   ├── tiger-point-reef.jpg
│   ├── vasho-veyo-beach.jpg
│   ├── hammerhead-point.jpg
│   ├── fuvahmulah-resort-spa.jpg
│   ├── reef-restaurant.jpg
│   └── sunset-cruise.jpg
│
├── gallery/                        # Gallery page collection
│   ├── landscape-1.jpg
│   ├── landscape-2.jpg
│   ├── landscape-3.jpg
│   ├── landscape-4.jpg
│   ├── underwater-1.jpg
│   ├── underwater-2.jpg
│   ├── underwater-3.jpg
│   ├── cultural-1.jpg
│   └── cultural-2.jpg
│
├── testimonials/                   # User profile photos
│   ├── john-smith.jpg
│   ├── sarah-johnson.jpg
│   ├── michael-chen.jpg
│   └── emma-wilson.jpg
│
└── blog/                           # Blog featured images
    └── default-featured.jpg
```

---

## 🎨 File Format Recommendations

### Primary Format: WebP
- **Extension:** `.webp`
- **Compression:** Lossy (quality 75-85)
- **Benefits:** Modern format, best compression, widely supported
- **Browser Support:** All modern browsers (95%+ users)

### Fallback Format: JPEG
- **Extension:** `.jpg` or `.jpeg`
- **Compression:** Quality 80-85
- **Benefits:** Universal compatibility, good compression
- **Use When:** WebP causes compatibility issues

### Alternative Format: PNG
- **Extension:** `.png`
- **Use Only For:** Images with transparency or lossless graphics
- **Note:** Generally larger file size, avoid for photos

---

## 📋 File Size Specifications

### Maximum File Sizes
| Image Type | Max File Size | Recommended |
|-----------|---------------|------------|
| Hero Carousel | 500KB | 300-400KB |
| Attraction Hero | 400KB | 250-350KB |
| Highlight Cards | 200KB | 120-180KB |
| Gallery Images | 400KB | 250-350KB |
| Testimonial Avatars | 50KB | 20-40KB |
| Product/Room Images | 400KB | 250-350KB |
| Blog Featured | 400KB | 250-350KB |

### Compression Guidelines
1. **Use online compression tools:**
   - TinyJPG/TinyPNG
   - ImageOptim
   - ImageMagick CLI
   - Squoosh (Google)

2. **Maintain visual quality while reducing size:**
   - Target compression ratio: 50-70%
   - Test quality at different compression levels
   - Verify images look good across all devices

---

## 📝 Naming Conventions

### Standard Format
```
[location]-[type]-[variant].webp
```

### Examples
```
tiger-point-reef-hero.webp
tiger-point-reef-gallery-1.webp
vasho-veyo-beach-sunset.webp
fuvahmulah-resort-spa-room-1.webp
reef-restaurant-dining-area.webp
```

### Guidelines
- Use **lowercase** only
- Use **hyphens** to separate words (no spaces, underscores, or camelCase)
- Be descriptive but concise
- Include location and type information
- Number variants sequentially (gallery-1, gallery-2, etc.)

### Avoid
```
❌ Fuvahmulah Beach.jpg          (spaces, uppercase)
❌ tiger_point_diving.webp       (underscores)
❌ IMG_20251211_123456.webp      (generic camera naming)
❌ photo1.webp                   (non-descriptive)
```

---

## 🖼️ Image Content Guidelines

### Attraction Photos
- **Must Show:** Distinctive features, realistic lighting, actual conditions
- **Avoid:** Heavy filters, unrealistic colors, generic beach/water photos
- **Best Practices:**
  - Capture during golden hour (sunrise/sunset) for best lighting
  - Include diverse perspectives (wide, medium, close-up)
  - Show people enjoying activities (when possible)

### Underwater/Diving Photos
- **Must Include:** Marine life, coral formations, or divers in action
- **Avoid:** Murky water, unclear subjects
- **Best Practices:**
  - Shoot with underwater camera or housing
  - Maximize color and clarity (use color correction)
  - Include shark sightings if available (tiger point specialty)

### Accommodation Photos
- **Exterior:** Building entrance, grounds, pool area
- **Interior:** Rooms, lobby, dining areas, spa facilities
- **Must Show:** Clean, well-lit, inviting spaces
- **Avoid:** Cluttered rooms, dated furniture, poor lighting

### Dining Photos
- **Restaurant Shots:** Ambiance, outdoor seating, water views
- **Food Photography:** Plated dishes, appetizers, beverages
- **Must Show:** Fresh, appetizing presentation
- **Avoid:** Messy plates, poor plating, unappealing colors

### Cultural/Local Photos
- **Content:** Local markets, festivals, traditional activities, community
- **Respect:** Obtain permission before photographing people
- **Authentic:** Show genuine local life and experiences

---

## 📷 Photo Sources

### Preferred Sources (in order of priority)
1. **Local Photographers**
   - Contact local photography businesses in Fuvahmulah
   - Hire professional photographers for professional shots
   - Consider tourism board partnerships

2. **Tourist Photos**
   - Request high-quality photos from past guests
   - Include usage rights in booking confirmation/follow-up
   - Create photo submission form on website

3. **Tourism Board**
   - Contact Maldives Department of Tourism
   - Request local destination photography
   - Check licensing agreements

4. **Licensed Stock Photos** (only if no alternatives)
   - Unsplash (free, no attribution required)
   - Pexels (free, no attribution required)
   - Pixabay (free, no attribution required)
   - Only use as placeholders until real photos available

### ❌ Avoid
- **Generic Stock Photos:** Photos not from Fuvahmulah
- **Stock Photos Without License:** Respect copyright
- **AI-Generated Images:** Not authentic to location
- **Heavily Edited/Filtered:** Unrealistic representations

---

## ✅ Quality Checklist

Before uploading any image, verify:

- [ ] **Resolution:** Matches required dimensions
- [ ] **File Size:** Under maximum size limit
- [ ] **Format:** WebP preferred, JPEG acceptable
- [ ] **Naming:** Follows naming conventions
- [ ] **Location:** Placed in correct folder
- [ ] **Authenticity:** Actually from Fuvahmulah
- [ ] **Quality:** Clear, well-lit, professional
- [ ] **Copyright:** Have right to use image
- [ ] **No Branding:** Remove logos/watermarks if possible
- [ ] **Mobile-Friendly:** Test on mobile devices

---

## 🔄 Updating Images

### Adding New Photos

1. **Prepare Image:**
   - Resize to required dimensions
   - Compress to meet file size requirements
   - Convert to WebP format
   - Apply descriptive filename

2. **Upload:**
   - Place in appropriate folder under `public/images/`
   - Update `lib/images.ts` with new path (if new location)
   - Update `data/imageTodos.ts` to mark as completed

3. **Test:**
   - Build and test locally
   - Verify image displays correctly on all devices
   - Check load times and performance
   - Validate alt text and metadata

### Replacing Existing Photos

1. Keep old image file
2. Give new version same name
3. Test thoroughly in development
4. Deploy with confidence in production

---

## 📊 Current Status

See `data/imageTodos.ts` for a complete list of:
- Images still needed
- Priority levels (high/medium/low)
- Specific requirements for each
- Completion status

### Quick Stats
Run this to get image requirements summary:
```typescript
import { getImageTodoStats, getImageTodosByPriority } from '@/data/imageTodos';

const stats = getImageTodoStats();
console.log(`Completion: ${stats.completed}/${stats.total} (${stats.completionPercentage}%)`);
console.log(`High Priority Pending: ${stats.highPriority}`);
```

---

## 📧 Photo Submission Process

To submit photos for the website:

1. **Email** high-resolution images to: **photos@fuvahmulah.info**
2. **Include:**
   - Location name
   - Date taken
   - Brief description of content
   - Your name and contact info
   - Consent for website use

3. **Approval Process:**
   - Review for quality and authenticity
   - Verify copyright/rights
   - Optimize and resize
   - Add to website within 1 week

---

## 💡 Best Practices

1. **Consistency:** Maintain similar color grading and style across location
2. **Variety:** Include different angles, times of day, seasons
3. **People:** Include tourists/locals enjoying activities (diverse representation)
4. **Storytelling:** Images should convey destination appeal and experiences
5. **SEO:** Use descriptive alt text with location and activity keywords
6. **Performance:** Prioritize performance - optimize aggressively
7. **Mobile-First:** Test primarily on mobile devices (60%+ of traffic)

---

## 🎯 Goals

- **Complete High-Priority Images:** 100% (by Q1 2026)
- **Replace All Placeholders:** 100% with authentic Fuvahmulah photos
- **Average Page Load:** < 2 seconds with images
- **Mobile Image Optimization:** All images responsive and optimized
- **Consistent Visual Identity:** Professional, cohesive look across all pages

---

## 📞 Contact & Support

For questions about image requirements or to submit photos:
- **Email:** photos@fuvahmulah.info
- **Contact Form:** `/contact` page
- **Issues:** GitHub issues or direct message

---

**Last Updated:** December 11, 2025  
**Document Version:** 1.0
