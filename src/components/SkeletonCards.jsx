import { POKEMONS_PER_PAGE } from "@/services/pokemon.service";
import cardBackground from "../assets/card_background.svg";

function SkeletonCards() {
  return (
    <>
      {Array.from({ length: POKEMONS_PER_PAGE }).map((_, i) => (
        <div
          key={i}
          style={{ "--card-bg-image-url": `url(${cardBackground})` }}
          className="group flex flex-col items-center justify-center gap-6 rounded-xl border-2 border-slate-800 bg-[image:var(--card-bg-image-url)] bg-cover px-2 py-6 transition-all duration-300 ease-in-out hover:border-slate-500"
        >
          <div className="h-32">
            <div className="relative p-2">
              <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-b from-slate-700 to-slate-900"></div>
              <div className="relative h-[96px] w-[96px]"></div>
            </div>
          </div>
          <div className="relative h-16 text-2xl font-bold">
            <span className="invisible">pokemon</span>
            <div className="absolute left-1/2 top-0 h-full w-full -translate-x-1/2 animate-pulse rounded-md bg-slate-800"></div>
          </div>
          <div className="relative font-bold text-slate-500">
            <span className="invisible">1</span>
            <div className="absolute left-1/2 top-0 h-full w-6 -translate-x-1/2 animate-pulse rounded-md bg-slate-800"></div>
          </div>
        </div>
      ))}
    </>
  );
}

export default SkeletonCards;