# Images Directory

This folder contains all images used throughout the KMUN website.

## Folder Structure

- `hero/` - Hero section images
- `profile-pictures/` - Profile pictures for office members, chapter leads, etc.
- `chapters/` - Chapter-specific images and banners
- `general/` - General website images (logos, backgrounds, etc.)
- `events/` - Event and conference images

## Image Guidelines

- Use descriptive filenames (e.g., `president-john-doe.jpg`)
- Optimize images for web (recommended: WebP format, under 500KB)
- Include alt text when importing images
- Use consistent aspect ratios within categories

## Adding New Images

1. Place images in the appropriate subfolder
2. Import in your component: `import imageName from '@/assets/images/folder/image.jpg'`
3. Use with proper alt text: `<img src={imageName} alt="descriptive text" />`