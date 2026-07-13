import { destinations } from '../data.js';
import Kicker from './Kicker.jsx';
import Reveal from './Reveal.jsx';
import useTilt from '../hooks/useTilt.js';

function DestinationCard({ d }) {
  const tiltRef = useTilt();

  return (
    <a
      ref={tiltRef}
      href="#contact"
      className="group relative block h-[260px] overflow-hidden rounded-2xl shadow-[0_6px_20px_rgba(2,62,138,0.08)] transition-shadow duration-300 hover:shadow-[0_20px_40px_rgba(2,62,138,0.16)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean"
    >
      <img
        src={d.img}
        alt={d.imgLabel}
        loading="lazy"
        className="block h-full w-full object-cover transition duration-500 motion-safe:group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent" />
      {d.popular && (
        <span className="font-accent absolute top-3.5 right-3.5 rounded-full bg-gradient-to-r from-sunset to-gold px-3 py-1 text-[11px] font-bold tracking-wide text-white shadow-sm">
          Popular
        </span>
      )}
      <div className="absolute inset-x-0 bottom-0 px-5 pt-[18px] pb-[20px]">
        <h3 className="font-display mb-1 text-[19px] font-bold text-white">{d.name}</h3>
        <p className="text-[13px] text-white/80">{d.tag}</p>
      </div>
    </a>
  );
}

export default function Destinations() {
  return (
    <section
      id="resorts"
      className="bg-gradient-to-b from-sand/40 to-white px-6 py-[90px]"
    >
      <Reveal className="mx-auto mb-14 max-w-[640px] text-center">
        <Kicker>Popular Destinations</Kicker>
        <h2 className="font-display mb-[14px] text-[clamp(28px,4vw,40px)] font-bold text-navy">
          Where Will You Escape To?
        </h2>
        <p className="text-base leading-[1.6] text-[#4a5a72]">
          Tell us the destination — we&apos;ll handpick the hotel and build the itinerary around it.
        </p>
      </Reveal>

      <div className="mx-auto grid max-w-page grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-[26px]">
        {destinations.map((d, i) => (
          <Reveal key={d.name} delay={(i % 4) * 60}>
            <DestinationCard d={d} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
