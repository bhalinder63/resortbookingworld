export default function CtaBanner() {
  return (
    <section className="relative flex flex-col items-center gap-[30px] overflow-hidden px-6 py-[100px] text-center">
      <div className="absolute inset-0">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1578439297699-eb414262c2de?q=80&w=1800&auto=format&fit=crop"
          alt="Beachfront villa at golden hour"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-navy/93 to-ocean/80" />

      <div className="relative z-2 flex flex-col items-center gap-[30px]">
        <h2 className="font-display max-w-[640px] text-[clamp(26px,4vw,38px)] font-bold text-white">
          Plan Your Dream Resort Vacation With Us!
        </h2>
        <p className="-mt-4 max-w-[520px] text-[15.5px] text-sand">
          One call, and our travel experts design the itinerary and book your 4★ or 5★ stay.
        </p>
        <a
          href="#contact"
          className="font-accent rounded-full bg-gradient-to-r from-gold to-sunset px-9 py-[17px] text-[15px] font-extrabold text-navy shadow-[0_12px_28px_rgba(244,196,48,0.35)] transition motion-safe:hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
        >
          Book Your Resort Today
        </a>
      </div>
    </section>
  );
}
