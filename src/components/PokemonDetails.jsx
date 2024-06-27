import { Link, useParams } from "react-router-dom";
import usePokemon from "../hooks/usePokemon";

function PokemonDetails() {
  const { name: pokemonName } = useParams();
  const pokemon = usePokemon(pokemonName);
  if (pokemon.isPending) {
    return <div className="flex flex-1 justify-center p-4">loading...</div>;
  }
  const { name, sprites, types, weight, height, abilities } = pokemon.data;
  return (
    <div className="flex-1 p-4">
      <div className="flex">
        <Link to="/" className="mx-auto hover:underline">
          ⇦ Go back
        </Link>
      </div>
      <div className="mx-auto mt-4 flex max-w-xl flex-col items-center justify-center gap-4 rounded-xl border-2 border-slate-700 py-8">
        <div className="relative p-2">
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-slate-200 to-slate-800 opacity-30"></div>
          <img src={sprites[0]} className="relative h-[96px] w-[96px]" />
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
          <div className="flex justify-center gap-2">
            {types.map((type) => (
              <div key={type} className="rounded-full bg-slate-700 px-3">
                {type}
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-2">
          <div className="text-slate-400">Abilities:</div>
          <div className="flex justify-center gap-2">
            {abilities.map((ability) => (
              <div key={ability} className="rounded-full bg-slate-700 px-3">
                {ability}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonDetails;
