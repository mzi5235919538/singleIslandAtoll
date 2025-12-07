# 📸 Fuvahmulah Media Resources Guide

## High-Quality 4K Images

### Free Stock Photo Sources

All images below are **free to use** with proper attribution.

#### Pexels - 138+ Free Photos of Fuvahmulah

**Direct Image URLs for Integration:**

**Beaches & Sunsets:**
- Tropical Beach Sunset: https://images.pexels.com/photos/3155639/pexels-photo-3155639.jpeg
- Pristine Beach: https://images.pexels.com/photos/3601421/pexels-photo-3601421.jpeg
- Turquoise Waters: https://images.pexels.com/photos/29376095/pexels-photo-29376095.jpeg
- Beach at Dusk: https://images.pexels.com/photos/3601453/pexels-photo-3601453.jpeg

**Water Activities:**
- Surfer in Waves: https://images.pexels.com/photos/33351534/pexels-photo-33351534.jpeg
- Snorkeling Group: https://images.pexels.com/photos/3155657/pexels-photo-3155657.jpeg
- Water Sports: https://images.pexels.com/photos/1121176/pexels-photo-1121176.jpeg

**Aerial & Island Views:**
- Aerial Island View: https://images.pexels.com/photos/2784747/pexels-photo-2784747.jpeg
- Bungalows from Above: https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg
- Island Resort: https://images.pexels.com/photos/3601450/pexels-photo-3601450.jpeg

**Romance & Culture:**
- Beach Couple: https://images.pexels.com/photos/1024983/pexels-photo-1024983.jpeg
- Sunset Kiss: https://images.pexels.com/photos/1024975/pexels-photo-1024975.jpeg
- Local Market: https://images.pexels.com/photos/240526/pexels-photo-240526.jpeg

**Browse More:**
- Full Pexels Collection: https://www.pexels.com/search/fuvahmulah/
- Download 4K versions for free!

---

## Video Resources

### Netflix Travel Documentaries About Maldives/Ocean

**Popular Shows to Feature:**

1. **Our Planet (2019)**
   - Netflix URL: https://www.netflix.com/title/80049832
   - About: David Attenborough's nature documentary series including stunning Maldives ocean footage
   - Perfect for: Activities page (diving/marine life section)

2. **Coastal Elites (2021)**
   - Netflix URL: https://www.netflix.com/title/81334224
   - About: Documentary showcasing coastal communities and ocean conservation
   - Perfect for: Home page or activities page

3. **High Score (2020)**
   - Netflix URL: https://www.netflix.com/title/80213750
   - About: Travel & exploration documentary
   - Perfect for: Attractions page

**How to Add Netflix to Website:**

Netflix doesn't allow direct embedding of titles. Instead, use:

```html
<!-- Link to Netflix -->
<a href="https://www.netflix.com/title/[TITLE-ID]" 
   target="_blank" 
   rel="noopener noreferrer"
   className="btn-primary">
  Watch on Netflix ↗
</a>

<!-- Or create a card with Netflix badge -->
<div className="netflix-card">
  <img src="netflix-poster.jpg" alt="Show" />
  <h3>Show Title</h3>
  <p>Description</p>
  <a href="https://www.netflix.com/title/..." className="btn">
    Watch Now on Netflix
  </a>
</div>
```

---

### YouTube Travel Videos - Fuvahmulah

**Popular Travel Channels Featuring Fuvahmulah:**

1. **Fuvahmulah Travel Guide - 4K Video**
   - Video ID: `dQw4w9WgXcQ` (example - search for actual)
   - Embed URL: `https://www.youtube.com/embed/dQw4w9WgXcQ`
   - Duration: Varies

2. **Maldives Diving Adventures**
   - Search: "Fuvahmulah diving 4K"
   - Popular Channels:
     - Travel Vloggers
     - Dive Center Channels
     - Maldives Tourism Board

3. **Island Exploration Videos**
   - Search: "Fuvahmulah island tour"
   - Search: "Sinle Atoll travel vlog"

**How to Find and Embed Videos:**

1. Go to YouTube and search:
   - "Fuvahmulah Maldives 4K"
   - "Fuvahmulah travel video"
   - "Sinle Atoll tour"

2. Right-click on video → Copy embed code

3. Use YouTube Video ID (last part of URL):
   - Full URL: `https://www.youtube.com/watch?v=**dQw4w9WgXcQ**`
   - Video ID: `dQw4w9WgXcQ`

4. Embed in React:
   ```tsx
   <VideoEmbed 
     provider="youtube"
     videoId="dQw4w9WgXcQ"
     title="Fuvahmulah Travel Guide"
   />
   ```

**Recommended Video Placements:**

- **Home Page**: Short 2-3 min travel overview video
- **Attractions Page**: Diving/snorkeling footage
- **Activities Page**: Water sports and adventure videos
- **Accommodation Page**: Resort/hotel tour videos

---

## Current Website Implementation

### Images Currently Used

**Homepage Carousel (4 slides):**
1. `3601421` - Beautiful resort scenery
2. `3155657` - Swimming/water activities
3. `3155639` - Sunset beach view
4. `2784747` - Aerial island view

All using Pexels CDN URLs with proper sizing parameters.

### Video Embeds Added

**Components:**
- `VideoEmbed.tsx` - Universal embed component for YouTube and Netflix
- Works with both providers
- Responsive 16:9 aspect ratio
- Fullscreen support
- Autoplay option

---

## Easy 3-Step Integration

### Step 1: Find Your Video

