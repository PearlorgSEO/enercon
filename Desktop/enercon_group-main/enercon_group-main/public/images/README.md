# Public Assets Directory

This directory contains all public static assets for the Enercon Group website.

## Directory Structure

```
public/
├── images/
│   ├── enercondubai_logo.webp (Header logos)
│   ├── footer_logo.webp (Footer logo)
│   ├── mapimg.webp (Map background)
│   ├── page-title-bg.jpg (Page title background)
│   ├── about-image.jpg (About page image)
│   └── [product images]
└── README.md (this file)
```

## Required Images

### Logo Files
- `enercondubai_logo.webp` - Main logo for header (all variants)
- `footer_logo.webp` - Logo for footer section

### Background Images
- `mapimg.webp` - Map placeholder image for footer
- `page-title-bg.jpg` - Background image for page titles

### Content Images
- `about-image.jpg` - Image for About Us page
- Product images for product pages

## Image Specifications

### Logos
- Format: WebP or PNG recommended
- Header logo: Recommended height 100px max
- Footer logo: Recommended height 88px

### Page Backgrounds
- Format: JPG or WebP
- Recommended size: 1920x600px minimum

### Content Images
- Format: JPG, PNG, or WebP
- Optimize for web (compress before uploading)
- Use responsive images where applicable

## Usage

All images in this directory can be referenced in components using the path `/images/filename.ext`

Example:
```tsx
<img src="/images/enercondubai_logo.webp" alt="Enercon Logo" />
```

## Notes

- Keep all image files optimized for web to maintain fast page load times
- Use WebP format where possible for better compression
- Maintain consistent naming conventions
- Consider using Next.js Image component for automatic optimization
