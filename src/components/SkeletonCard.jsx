import { twMerge } from "tailwind-merge";

function SkeletonCard({ pokemonName }) {
  return (
    <div className="group flex flex-col items-center justify-center gap-6 rounded-xl border-2 border-slate-800 bg-card bg-cover px-2 py-6 transition-all duration-300 ease-in-out hover:border-slate-500">
      <div className="h-4 w-4 animate-pulse rounded-full bg-slate-700"></div>
      <div className="h-32">
        <div className="relative p-2">
          <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-b from-slate-700 to-slate-900"></div>
          <div className="relative h-[96px] w-[96px]"></div>
        </div>
      </div>
      <div className="relative h-16 text-2xl font-bold">
        <span className={twMerge(!pokemonName && "invisible")}>
          {pokemonName ?? "pokemon"}
        </span>
        {!pokemonName && (
          <div className="absolute left-1/2 top-0 h-full w-full -translate-x-1/2 animate-pulse rounded-md bg-slate-800"></div>
        )}
      </div>
      <div className="relative font-bold text-slate-500">
        <span className="invisible">1</span>
        <div className="absolute left-1/2 top-0 h-full w-6 -translate-x-1/2 animate-pulse rounded-md bg-slate-800"></div>
      </div>
    </div>
  );
}

export default SkeletonCard;
