import {
  getPokemonDetailsByURL,
  getPokemons,
} from "@/services/pokemon.service";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

export function usePrefetchNextPage(page) {
  const queryClient = useQueryClient();

  useEffect(() => {
    const prefetch = async () => {
      const pokemonsList = await queryClient.fetchQuery({
        queryKey: ["list", page],
        queryFn: () => getPokemons(page),
        staleTime: Infinity,
      });
      pokemonsList.results.map((pokemon) => {
        queryClient.prefetchQuery({
          queryKey: ["pokemon", pokemon.name],
          queryFn: () => getPokemonDetailsByURL(pokemon.url),
          staleTime: Infinity,
        });
      });
    };
    prefetch();
  }, [page, queryClient]);
}
