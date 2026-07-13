import { useEffect, useRef, useState } from 'react';
import { CONTACT, heroSlides } from '../data.js';
import { PhoneIcon } from './icons.jsx';
import { gsap, prefersReducedMotion } from '../lib/gsap.js';

const SLIDE_INTERVAL = 5000;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const contentRef = useRef(null);
  const slideRefs = useRef([]);

  useEffect(() => {
    if (paused) return undefined;
    if (prefersReducedMotion()) return undefined;

    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % heroSlides.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, [paused]);

  useEffect(() => {
    const items = contentRef.current?.querySelectorAll('[data-hero-item]');
    if (!items?.length) return undefined;

    if (prefersReducedMotion()) {
      gsap.set(items, { opacity: 1, y: 0 });
      return undefined;
    }

    gsap.set(items, { opacity: 0, y: 24 });
    const tween = gsap.to(items, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out',
      stagger: 0.12,
      delay: 0.1,
    });
    return () => tween.kill();
  }, []);

  useEffect(() => {
    if (prefersReducedMotion()) return undefined;
    const img = slideRefs.current[index];
    if (!img) return undefined;

    const tween = gsap.fromTo(
      img,
      { scale: 1 },
      { scale: 1.08, duration: SLIDE_INTERVAL / 1000 + 1, ease: 'none' }
    );
    return () => {
      tween.kill();
      gsap.set(img, { scale: 1 });
    };
  }, [index]);

  return (
    <section
      id="home"
      className="relative flex min-h-[380px] flex-1 items-center overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="absolute inset-0">
        {heroSlides.map((slide, i) => (
          <img
            key={slide.img}
            ref={(el) => {
              slideRefs.current[i] = el;
            }}
            src={slide.img}
            alt={slide.alt}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
              i === index ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-navy/55 via-navy/35 to-navy/85" />

      <div
        ref={contentRef}
        className="relative z-2 mx-auto flex max-w-[760px] flex-col items-center px-6 pt-24 pb-10 text-center sm:pt-28 sm:pb-14"
      >
        <div
          data-hero-item
          className="font-accent mb-[18px] text-[13px] font-bold tracking-[0.12em] text-gold uppercase"
        >
          Let us Unlock Your Resort Experience.
        </div>
        <h1
          data-hero-item
          className="font-display mb-[18px] text-[clamp(34px,6vw,64px)] leading-[1.1] font-extrabold text-white"
        >
          Your Gateway to Extraordinary Journeys
        </h1>
        <p data-hero-item className="mb-[14px] text-[clamp(17px,2.4vw,22px)] font-medium text-sand">
          Your Dream Resort Is Just One Enquiry Away.
        </p>
        <p data-hero-item className="mb-9 max-w-[580px] text-base leading-[1.7] text-white/85">
          We&apos;re not a hotel — we&apos;re your personal travel planning team. We handpick
          4★ &amp; 5★ hotels worldwide and design your complete itinerary, end to end.
        </p>
        <div data-hero-item className="mb-[26px] flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            className="font-accent inline-block rounded-full bg-gradient-to-r from-sunset to-gold px-8 py-4 text-sm font-bold tracking-wide text-white shadow-[0_12px_28px_rgba(255,140,66,0.4)] transition motion-safe:hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
          >
            Get a Free Itinerary
          </a>
          <a
            href="#resorts"
            className="font-accent inline-block rounded-full border border-white/50 bg-white/14 px-8 py-4 text-sm font-bold tracking-wide text-white backdrop-blur-md transition hover:bg-white/22 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
          >
            View Destinations
          </a>
        </div>
        <a
          data-hero-item
          href={CONTACT.phoneHref}
          className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/12 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
        >
          <PhoneIcon className="h-4 w-4" />
          {CONTACT.phone}
        </a>
      </div>

      <div className="absolute bottom-6 left-1/2 z-2 flex -translate-x-1/2 gap-2">
        {heroSlides.map((slide, i) => (
          <button
            key={slide.img}
            type="button"
            aria-label={`Show slide ${i + 1} of ${heroSlides.length}`}
            aria-current={i === index}
            onClick={() => setIndex(i)}
            className={`h-2 cursor-pointer rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
              i === index ? 'w-6 bg-white' : 'w-2 bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
