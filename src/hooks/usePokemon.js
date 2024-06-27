import { useQuery } from "@tanstack/react-query";
import { getPokemonDetailsByName } from "../services/pokemon.service";

function usePokemon(name) {
  return useQuery({
    queryKey: ["pokemon", name],
    queryFn: () => getPokemonDetailsByName(name),
    staleTime: Infinity,
  });
}

export default usePokemon;
