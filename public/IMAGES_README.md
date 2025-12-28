# Local Images and Videos Setup

This guide explains how to add your own images and videos to the website.

## Image Files

Place your images in the `public/images/` folder. The website expects these files:

- **solar-concentration.jpg** - Image showing solar concentration process
- **heat-transfer.jpg** - Image showing heat transfer mechanism
- **steam-generation.jpg** - Image showing steam generation
- **hero-background.jpg** - Large background image for the landing page (used at 40% opacity)
- **technology-background.jpg** - Background image for the technology section (currently optional)

## Video Files

Place your videos in the `public/videos/` folder:

- **technology-demo.mp4** - 16:9 aspect ratio video demonstrating the technology

## Configuration

All image and video paths are configured in `src/config.ts`. You can modify the paths there if needed.

### Recommended Image Specifications

For best results, ensure images meet these specifications:

- **Format**: JPG, PNG, or WebP
- **Aspect Ratio**: 16:9 (1920x1080 or similar)
- **File Size**: 200KB - 1MB (compressed for web)
- **Quality**: High quality, professional imagery

### Example File Structure

```
project/
├── public/
│   ├── images/
│   │   ├── solar-concentration.jpg
│   │   ├── heat-transfer.jpg
│   │   ├── steam-generation.jpg
│   │   └── hero-background.jpg
│   └── videos/
│       └── technology-demo.mp4
├── src/
│   └── config.ts
└── ...
```

## Configuring External Links

Edit `src/config.ts` to add your Google Form and Calendar IDs:

```typescript
export const config = {
  externalLinks: {
    googleFormId: 'YOUR_GOOGLE_FORM_ID_HERE',  // Replace with your form ID
    googleCalendarId: 'YOUR_GOOGLE_CALENDAR_ID_HERE',  // Optional
  },
};
```

### Getting Your Google Form ID

1. Open your Google Form
2. Click the "Send" button
3. Copy the link that appears
4. Extract the ID from the URL: `https://docs.google.com/forms/d/e/{FORM_ID}/viewform`

## Testing

If an image fails to load, the website will display a placeholder message instead of breaking the layout. This ensures the site remains functional while you add your images.
