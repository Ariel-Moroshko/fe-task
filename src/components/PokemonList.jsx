import usePokemonsList from "../hooks/usePokemonsList";
import PokemonCard from "./PokemonCard";
import { Link, useSearchParams } from "react-router-dom";
import SkeletonCard from "./SkeletonCard";
import { usePrefetchNextPage } from "@/hooks/usePrefetchNextPage";
import Pagination from "./Pagination";
import { POKEMONS_PER_PAGE } from "@/services/pokemon.service";

function PokemonList() {
  const [searchParams] = useSearchParams();
  const page = +searchParams.get("page") || 1;
  const { data, isPending } = usePokemonsList(page);
  const pokemonsList = data?.results;
  usePrefetchNextPage(page + 1);

  return (
    <div className="flex-1 flex-col items-center justify-center p-4">
      <div className="flex w-full flex-col items-center gap-6">
        <div className="flex w-full max-w-screen-2xl flex-col items-center justify-between gap-4 px-2 xl:flex-row">
          <div className="flex flex-col gap-4 text-sm md:flex-row md:gap-8">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-emerald-400"></div>
              <div>Pokemon caught</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-blue-400"></div>
              <div>Attempts available</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-slate-700"></div>
              <div>No attempts left</div>
            </div>
          </div>
          <Pagination hasNextPage={!isPending && data.next !== null} />
        </div>

        <div className="grid h-fit w-full max-w-screen-2xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {isPending
            ? Array(POKEMONS_PER_PAGE)
                .fill(undefined)
                .map((_, i) => <SkeletonCard key={i} />)
            : pokemonsList.map(({ name }) => {
                return (
                  <Link key={name} to={name} state={{ page }}>
                    <PokemonCard pokemonName={name} />
                  </Link>
                );
              })}
        </div>
      </div>
    </div>
  );
}

export default PokemonList;
