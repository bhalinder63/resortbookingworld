import { packages } from '../data.js';
import Kicker from './Kicker.jsx';
import Reveal from './Reveal.jsx';
import { CheckIcon } from './icons.jsx';

export default function Packages() {
  return (
    <section id="packages" className="mx-auto max-w-page px-6 py-[90px]">
      <Reveal className="mx-auto mb-14 max-w-[640px] text-center">
        <Kicker>Sample Itineraries</Kicker>
        <h2 className="font-display mb-[14px] text-[clamp(28px,4vw,40px)] font-bold text-navy">
          Itineraries We Can Tailor For You
        </h2>
        <p className="text-base leading-[1.6] text-[#4a5a72]">
          Starting points only — every itinerary, hotel and price is customized to you.
        </p>
      </Reveal>

      <div className="mx-auto grid max-w-page grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-7">
        {packages.map((p, i) => (
          <Reveal key={p.title} delay={i * 80}>
            <div className="flex h-full flex-col overflow-hidden rounded-[18px] border border-sand bg-white shadow-[0_8px_26px_rgba(2,62,138,0.1)] transition duration-300 motion-safe:hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(2,62,138,0.16)]">
              <img
                src={p.img}
                alt={p.imgLabel}
                loading="lazy"
                className="block h-[200px] w-full object-cover"
              />
              <div className="flex flex-1 flex-col px-6 pt-[22px] pb-[26px]">
                <div className="mb-1 flex items-start justify-between gap-2.5">
                  <h3 className="font-display text-lg font-bold text-navy">{p.title}</h3>
                  <div className="font-accent bg-gradient-to-r from-sunset to-gold bg-clip-text text-[17px] font-extrabold whitespace-nowrap text-transparent">
                    {p.price}
                  </div>
                </div>
                <div className="my-2 mb-4 inline-block w-fit rounded-full bg-gradient-to-r from-sand to-gold/20 px-3 py-1 text-[12.5px] font-semibold text-navy">
                  {p.duration}
                </div>
                <ul className="mb-5 flex flex-1 flex-col gap-2 p-0">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-[13.5px] text-[#4a5a72]">
                      <CheckIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-sunset" />
                      {h}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="font-accent rounded-[10px] bg-gradient-to-r from-navy to-ocean px-5 py-[13px] text-center text-[13.5px] font-bold tracking-wide text-white transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean focus-visible:ring-offset-2"
                >
                  Request This Itinerary
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
