import usePokemonsWithDetails from "../hooks/usePokemonsWithDetails";
import PokemonCard from "./PokemonCard";
import { Link, useSearchParams } from "react-router-dom";
import SkeletonCards from "./SkeletonCards";
import { usePrefetchNextPage } from "@/hooks/usePrefetchNextPage";
import Pagination from "./Pagination";

function PokemonList() {
  const [searchParams] = useSearchParams();
  const page = +searchParams.get("page") || 1;
  const { pokemonsList, pokemonsWithDetails } = usePokemonsWithDetails(page);
  const prefetchNextPage = usePrefetchNextPage(page + 1);
  const areAnyPending =
    pokemonsList.isPending ||
    pokemonsWithDetails.some((query) => query.status === "pending");

  return (
    <div className="flex-1 flex-col items-center justify-center p-4">
      <div className="flex flex-col items-center gap-6">
        {/* Implement the PokemonList view. Use the PokemonCard component to show each Pokemon in the list */}
        <Pagination
          hasNextPage={pokemonsList.data && pokemonsList.data.next === null}
        />

        <div className="grid h-fit w-full max-w-screen-2xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {areAnyPending ? (
            <SkeletonCards />
          ) : (
            pokemonsWithDetails?.map(({ data }) => {
              const { id, name, sprites, types, weight, height, abilities } =
                data;
              return (
                <Link key={id} to={name} state={{ page }}>
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
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default PokemonList;
