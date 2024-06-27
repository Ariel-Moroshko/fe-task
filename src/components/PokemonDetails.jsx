import { useParams } from "react-router-dom";
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
      <div className="mx-auto flex max-w-xl flex-col items-center justify-center gap-4 rounded-xl border-2 border-slate-700 py-8">
        <div className="relative p-2">
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-slate-200 to-slate-800 opacity-30"></div>
          <img src={sprites[0]} className="relative h-[96px] w-[96px]" />
        </div>
        <div className="text-2xl font-bold">{name}</div>
        <div className="flex w-full justify-around">
          <div className="flex flex-col items-center">
            <div>Weight</div>
            <div className="font-bold">{weight / 10}kg</div>
          </div>
          <div className="flex flex-col items-center">
            <div>Height</div>
            <div className="font-bold">{height / 10}m</div>
          </div>
        </div>
        <div className="flex">
          <div>Types: </div>
          <div>
            {types.map((type) => (
              <span key={type}>{type}/</span>
            ))}
          </div>
        </div>
        <div className="flex">
          <div>Abilities:</div>
          <div>
            {abilities.map((ability) => (
              <span key={ability}>{ability}/</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonDetails;
