import { twMerge } from "tailwind-merge";
import cardBackground from "../assets/card_background.svg";
import useFavoritesContext from "@/hooks/useFavoritesContext";
import useCatchAttemptsContext from "@/hooks/useCatchAttemptsContext";

function PokemonCard({ pokemon, variant }) {
  const { favorites, isFavoritesLoading } = useFavoritesContext();
  const { getPokemonCatchAttemptsLeft } = useCatchAttemptsContext();
  const catchAttemptsLeft = getPokemonCatchAttemptsLeft(pokemon.name);

  const { id, name, sprites } = pokemon;
  const isCaught = favorites.some((p) => p.name === pokemon.name);
  return (
    <div
      style={{ "--card-bg-image-url": `url(${cardBackground})` }}
      className={twMerge(
        `group flex flex-col items-center justify-center gap-6 rounded-xl border-2 border-slate-800 bg-[image:var(--card-bg-image-url)] bg-cover px-2 py-6 transition-all duration-300 ease-in-out hover:border-slate-500`,
        variant === "small" && "w-52",
      )}
    >
      {variant !== "small" && (
        <div
          className={twMerge(
            `h-4 w-4 rounded-full bg-slate-700`,
            !isFavoritesLoading && isCaught && "bg-emerald-400",
            !isFavoritesLoading &&
              !isCaught &&
              catchAttemptsLeft > 0 &&
              "bg-blue-400",
          )}
        ></div>
      )}
      <div className={twMerge(`h-32`, variant === "small" && "h-16")}>
        <div className="relative p-2">
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-slate-700 to-slate-900"></div>

          {sprites[0] ? (
            <img
              src={sprites[0]}
              className={twMerge(
                `relative h-[96px] w-[96px] transition-all duration-500 group-hover:scale-125`,
                variant === "small" && "h-[48px] w-[48px]",
              )}
            />
          ) : (
            <div
              className={twMerge(
                `h-[96px] w-[96px]`,
                variant === "small" && "h-[48px] w-[48px]",
              )}
            ></div>
          )}
        </div>
      </div>
      <div
        className={twMerge(
          `h-16 text-center text-2xl font-bold`,
          variant === "small" && "h-12 text-base",
        )}
      >
        {name}
      </div>
      <div
        className={twMerge(
          `font-bold text-slate-500`,
          variant === "small" && "text-base",
        )}
      >
        #{id}
      </div>
    </div>
  );
}

export default PokemonCard;
