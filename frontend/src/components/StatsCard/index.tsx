interface StatsCardProps {
  label: string;
  value: string;
}

export function StatsCard({ label, value }: StatsCardProps) {
  return (
    <div className='glass-dark w-1/2 p-6 rounded-2xl flex flex-col items-start gap-2 border border-white/5 hover:border-primary/30 transition-colors group'>
      <h3 className='text-[10px] tracking-[0.2em] text-text-dim uppercase font-bold group-hover:text-primary transition-colors'>
        {label}
      </h3>
      <p className='font-bold text-5xl tracking-tighter text-white'>{value}</p>
    </div>
  );
}