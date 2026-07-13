import { useState } from 'react';
import { navItems, CONTACT } from '../data.js';
import { PhoneIcon } from './icons.jsx';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-gold/25 bg-gradient-to-br from-navy/82 to-ocean/72 backdrop-blur-md">
      <div className="mx-auto flex max-w-page items-center justify-between gap-6 px-6 py-4">
        <a
          href="#home"
          className="font-display rounded text-xl font-bold whitespace-nowrap text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          Resort Booking World
        </a>

        <div className="hidden items-center gap-8 min-[820px]:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="group relative rounded py-1 text-sm font-medium tracking-wide text-white/85 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              {item.label}
              <span className="absolute -bottom-0.5 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-gold transition-all duration-300 ease-out group-hover:w-full group-focus-visible:w-full" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={CONTACT.phoneHref}
            className="font-accent hidden rounded text-[13px] font-bold whitespace-nowrap text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold sm:inline-block"
          >
            {CONTACT.phone}
          </a>
          <a
            href="#contact"
            className="font-accent hidden min-h-11 items-center whitespace-nowrap rounded-full bg-gradient-to-r from-sunset to-gold px-5 text-[13px] font-bold text-white transition hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy min-[820px]:flex"
          >
            Enquire Now
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-11 w-11 cursor-pointer flex-col items-center justify-center gap-[5px] rounded-lg border-none bg-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white min-[820px]:hidden"
          >
            <span className="h-0.5 w-[22px] bg-white" />
            <span className="h-0.5 w-[22px] bg-white" />
            <span className="h-0.5 w-[22px] bg-white" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="flex flex-col bg-navy px-6 pt-3 pb-5 min-[820px]:hidden">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="rounded border-b border-white/10 py-3 text-[15px] font-medium text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              {item.label}
            </a>
          ))}
          <div className="mt-4 flex gap-3">
            <a
              href={CONTACT.phoneHref}
              className="font-accent flex min-h-11 flex-1 items-center justify-center gap-1.5 rounded-full border border-white/25 text-[13px] font-bold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <PhoneIcon className="h-4 w-4" />
              Call
            </a>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="font-accent flex min-h-11 flex-1 items-center justify-center rounded-full bg-gradient-to-r from-sunset to-gold text-[13px] font-bold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Enquire Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
