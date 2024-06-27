import { useQueries, useQuery } from "@tanstack/react-query";
import {
  getPokemonDetailsByURL,
  getPokemons,
} from "../services/pokemon.service";

function usePokemonsWithDetails(page) {
  const pokemonsList = useQuery({
    queryKey: ["list", page],
    queryFn: () => getPokemons(page),
    staleTime: Infinity,
  });
  const pokemonsWithDetails = useQueries({
    queries:
      pokemonsList.data?.results.map((pokemon) => ({
        queryKey: ["pokemon", pokemon.name],
        queryFn: () => getPokemonDetailsByURL(pokemon.url),
        staleTime: Infinity,
      })) ?? [],
  });
  return pokemonsWithDetails;
}

export default usePokemonsWithDetails;
