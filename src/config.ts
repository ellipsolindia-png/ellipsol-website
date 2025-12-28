export const config = {
  images: {
    solarConcentration: '/images/solar-concentration.jpg',
    heatTransfer: '/images/heat-transfer.jpg',
    steamGeneration: '/images/steam-generation.jpg',
    heroBackground: '/images/hero-background.jpg',
    technologyBackground: '/images/technology-background.jpg',
  },
  videos: {
    technologyDemo: '/videos/technology-demo.mp4',
  },
  externalLinks: {
    googleFormId: 'YOUR_GOOGLE_FORM_ID_HERE',
    googleCalendarId: 'YOUR_GOOGLE_CALENDAR_ID_HERE',
  },
};

export const instructions = {
  setupImages: `
    1. Place images in public/images/ folder:
       - solar-concentration.jpg (16:9 aspect ratio recommended)
       - heat-transfer.jpg (16:9 aspect ratio recommended)
       - steam-generation.jpg (16:9 aspect ratio recommended)
       - hero-background.jpg (will be displayed at 40% opacity)

    2. Place video in public/videos/ folder:
       - technology-demo.mp4 (16:9 aspect ratio)
  `,
  setupGoogleForm: `
    1. Create a Google Form at https://forms.google.com
    2. Copy the form ID from the URL:
       https://docs.google.com/forms/d/e/{FORM_ID}/viewform
    3. Replace 'YOUR_GOOGLE_FORM_ID_HERE' with your actual form ID in config.ts
  `,
  setupGoogleCalendar: `
    For Google Calendar integration, users can schedule directly via Google Calendar.
    The calendar links are pre-configured to create 15-minute slots.
  `,
};

export const getGoogleFormUrl = (): string => {
  const formId = config.externalLinks.googleFormId;
  if (formId === 'YOUR_GOOGLE_FORM_ID_HERE') {
    return '#';
  }
  return `https://docs.google.com/forms/d/e/${formId}/viewform?usp=sf_link`;
};

export const getGoogleCalendarUrl = (): string => {
  const calendarId = config.externalLinks.googleCalendarId;
  if (calendarId === 'YOUR_GOOGLE_CALENDAR_ID_HERE') {
    return '#';
  }
  return `https://calendar.google.com/calendar/u/0/r/eventedit?calscale=gregorian&hl=en&eventid=${calendarId}`;
};
