# 📢 Google AdSense Setup Guide

## Getting Approved for Google AdSense

### Prerequisites for AdSense Approval

✅ **Website Requirements**:
- Unique, original content
- Professional design
- Clear navigation
- Privacy policy
- About page
- Contact information
- Mobile responsive
- Fast loading times
- No copyright violations
- No adult/violent content

✅ **Your Fuvahmulah Website Has All These!**

### Step 1: Create Google AdSense Account

1. Go to: https://www.google.com/adsense/
2. Click "Sign Up Now"
3. Sign in with Google account
4. Provide website details:
   - Website: `your-domain.com`
   - Category: "Travel"
   - Time zone: Maldives (UTC+5)

### Step 2: Verification

1. Google will give you verification code
2. Add to your website (choose one method):

**Method A: HTML Tag** (Easiest)

Add to `app/layout.tsx` in `<head>`:
```tsx
<meta
  name="google-site-verification"
  content="your-verification-code"
/>
```

**Method B: DNS Record**

Add TXT record to your domain DNS:
```
Name: @
Type: TXT
Value: google-site-verification=your-verification-code
```

**Method C: Google Analytics**

Link your Google Analytics account

### Step 3: Wait for Approval

- Timeline: 1-3 weeks typically
- Check AdSense dashboard for updates
- May receive approval or rejection email

### Step 4: Add Ad Code (Once Approved)

---

## Adding AdSense Ads to Your Site

### Method 1: Auto Ads (Easiest)

Once approved, Google can automatically place ads.

Add this to `app/layout.tsx`:

```tsx
<script
  async
  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-xxxxxxxxxxxxxxxx"
  crossOrigin="anonymous"
></script>
```

Then enable Auto Ads in your AdSense dashboard.

### Method 2: Manual Ad Placement (Recommended)

Add specific ad units to pages.

**Step 1: Get Your Ad Code from AdSense Dashboard**

1. Go to Ads → Ad units → New ad unit
2. Choose ad type (Display, In-article, In-feed)
3. Give it a name
4. Get the ad code

**Step 2: Replace Placeholder Code**

In your pages, replace:
```tsx
<div className="adsense-container">
  <ins class="adsbygoogle"
       style="display:inline-block;width:728px;height:90px"
       data-ad-client="ca-pub-xxxxxxxxxxxxxxxx"
       data-ad-slot="1234567890"></ins>
</div>
```

With your actual code:
```tsx
<div className="adsense-container">
  <ins class="adsbygoogle"
       style="display:inline-block;width:728px;height:90px"
       data-ad-client="ca-pub-YOUR-CLIENT-ID"
       data-ad-slot="YOUR-SLOT-ID"></ins>
</div>
```

**Step 3: Push Code to Initialize**

Add this after your ads:
```tsx
<script>
  (adsbygoogle = window.adsbygoogle || []).push({});
</script>
```

Or add once in layout:
```tsx
useEffect(() => {
  if (window.adsbygoogle) {
    window.adsbygoogle.push({});
  }
}, []);
```

---

## Ad Placement Strategy

### Best Practices for Maximum Revenue

**For This Website, Recommended Placements**:

1. **Home Page (4 ads)**
   - After hero: 728x90 Leaderboard
   - After about section: 300x250 Medium Rectangle (sidebar)
   - After attractions grid: 728x90 Leaderboard
   - Before footer: 300x600 Half Page

2. **Content Pages (4 ads each)**
   - After hero section: 728x90
   - In sidebar: 300x250 (if space)
   - After main content: 300x250
   - Before footer: 728x90

3. **In-Article Ads** (Best Performance)
   - Place between paragraphs
   - Natural flow with content
   - Typically 300x250 or 336x280

### Ad Sizes & Performance

| Format | Size | Type | Revenue |
|--------|------|------|---------|
| Leaderboard | 728x90 | Display | Medium |
| Large Rectangle | 336x280 | Display | High |
| Medium Rectangle | 300x250 | Display | High |
| Half Page | 300x600 | Display | High |
| Mobile Banner | 320x50 | Mobile | Medium |
| In-Article | Various | Native | Very High |
| In-Feed | Various | Native | Very High |

---

## Current Ad Placeholders

### Home Page (`app/page.tsx`)
```
Line ~70: After carousel
Line ~130: After about section  
Line ~200: After attractions grid
Line ~280: Before footer
```

### Attraction Page (`app/attractions/page.tsx`)
```
Line ~40: After hero
Line ~100: After attractions grid
Line ~180: After wildlife section
Line ~220: Before footer
```

### Accommodation Page (`app/accommodation/page.tsx`)
```
Line ~40: After hero
Line ~100: After accommodation types
Line ~200: After featured properties
Line ~280: Before footer
```

### Dining Page (`app/dining/page.tsx`)
```
Line ~40: After hero
Line ~90: After restaurants
Line ~160: After featured establishments
Line ~240: Before footer
```

### Activities Page (`app/activities/page.tsx`)
```
Line ~40: After hero
Line ~95: After water activities
Line ~200: After dive centers
Line ~280: Before footer
```

