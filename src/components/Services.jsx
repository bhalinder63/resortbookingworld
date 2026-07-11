import { services } from '../data.js';
import Kicker from './Kicker.jsx';
import Reveal from './Reveal.jsx';
import { RouteIcon, HotelIcon, HeartIcon, FamilyIcon, PlaneIcon, HeadsetIcon } from './icons.jsx';

const serviceIcons = {
  route: RouteIcon,
  hotel: HotelIcon,
  heart: HeartIcon,
  family: FamilyIcon,
  plane: PlaneIcon,
  headset: HeadsetIcon,
};

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-page px-6 py-[90px]">
      <Reveal className="mx-auto mb-14 max-w-[640px] text-center">
        <Kicker>What We Offer</Kicker>
        <h2 className="font-display mb-[14px] text-[clamp(28px,4vw,40px)] font-bold text-navy">
          A Full-Service Travel Planning Desk
        </h2>
        <p className="text-base leading-[1.6] text-[#4a5a72]">
          We don&apos;t own resorts — we design your itinerary and book it into the best 4★ &amp; 5★
          hotels for you.
        </p>
      </Reveal>

      <div className="mx-auto grid max-w-page grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-7">
        {services.map((s, i) => {
          const Icon = serviceIcons[s.icon];
          return (
            <Reveal key={s.title} delay={i * 60}>
              <div className="h-full rounded-[20px] border border-sand bg-white p-8 px-[26px] shadow-[0_6px_24px_rgba(2,62,138,0.08)] transition duration-300 motion-safe:hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(2,62,138,0.16)]">
                <div className="mb-[18px] flex h-[52px] w-[52px] items-center justify-center rounded-full bg-gradient-to-br from-ocean to-navy text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display mb-2.5 text-[19px] font-bold text-navy">{s.title}</h3>
                <p className="text-[14.5px] leading-[1.65] text-[#5a6b80]">{s.desc}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
