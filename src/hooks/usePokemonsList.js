import { useQuery } from "@tanstack/react-query";
import { getPokemons } from "../services/pokemon.service";

function usePokemonsList(page) {
  const pokemonsList = useQuery({
    queryKey: ["list", page],
    queryFn: () => getPokemons(page),
    staleTime: Infinity,
  });
  return pokemonsList;
}

export default usePokemonsList;