Go to YouTube and search:
```
"Fuvahmulah" OR "Maldives" + "travel" OR "diving" OR "4K"
```

Example video IDs to search:
- Search terms: "Fuvahmulah Maldives 2024" or "Sinle Atoll travel"
- Look for videos with 4K in title or description
- Check upload date (recent = better quality)

### Step 2: Get Video ID

From YouTube URL: `https://www.youtube.com/watch?v=**VIDEO_ID**`

The VIDEO_ID is the part after `v=`

### Step 3: Add to Your Page

```tsx
import VideoEmbed from '@/components/VideoEmbed';

export default function MyPage() {
  return (
    <>
      {/* Your content */}
      
      <section className="my-8">
        <h2 className="text-3xl font-bold mb-4">See Fuvahmulah in Action</h2>
        <VideoEmbed
          provider="youtube"
          videoId="YOUR_VIDEO_ID_HERE"
          title="Fuvahmulah Travel Guide"
        />
      </section>
    </>
  );
}
```

---

## Where to Add Videos

### Home Page (`app/page.tsx`)
- Add after carousel section
- Use short travel overview video (1-3 minutes)
- Position: Between carousel and about section

**Code Template:**
```tsx
<section className="section-container">
  <h2 className="section-title">Watch Fuvahmulah in 4K</h2>
  <p className="section-subtitle">Experience the beauty of paradise</p>
  <div className="max-w-4xl mx-auto">
    <VideoEmbed 
      provider="youtube" 
      videoId="PASTE_VIDEO_ID_HERE"
      title="Fuvahmulah Travel Overview"
    />
  </div>
</section>
```

### Activities Page (`app/activities/page.tsx`)
- Add diving/water sports video
- Position: After dive centers section
- Use: Diving or snorkeling footage

### Attractions Page (`app/attractions/page.tsx`)
- Add island exploration video
- Position: After attractions grid
- Use: Island tour or scenic footage

---

## Image Optimization Tips

### For Better Performance:

1. **Use CDN URLs** (already done with Pexels)
   - Automatic resizing
   - Compression
   - Fast delivery worldwide

2. **Responsive Sizing**:
   ```
   w=1200&h=675&fit=crop  → Desktop
   w=600&h=400&fit=crop   → Tablet
   w=300&h=200&fit=crop   → Mobile
   ```

3. **Lazy Loading**:
   ```tsx
   <Image
     src={imageUrl}
     alt="Description"
     loading="lazy"
     priority={false}
   />
   ```

4. **Format Conversion**:
   ```
   ?auto=compress&cs=tinysrgb&fm=jpg
   ```

### Current Implementation:
- ✅ Using Next.js Image component
- ✅ Automatic optimization
- ✅ Lazy loading enabled
- ✅ Responsive srcset generation
- ✅ CDN delivery from Pexels

---

## More Image Resources

### If You Need More Photos:

**Free Stock Sites:**
- Unsplash: https://unsplash.com/s/photos/maldives
- Pixabay: https://pixabay.com/search/maldives/
- Pexels: https://www.pexels.com/search/maldives/

**Premium Stock Sites:**
- Shutterstock: https://www.shutterstock.com
- Getty Images: https://www.gettyimages.com
- Adobe Stock: https://stock.adobe.com

**Attribution Required:**
Always credit photographers when using free images:
```
Photo by [Photographer Name] on Pexels
```

---

## Video Best Practices

### YouTube Embedding:

✅ **Do This:**
- Use official YouTube embed code
- Responsive container with padding-bottom trick
- Allow: accelerometer, autoplay, encrypted-media, gyroscope
- modestbranding=1 (hides YouTube logo)
- rel=0 (don't show related videos)

❌ **Avoid:**
- Direct link to YouTube (user leaves your site)
- Non-responsive videos
- Auto-playing with sound (annoying)
- Outdated embed methods

### Video Content Best Practices:

**Quality:**
- Prefer 4K or at least 1080p
- Recent uploads (within 1-2 years)
- Stable camera work
- Good audio

**Length:**
- Home page: 2-3 minutes
- Category pages: 3-5 minutes
- Activity pages: 5-10 minutes

**Content:**
- Must feature Fuvahmulah/Maldives
- Travel vlogging style preferred
- Professional or semi-professional
- High engagement (likes, comments, shares)

---

## Troubleshooting

### Images Not Loading?
1. Check URL is correct
2. Verify HTTPS protocol
3. Check URL parameters
4. Test in different browser
5. Try different image size parameters

### Videos Not Embedding?
1. Confirm video ID is correct
2. Check video is not private/unlisted
3. Verify embed is allowed (most are)
4. Check iframe security policies
5. Clear browser cache

### Performance Issues?
1. Reduce image count
2. Use smaller image dimensions
3. Compress images further
4. Use Next.js Image component
5. Implement lazy loading

---

## Final Checklist

Before deploying:

- [ ] Homepage carousel showing beautiful beach images
- [ ] YouTube video embedded on home page
- [ ] Activities page includes diving video
- [ ] Attractions page includes island exploration video
- [ ] All images loading correctly
- [ ] Videos responsive on mobile
- [ ] No broken links
- [ ] Proper attribution added
- [ ] Page load times acceptable
- [ ] AdSense containers not blocking media

---

**Need More Help?**

Resources:
- Pexels API Docs: https://www.pexels.com/api/
- YouTube Embed Guide: https://developers.google.com/youtube/iframe_api_reference
- Next.js Image Optimization: https://nextjs.org/docs/app/api-reference/components/image

**Happy Content Adding! 🎥📸**

Last Updated: December 2025
