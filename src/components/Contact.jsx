import { useState } from 'react';
import { CONTACT, socials } from '../data.js';
import Kicker from './Kicker.jsx';
import { ChatIcon, MapPinIcon, FacebookIcon, InstagramIcon, LinkedInIcon } from './icons.jsx';

const socialIcons = {
  FB: FacebookIcon,
  IG: InstagramIcon,
  LI: LinkedInIcon,
};

const fieldClass =
  'w-full rounded-[10px] border border-sand bg-white px-4 py-[13px] text-sm outline-none transition focus-visible:border-ocean focus-visible:ring-2 focus-visible:ring-ocean/40';
const labelClass = 'text-[13px] font-semibold text-navy';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Resort Enquiry from ${form.name || 'Website Visitor'}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\n${form.message}`
    );
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="mx-auto max-w-page px-6 py-[90px]">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div className="flex flex-col items-start">
          <Kicker>Get In Touch</Kicker>
          <h2 className="font-display mb-[14px] text-[clamp(28px,4vw,40px)] font-bold text-navy">
            Let&apos;s Plan Your Getaway
          </h2>

          <div className="my-2.5 text-[14.5px] text-[#3a4a60]">
            <strong>Company:</strong>&nbsp;Resort Booking World
          </div>
          <div className="my-2.5 text-[14.5px] text-[#3a4a60]">
            <strong>Phone:</strong>&nbsp;
            <a
              href={CONTACT.phoneHref}
              className="rounded text-ocean no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean/40"
            >
              {CONTACT.phone}
            </a>
          </div>
          <div className="my-2.5 text-[14.5px] text-[#3a4a60]">
            <strong>Email:</strong>&nbsp;
            <a
              href={`mailto:${CONTACT.email}`}
              className="rounded text-ocean no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean/40"
            >
              {CONTACT.email}
            </a>
          </div>
          <div className="my-2.5 text-[14.5px] text-[#3a4a60]">
            <strong>Address:</strong>&nbsp;{CONTACT.address}
          </div>

          <a
            href={CONTACT.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="font-accent mt-[18px] inline-flex items-center gap-2 rounded-full bg-[#25D366] px-[26px] py-[13px] text-sm font-bold text-white transition hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
          >
            <ChatIcon className="h-4 w-4" />
            Chat on WhatsApp
          </a>

          <div className="mt-6 flex gap-3">
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
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-sand text-navy transition hover:bg-gold/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean/40"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              );
            })}
          </div>

          <div className="mt-7 w-full">
            <div className="h-56 w-full overflow-hidden rounded-t-2xl border border-b-0 border-sand">
              <iframe
                title="Resort Booking World location — E-5/45, Kalkaji, New Delhi"
                src="https://www.google.com/maps?q=28.5469476,77.2588010&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-b-2xl border border-t-0 border-sand bg-sand/30 py-2.5 text-[13px] font-semibold text-ocean transition hover:bg-sand/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean/40"
            >
              <MapPinIcon className="h-4 w-4" />
              Get Directions to E-5/45, Kalkaji
            </a>
          </div>
        </div>

        <div className="flex">
          <form
            onSubmit={handleSubmit}
            className="flex w-full flex-col gap-3.5 rounded-[20px] border border-sand bg-sand/20 p-8"
          >
            <h3 className="font-display mb-1.5 text-xl font-bold text-navy">Send an Enquiry</h3>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="rbw-name" className={labelClass}>
                Full Name <span className="text-sunset">*</span>
              </label>
              <input
                id="rbw-name"
                type="text"
                name="name"
                placeholder="e.g. Priya Sharma"
                value={form.name}
                onChange={handleChange}
                required
                className={fieldClass}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="rbw-email" className={labelClass}>
                Email Address <span className="text-sunset">*</span>
              </label>
              <input
                id="rbw-email"
                type="email"
                name="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                required
                autoComplete="email"
                className={fieldClass}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="rbw-phone" className={labelClass}>
                Phone Number <span className="text-sunset">*</span>
              </label>
              <input
                id="rbw-phone"
                type="tel"
                name="phone"
                placeholder="+91 98765 43210"
                value={form.phone}
                onChange={handleChange}
                required
                autoComplete="tel"
                className={fieldClass}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="rbw-message" className={labelClass}>
                Trip Details
              </label>
              <textarea
                id="rbw-message"
                name="message"
                placeholder="Tell us your destination, dates, budget and travel style..."
                rows={4}
                value={form.message}
                onChange={handleChange}
                className={`${fieldClass} resize-y`}
              />
            </div>

            <button
              type="submit"
              className="font-accent mt-1 cursor-pointer rounded-[10px] border-none bg-gradient-to-r from-sunset to-gold py-3.5 text-sm font-bold text-white transition hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean focus-visible:ring-offset-2"
            >
              Send Enquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
