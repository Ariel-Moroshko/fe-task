import { twMerge } from "tailwind-merge";

function PokemonCard({ pokemon, variant }) {
  const { id, name, sprites } = pokemon;
  return (
    <div
      className={twMerge(
        `group flex h-56 flex-col items-center justify-center gap-4 rounded-xl border-2 border-slate-700 transition-all duration-300 ease-in-out hover:border-slate-500`,
        variant === "small" && "h-48 w-40",
      )}
    >
      <div className="relative p-2">
        <div className="absolute inset-0 rounded-full bg-gradient-to-b from-slate-700 to-slate-900"></div>
        <img
          src={sprites[0]}
          className={twMerge(
            `relative h-[96px] w-[96px] transition-all duration-500 group-hover:scale-125`,
            variant === "small" && "h-[48px] w-[48px]",
          )}
        />
      </div>
      <div
        className={twMerge(
          `text-2xl font-bold`,
          variant === "small" && "text-lg",
        )}
      >
        {name}
      </div>
      <div className="font-bold text-slate-500">#{id}</div>
    </div>
  );
}

export default PokemonCard;