### Contact Page (`app/contact/page.tsx`)
```
Line ~100: After contact form
Line ~200: After FAQs
Line ~230: Before footer
```

---

## Implementation Example

Here's how to add an ad to a page:

```tsx
// Import the component
import AdSenseContainer from '@/components/AdSenseContainer';

export default function MyPage() {
  return (
    <>
      {/* Your content */}
      
      {/* Add ad like this */}
      <AdSenseContainer />
      
      {/* More content */}
    </>
  );
}
```

To customize for specific ad:

```tsx
<div className="adsense-container">
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR-ID"
     crossOrigin="anonymous"></script>
  <ins className="adsbygoogle"
       style={{display:'inline-block', width:'300px', height:'250px'}}
       data-ad-client="ca-pub-YOUR-ID"
       data-ad-slot="YOUR-SLOT-ID"></ins>
  <script>
       (adsbygoogle = window.adsbygoogle || []).push({});
  </script>
</div>
```

---

## AdSense Policies Compliance

### Prohibited Content (Your Site ✓ Complies)

❌ **Avoid These:**
- Alcohol/tobacco promotion
- Weapons/explosives
- Fake documents
- Hacking/cracking tools
- Adult content
- Violence/harassment
- Illegal activities
- Copyright infringement

✅ **Your Site:**
- Clean family content
- Tourism information
- Hotel recommendations
- Restaurant reviews
- Water sports activities
- Cultural information

### AdSense Violations to Avoid

❌ **Don't do this:**
- Click your own ads
- Ask visitors to click ads
- Hide ads or mislead users
- Use invalid traffic
- Manipulate clicks
- Place ads on empty pages
- Show more ads than content
- Use misleading titles/tags

✅ **Do This:**
- Natural ad placement
- Balance ads and content
- Quality content first
- Let users click naturally
- Monitor invalid traffic
- Use valid traffic sources
- Follow Google policies

---

## Monitoring & Optimization

### AdSense Dashboard

Visit: https://www.google.com/adsense/

**Key Metrics to Monitor:**
- **Impressions**: Page views with ads
- **Clicks**: Ad clicks (CTR)
- **CTR**: Click-through rate %
- **CPM**: Cost per 1000 impressions
- **Revenue**: Earnings

### Optimization Tips

1. **Test Ad Placements**
   - Try different sizes
   - Above vs below fold
   - Sidebar vs center
   - Track performance

2. **Content Quality**
   - Unique, original content
   - Long-form articles
   - Regular updates
   - User engagement

3. **Traffic Quality**
   - Organic traffic (best)
   - Referral traffic
   - Direct traffic
   - Avoid invalid traffic

4. **Audience Targeting**
   - Location: Maldives → High CPM
   - Interests: Travel/tourism
   - Device: Mobile responsive
   - Time: Peak hours

---

## Troubleshooting

### "Ads Not Showing"

1. Check if account is approved
2. Verify ad codes are correct
3. Check console for errors
4. Wait 24-48 hours
5. Check `ads.txt` file (create if missing)

### Create ads.txt

1. Create file: `public/ads.txt`
2. Add your publisher ID
3. Content:
```
google.com, pub-YOUR-ID, DIRECT, f08c47fec0942fa0
```

### "Earning $0"

1. Check traffic quality
2. Verify ad placements
3. Update content
4. Improve user engagement
5. Wait for sufficient traffic

---

## Expected Earnings

### Revenue Estimates

**CPM** (Cost Per 1000 impressions):
- Travel niche: $2-10 CPM
- Maldives tourism: $5-15 CPM
- High-quality traffic: $10-30 CPM

**Example**:
- 10,000 monthly visits
- 5,000 impressions (50% ad viewability)
- $8 CPM
- **Monthly: $40**

---

## AdSense Tips for Tourism Sites

1. **High-Value Content**
   - Detailed travel guides
   - Hotel reviews
   - Activity descriptions
   - Local restaurant info

2. **Good User Experience**
   - Fast loading
   - Mobile friendly
   - Clear navigation
   - Easy contact

3. **Quality Traffic**
   - SEO optimization
   - Social media
   - Email marketing
   - Direct traffic

4. **Diversify Revenue**
   - Affiliate marketing (booking sites)
   - Sponsored content
   - Email subscriptions
   - Upsells

---

## Resources

- **AdSense Help**: https://support.google.com/adsense
- **AdSense Policies**: https://support.google.com/adsense/answer/48182
- **Policy Center**: https://adsense.google.com/adsense/policy-center
- **Communities**: https://www.en.adsensetips.com/

---

## Checklist Before Launch

- [ ] AdSense account created
- [ ] Verification code added
- [ ] Approval received
- [ ] Ad codes updated
- [ ] Ads displaying properly
- [ ] Mobile ads working
- [ ] No policy violations
- [ ] Traffic quality good
- [ ] Content is unique
- [ ] Navigation is clear

---

**Ready to Monetize? 💰**

Once approved, your Fuvahmulah tourism website will start earning from visitors interested in travel, hotels, activities, and dining!

**Good luck! 🌴**

Last Updated: December 2024
