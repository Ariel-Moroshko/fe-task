import { useState } from "react";
import usePokemonsWithDetails from "../hooks/usePokemonsWithDetails";
import PokemonCard from "./PokemonCard";
import { Link } from "react-router-dom";

function PokemonList() {
  const [page, setPage] = useState(1);
  const list = usePokemonsWithDetails(page);
  const areAnyPending = list.some((query) => query.status === "pending");
  if (areAnyPending) {
    return <div className="flex flex-1 justify-center p-4">loading...</div>;
  }
  return (
    <div className="flex flex-1 justify-center p-4">
      {/* Implement the PokemonList view. Use the PokemonCard component to show each Pokemon in the list */}
      {/* {data.results.map(pokemon => <PokemonCa)} */}
      <div className="grid h-fit w-full max-w-screen-2xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {list?.map(({ data }) => {
          const { id, name, sprites, types, weight, height, abilities } = data;
          return (
            <Link key={id} to={name}>
              <PokemonCard
                pokemon={{
                  id,
                  name,
                  sprites,
                  types,
                  weight,
                  height,
                  abilities,
                }}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default PokemonList;
