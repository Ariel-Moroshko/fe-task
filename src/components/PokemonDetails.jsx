import { Link, useLocation, useParams } from "react-router-dom";
import usePokemon from "../hooks/usePokemon";
import CatchButton from "./CatchButton";
import useFavoritesContext from "@/hooks/useFavoritesContext";
import { ArrowLeft, CircleCheck } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { isFavorite } from "@/services/favorites.service";
import cardBackground from "../assets/card_background.svg";

function PokemonDetails() {
  const { favorites } = useFavoritesContext();
  const { name: pokemonName } = useParams();
  const { state } = useLocation();
  const pokemon = usePokemon(pokemonName);
  const previousPageVisited = state?.page ?? 1;

  if (pokemon.isPending) {
    return <div className="flex flex-1 justify-center p-4">loading...</div>;
  }
  const { id, name, sprites, types, weight, height, abilities } = pokemon.data;
  const isCaught = isFavorite(name);
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
        <div className="relative p-2">
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-slate-200 to-slate-800 opacity-30"></div>
          {sprites[0] ? (
            <img src={sprites[0]} className="relative h-[96px] w-[96px]" />
          ) : (
            <div className="h-[96px] w-[96px]"></div>
          )}
        </div>
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
        {!isCaught && <CatchButton pokemon={pokemon.data} />}
      </div>
    </div>
  );
}

export default PokemonDetails;
