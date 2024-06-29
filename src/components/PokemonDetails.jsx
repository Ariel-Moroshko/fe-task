import { Link, useLocation, useParams } from "react-router-dom";
import usePokemon from "../hooks/usePokemon";
import CatchButton from "./CatchButton";
import useFavoritesContext from "@/hooks/useFavoritesContext";
import { ArrowLeft, CircleCheck } from "lucide-react";
import { twMerge } from "tailwind-merge";
import cardBackground from "../assets/card_background.svg";
import AnimatedPokemonImage from "./AnimatedPokemonImage";
import useCatchAttemptsContext from "@/hooks/useCatchAttemptsContext";

function PokemonDetails() {
  const { favorites, isFavoritesLoading } = useFavoritesContext();
  const { MAX_CATCH_ATTEMPTS, catchAttempts, isCatchAttemptsLoading } =
    useCatchAttemptsContext();
  const { name: pokemonName } = useParams();
  const { state } = useLocation();
  const pokemon = usePokemon(pokemonName);
  const previousPageVisited = state?.page ?? 1;
  const catchAttemptsLeft =
    MAX_CATCH_ATTEMPTS - (catchAttempts.get(pokemonName) ?? 0);

  if (pokemon.isPending || isFavoritesLoading || isCatchAttemptsLoading) {
    return <div className="flex flex-1 justify-center p-4">loading...</div>;
  }
  const { id, name, sprites, types, weight, height, abilities } = pokemon.data;
  const isCaught = favorites.some((p) => p.name === pokemonName);

  return (
    <div className="flex-1 p-4">
      <div className="flex">
        <Link
          to={`/?page=${previousPageVisited}`}
          className="mx-auto inline-flex items-center gap-2 hover:underline"
        >
          <ArrowLeft size={18} />
          <span>Back to list</span>
        </Link>
      </div>
      <div
        style={{ "--card-bg-image-url": `url(${cardBackground})` }}
        className={twMerge(
          `group relative mx-auto mt-4 flex max-w-xl flex-col items-center justify-center gap-4 rounded-xl border-2 border-slate-800 bg-[image:var(--card-bg-image-url)] bg-cover px-4 py-8`,
          isCaught &&
            "border-emerald-600 shadow-[0_20px_50px_rgba(0,_98,_90,_0.7)]",
        )}
      >
        {isCaught && (
          <>
            <div className="flex items-center justify-center gap-2 px-4 py-2 font-bold text-emerald-500">
              <CircleCheck />
              <div>Caught</div>
            </div>
          </>
        )}
        <div className="font-bold text-slate-500">#{id}</div>
        <AnimatedPokemonImage sprites={sprites} />
        <div className="text-4xl font-bold">{name}</div>
        <div className="flex w-full justify-around">
          <div className="flex flex-col items-center">
            <div className="text-slate-400">Weight</div>
            <div className="font-bold">{weight / 10}kg</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-slate-400">Height</div>
            <div className="font-bold">{height / 10}m</div>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="text-slate-400">Types: </div>
          <div className="flex flex-wrap justify-center gap-2">
            {types.map((type) => (
              <div key={type} className="rounded-full bg-slate-700 px-3">
                {type}
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-2">
          <div className="text-slate-400">Abilities:</div>
          <div className="flex flex-wrap justify-center gap-2">
            {abilities.map((ability) => (
              <div key={ability} className="rounded-full bg-slate-700 px-3">
                {ability}
              </div>
            ))}
          </div>
        </div>
        {!isCaught && (
          <div className="flex flex-col items-center gap-2">
            <CatchButton
              pokemon={pokemon.data}
              isDisabled={catchAttemptsLeft === 0}
            />
            <div
              className={twMerge(
                `text-sm font-bold text-blue-200`,
                catchAttemptsLeft === 0 && "text-slate-500",
              )}
            >
              {catchAttemptsLeft} attempt{catchAttemptsLeft !== 1 && "s"} left
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PokemonDetails;
