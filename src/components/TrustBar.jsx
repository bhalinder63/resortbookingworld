import { trustStats } from '../data.js';
import { UsersIcon, GlobeIcon, StarIcon, ShieldIcon } from './icons.jsx';

const statIcons = {
  users: UsersIcon,
  globe: GlobeIcon,
  star: StarIcon,
  shield: ShieldIcon,
};

export default function TrustBar() {
  return (
    <div className="motion-safe:animate-fade-up border-b border-sand bg-white px-6 py-5 sm:py-7">
      <div className="mx-auto grid max-w-page grid-cols-2 gap-6 sm:grid-cols-4">
        {trustStats.map((s) => {
          const Icon = statIcons[s.icon];
          return (
            <div key={s.label} className="flex flex-col items-center text-center sm:flex-row sm:justify-center sm:gap-3">
              <div className="mb-2 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy/8 text-navy sm:mb-0">
                <Icon className="h-5 w-5" />
              </div>
              <div className="sm:text-left">
                <div className="font-display text-[clamp(20px,2.6vw,26px)] leading-tight font-extrabold text-navy">
                  {s.value}
                </div>
                <div className="text-[12.5px] font-medium text-[#5a6b80]">{s.label}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
