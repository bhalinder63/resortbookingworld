import { CONTACT } from '../data.js';
import { PhoneIcon, ChatIcon } from './icons.jsx';

export default function MobileBar() {
  return (
    <div className="fixed right-0 bottom-0 left-0 z-55 hidden justify-between gap-2 border-t border-sand bg-white px-3.5 py-2 shadow-[0_-6px_20px_rgba(2,62,138,0.12)] max-[640px]:flex">
      <a
        href={CONTACT.phoneHref}
        className="flex min-h-11 flex-1 items-center justify-center gap-1.5 rounded-[10px] text-[12.5px] font-semibold text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean/40"
      >
        <PhoneIcon className="h-4 w-4" />
        Call
      </a>
      <a
        href={CONTACT.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="flex min-h-11 flex-1 items-center justify-center gap-1.5 rounded-[10px] text-[12.5px] font-semibold text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean/40"
      >
        <ChatIcon className="h-4 w-4" />
        WhatsApp
      </a>
      <a
        href="#contact"
        className="flex min-h-11 flex-1 items-center justify-center rounded-[10px] bg-gradient-to-r from-sunset to-gold text-[12.5px] font-bold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy"
      >
        Get Quote
      </a>
    </div>
  );
}
