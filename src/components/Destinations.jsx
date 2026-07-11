import { destinations } from '../data.js';
import Kicker from './Kicker.jsx';
import Reveal from './Reveal.jsx';

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
            <div className="h-full overflow-hidden rounded-2xl bg-white shadow-[0_6px_20px_rgba(2,62,138,0.08)] transition duration-300 motion-safe:hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(2,62,138,0.16)]">
              <img
                src={d.img}
                alt={d.imgLabel}
                loading="lazy"
                className="block h-[200px] w-full object-cover"
              />
              <div className="px-5 pt-[18px] pb-[22px]">
                <h3 className="font-display mb-1.5 text-[19px] font-bold text-navy">{d.name}</h3>
                <p className="text-[13.5px] text-[#5a6b80]">{d.tag}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
