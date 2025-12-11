# Quick Start: Adding Real Photos to Fuvahmulah Website

## 🚀 Fast Track Guide

### 1. Prepare Your Image
```bash
# Install ImageMagick (if not already installed)
brew install imagemagick  # macOS
apt-get install imagemagick  # Linux
choco install imagemagick  # Windows

# Resize and optimize image (example: hero image)
convert input.jpg -resize 1920x1080 -quality 80 -strip hero.jpg

# Or use online tools:
# - TinyJPG/TinyPNG: tinyjpg.com
# - Squoosh: squoosh.app (Google)
```

### 2. Convert to WebP Format (Optional but Recommended)
```bash
# Using ImageMagick
convert hero.jpg -quality 75 hero.webp

# Or online: https://cloudconvert.com
```

### 3. Add Image to Project
```bash
# Copy image to correct folder
cp hero.webp public/images/hero/dive-into-adventure.webp

# Or for attractions:
cp photo.jpg public/images/attractions/tiger-point/gallery-1.jpg
```

### 4. Update Image Constants
**File:** `lib/images.ts`

```typescript
export const IMAGES = {
  hero: {
    slide1: '/images/hero/dive-into-adventure.webp', // ✅ Updated
  }
}
```

### 5. Remove TODO Comment
Find and remove the TODO comment above the path (or update it to mark as done).

### 6. Test Locally
```bash
# Build and test
npm run dev

# Visit http://localhost:3000
# Verify image displays correctly
```

### 7. Deploy
```bash
git add .
git commit -m "feat: add real photo for [location]"
git push
```

---

## 📋 By Location

### Adding Hero Carousel Images

**Files to Update:** `app/page.tsx` and `lib/images.ts`

```typescript
// lib/images.ts
export const IMAGES = {
  hero: {
    slide1: '/images/hero/dive-into-adventure.webp',
    slide2: '/images/hero/experience-paradise.webp',
    slide3: '/images/hero/explore-fuvahmulah.webp',
    slide4: '/images/hero/create-memories.webp',
  }
}

// No changes needed in page.tsx - automatically uses new images!
```

**Steps:**
1. Prepare 4 images (1920×1080 each)
2. Place in `public/images/hero/`
3. Update paths in `lib/images.ts`
4. Test and deploy

---

### Adding Attraction Photos

**Files to Update:** `lib/images.ts`

**Example - Tiger Point Reef:**

```typescript
export const IMAGES = {
  attractions: {
    tigerPoint: {
      hero: '/images/attractions/tiger-point/hero.webp',
      gallery: [
        '/images/attractions/tiger-point/gallery-1.jpg',
        '/images/attractions/tiger-point/gallery-2.jpg',
        '/images/attractions/tiger-point/gallery-3.jpg',
      ],
    },
  }
}
```

**Steps:**
1. Create folder: `public/images/attractions/tiger-point/`
2. Add images: `hero.webp`, `gallery-1.jpg`, `gallery-2.jpg`, `gallery-3.jpg`
3. Update `lib/images.ts` with real paths
4. Test and deploy

---

### Adding Homepage Highlight Card Images

**Files to Update:** `lib/images.ts`

```typescript
export const IMAGES = {
  highlights: {
    tigerPointReef: '/images/highlights/tiger-point-reef.jpg',
    vashoVeyoBeach: '/images/highlights/vasho-veyo-beach.jpg',
    // ... etc
  }
}
```

**Steps:**
1. Create folder: `public/images/highlights/`
2. Add 6 card images (400×300 each)
3. Update `lib/images.ts`
4. No component changes needed!
5. Deploy

---

### Adding Gallery Images

**Files to Update:** `lib/images.ts`

```typescript
export const IMAGES = {
  gallery: {
    landscapes: [
      '/images/gallery/landscape-1.jpg',
      '/images/gallery/landscape-2.jpg',
      // ...
    ],
    underwater: [
      '/images/gallery/underwater-1.jpg',
      // ...
    ],
    cultural: [
      '/images/gallery/cultural-1.jpg',
      // ...
    ],
  }
}
```

---

## 🛠️ Batch Operations

### Add Multiple Images at Once

```bash
#!/bin/bash
# script: add-images.sh

# Convert all JPGs in current directory to WebP
for file in *.jpg; do
  convert "$file" -quality 75 "${file%.jpg}.webp"
done

# Organize into folder structure
mkdir -p public/images/attractions/tiger-point
mv tiger-point-*.webp public/images/attractions/tiger-point/

echo "Images ready for import"
```

### Update Multiple Constants

```typescript
// Update multiple paths at once in lib/images.ts
export const IMAGES = {
  attractions: {
    tigerPoint: {
      hero: '/images/attractions/tiger-point/hero.webp',
      gallery: [
        '/images/attractions/tiger-point/gallery-1.webp',
        '/images/attractions/tiger-point/gallery-2.webp',
        '/images/attractions/tiger-point/gallery-3.webp',
      ],
    },
    vashoVeyo: {
      hero: '/images/attractions/vasho-veyo/hero.webp',
      gallery: [
        '/images/attractions/vasho-veyo/gallery-1.webp',
        '/images/attractions/vasho-veyo/gallery-2.webp',
      ],
    },
  }
}
```

---

## ✅ Verification Checklist

Before deploying new images:

- [ ] Image is from Fuvahmulah (authentic)
- [ ] Correct dimensions for use case
- [ ] File size under limit
- [ ] Saved in correct folder
- [ ] Path updated in `lib/images.ts`
- [ ] TODO comment removed/updated
- [ ] Local build successful (`npm run build`)
- [ ] Image displays correctly
- [ ] Image is responsive on mobile
- [ ] Alt text is descriptive
- [ ] Committed with meaningful message
- [ ] Pushed to repository

---

## 🎯 Completion Tracking

Use this command to check progress:

```bash
# Count completed images
ls -R public/images/ | grep -c -E '\.(jpg|jpeg|png|webp)$'

# View image requirements
cat data/imageTodos.ts | grep "completed: true" | wc -l
```

Or use the dashboard function:

```typescript
import { getImageTodoStats } from '@/data/imageTodos';

const stats = getImageTodoStats();
console.log(`${stats.completed}/${stats.total} images complete (${stats.completionPercentage}%)`);
console.log(`${stats.highPriority} high-priority images still needed`);
```

---

## 📞 Need Help?

### Reference Files
- **Image Specs:** `docs/IMAGE_REQUIREMENTS.md`
- **Todo List:** `data/imageTodos.ts`
- **Code Reference:** `lib/images.ts`
- **System Overview:** `IMAGE_MANAGEMENT_SYSTEM.md`

### Common Issues

**Q: Image not showing?**
- Check path in `lib/images.ts` matches actual file location
- Verify image file exists in `public/images/`
- Clear browser cache: Hard refresh (Ctrl+Shift+R)

**Q: Image is too large?**
- Use compression tools (TinyJPG, Squoosh)
- Convert to WebP format
- Ensure dimensions match specifications

**Q: How do I know which images to add first?**
- Look for `// TODO:` comments in code
- Check `data/imageTodos.ts` - sort by priority: "high"
- Hero and highlight cards are highest priority

---

## 🚀 One-Command Deploy

```bash
# After placing image in public/images/ and updating lib/images.ts:
npm run build && git add -A && git commit -m "feat: add real photo for [location]" && git push
```

---

**Last Updated:** December 11, 2025
