import { CONTACT, navItems, socials } from '../data.js';
import {
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
} from './icons.jsx';

const socialIcons = {
  FB: FacebookIcon,
  IG: InstagramIcon,
  LI: LinkedInIcon,
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-navy to-[#012a5e] px-6 pt-16 pb-[110px] text-white">
      <div className="mx-auto grid max-w-page grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <div className="font-display mb-3 text-xl font-bold">Resort Booking World</div>
          <p className="mb-5 text-[13.5px] leading-relaxed text-white/70">
            Your personal travel planning team — handpicked 4★ &amp; 5★ hotels and complete
            itineraries, designed end to end.
          </p>
          <div className="flex gap-3">
            {socials.map((soc) => {
              const Icon = socialIcons[soc.key];
              if (!Icon) return null;
              return (
                <a
                  key={soc.key}
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={soc.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                >
                  <Icon className="h-[17px] w-[17px]" />
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <div className="font-accent mb-4 text-[13px] font-bold tracking-[0.1em] text-gold uppercase">
            Quick Links
          </div>
          <ul className="flex flex-col gap-2.5 p-0 text-[13.5px]">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="rounded text-white/75 no-underline transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="font-accent mb-4 text-[13px] font-bold tracking-[0.1em] text-gold uppercase">
            Our Services
          </div>
          <ul className="flex flex-col gap-2.5 p-0 text-[13.5px]">
            <li>
              <a href="#services" className="rounded text-white/75 no-underline transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">
                Bespoke Itineraries
              </a>
            </li>
            <li>
              <a href="#services" className="rounded text-white/75 no-underline transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">
                4★ &amp; 5★ Hotel Booking
              </a>
            </li>
            <li>
              <a href="#packages" className="rounded text-white/75 no-underline transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">
                Honeymoon Packages
              </a>
            </li>
            <li>
              <a href="#packages" className="rounded text-white/75 no-underline transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">
                Family Holidays
              </a>
            </li>
          </ul>
        </div>

        <div>
          <div className="font-accent mb-4 text-[13px] font-bold tracking-[0.1em] text-gold uppercase">
            Contact Us
          </div>
          <ul className="flex flex-col gap-3 p-0 text-[13.5px] text-white/75">
            <li className="flex items-start gap-2.5">
              <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a
                href={CONTACT.phoneHref}
                className="rounded no-underline transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                {CONTACT.phone}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a
                href={`mailto:${CONTACT.email}`}
                className="rounded no-underline transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                {CONTACT.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>{CONTACT.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-page flex-col items-center gap-3 border-t border-white/10 pt-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="text-xs text-white/50">
          © {year} Resort Booking World. All rights reserved.
        </div>
        <div className="text-xs text-white/50">
          Hassle-Free Booking &nbsp;|&nbsp; Trusted Service &nbsp;|&nbsp; Memorable Vacations
        </div>
      </div>
    </footer>
  );
}
