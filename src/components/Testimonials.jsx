import { testimonials } from '../data.js';
import Kicker from './Kicker.jsx';
import Reveal from './Reveal.jsx';
import { StarIcon, QuoteIcon } from './icons.jsx';

export default function Testimonials() {
  return (
    <section className="bg-gradient-to-b from-white to-sand/40 px-6 py-[90px]">
      <Reveal className="mx-auto mb-14 max-w-[640px] text-center">
        <Kicker>What Travelers Say</Kicker>
        <h2 className="font-display mb-[14px] text-[clamp(28px,4vw,40px)] font-bold text-navy">
          Trusted By Travelers Like You
        </h2>
        <p className="text-base leading-[1.6] text-[#4a5a72]">
          Real trips, planned end to end by our team.
        </p>
      </Reveal>

      <div className="mx-auto grid max-w-page grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-7">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 80}>
            <div className="flex h-full flex-col rounded-[20px] border border-sand bg-white p-8 shadow-[0_6px_24px_rgba(2,62,138,0.08)] transition duration-300 motion-safe:hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(2,62,138,0.16)]">
              <QuoteIcon className="mb-3 h-7 w-7 text-gold" />
              <p className="mb-5 flex-1 text-[14.5px] leading-[1.7] text-[#3a4a60]">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mb-2 flex gap-0.5 text-gold">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <StarIcon key={idx} className="h-4 w-4" />
                ))}
              </div>
              <div className="font-display text-[15px] font-bold text-navy">{t.name}</div>
              <div className="text-[12.5px] text-[#5a6b80]">{t.trip}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
