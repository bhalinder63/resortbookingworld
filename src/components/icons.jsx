const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  viewBox: '0 0 24 24',
};

export function PhoneIcon({ className }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M13.65 3.5a1.5 1.5 0 0 1 1.6-.4c1.28.44 2.44 1.13 3.42 2.03.24.22.36.53.34.85l-.28 3.62a1.5 1.5 0 0 1-.98 1.3l-1.72.63a12.7 12.7 0 0 0 5.44 5.44l.63-1.72a1.5 1.5 0 0 1 1.3-.98l3.62-.28c.32-.02.63.1.85.34.9.98 1.6 2.14 2.03 3.42.16.5.02 1.06-.4 1.4-1.4 1.16-3.14 1.85-5 1.85C13.4 21 3 10.6 3 5.5c0-1.86.69-3.6 1.85-5 .34-.42.9-.56 1.4-.4Z" />
    </svg>
  );
}

export function ChatIcon({ className }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.5 8.5 0 1 1 16.1-3.8Z" />
    </svg>
  );
}

export function WhatsAppIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm5.84 14.03c-.24.68-1.4 1.32-1.93 1.4-.5.08-1.13.11-1.82-.11-.42-.13-.96-.31-1.65-.6-2.91-1.26-4.8-4.19-4.94-4.38-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.02-2.41.27-.29.58-.36.78-.36h.56c.18 0 .42-.07.65.5.24.58.81 2 .88 2.14.07.14.12.31.02.5-.1.19-.15.31-.29.48-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.29.75 1.24 1.62 2.01 1.12.99 2.06 1.3 2.35 1.45.29.15.46.13.63-.08.17-.21.72-.84.91-1.13.19-.29.38-.24.64-.14.26.1 1.66.78 1.94.93.28.14.47.21.53.33.07.13.07.75-.17 1.43Z" />
    </svg>
  );
}

export function CheckIcon({ className }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function MapPinIcon({ className }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function MailIcon({ className }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
      <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
    </svg>
  );
}

export function FacebookIcon({ className }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M14 9h3V6h-3c-1.66 0-3 1.34-3 3v2H8v3h3v6h3v-6h3l1-3h-4v-2c0-.55.45-1 1-1Z" />
    </svg>
  );
}

export function InstagramIcon({ className }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function TwitterIcon({ className }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M4 4l16 16M20 4 4 20" />
    </svg>
  );
}

export function YoutubeIcon({ className }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <rect x="2.5" y="6" width="19" height="12" rx="3" />
      <path d="M10.5 9.5v5l4.5-2.5-4.5-2.5Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LinkedInIcon({ className }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M7.5 10.5v6M7.5 7.5v.01" />
      <path d="M11.5 16.5v-3.5a2 2 0 0 1 4 0v3.5M11.5 13v3.5" />
    </svg>
  );
}

export function RouteIcon({ className }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <circle cx="6" cy="19" r="2.5" />
      <circle cx="18" cy="5" r="2.5" />
      <path d="M8.2 17.8 15.8 6.2M6 16.5V13a4 4 0 0 1 4-4h1" strokeDasharray="1 3.2" />
    </svg>
  );
}

export function HotelIcon({ className }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M4 21V6a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v15" />
      <path d="M14 21v-8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v8" />
      <path d="M2 21h20" />
      <path d="M7.5 8.5h1M7.5 12h1M7.5 15.5h1" />
    </svg>
  );
}

export function HeartIcon({ className }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M12 20.5s-7.5-4.6-10-9.3C.5 8 1.9 4.5 5.3 3.7c2-.5 4 .3 5.2 2 .7 1 .8 1 1 1 .2 0 .3 0 1-1 1.2-1.7 3.2-2.5 5.2-2 3.4.8 4.8 4.3 3.3 7.5-2.5 4.7-10 9.3-10 9.3Z" />
    </svg>
  );
}

export function FamilyIcon({ className }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <circle cx="8" cy="6" r="2.5" />
      <circle cx="17" cy="7.5" r="2" />
      <path d="M3 20v-2a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v2" />
      <path d="M14.5 20v-1.5a3.5 3.5 0 0 1 3-3.46A3 3 0 0 1 21 18v2" />
    </svg>
  );
}

export function PlaneIcon({ className }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.3.5-.1 1.1.4 1.4l5.9 3.3-3 3.3-2.6-.4c-.3 0-.7.1-.9.4l-.3.4c-.4.4-.3 1.1.2 1.4l3.5 2 2 3.5c.3.5 1 .6 1.4.2l.4-.3c.3-.3.4-.6.4-.9l-.4-2.6 3.3-3 3.3 5.9c.3.5.9.7 1.4.4l.5-.3c.4-.2.6-.6.5-1.1Z" />
    </svg>
  );
}

export function HeadsetIcon({ className }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
      <rect x="2.5" y="13" width="4" height="6" rx="1.5" />
      <rect x="17.5" y="13" width="4" height="6" rx="1.5" />
      <path d="M20 19v1a2 2 0 0 1-2 2h-4" />
    </svg>
  );
}
