import { CONTACT } from '../data.js';
import { WhatsAppIcon } from './icons.jsx';

export default function FloatingButton() {
  return (
    <div className="fixed right-6 bottom-7 z-60 hidden h-14 w-14 min-[641px]:block">
      <span className="absolute inset-0 rounded-full bg-[#25D366]/50 motion-safe:animate-ping" />
      <span className="absolute inset-0 rounded-full bg-[#25D366]/30 motion-safe:animate-ping [animation-delay:0.5s]" />
      <a
        href={CONTACT.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp (opens in a new tab)"
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_28px_rgba(37,211,102,0.45)] transition hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
    </div>
  );
}
