export default function Kicker({ children }) {
  return (
    <div className="font-accent mb-3 flex items-center justify-center gap-2 text-[13px] font-bold tracking-[0.14em] text-navy uppercase">
      <span className="h-1.5 w-1.5 rounded-full bg-sunset" aria-hidden="true" />
      {children}
    </div>
  );
}
