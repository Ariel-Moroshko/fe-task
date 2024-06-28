import useFavoritesContext from "@/hooks/useFavoritesContext";
import PokemonCard from "./PokemonCard";
import { Link, useParams } from "react-router-dom";
import { FreePokemonDialog } from "./FreePokemonDialog";
import useMobileSheetContext from "@/hooks/useMobileSheetContext";

function FavoritesSideBar() {
  const { favorites } = useFavoritesContext();
  const { setOpen } = useMobileSheetContext();
  const { name: currentChosenPokemon } = useParams();

  return (
    <>
      {/* Add the side bar content. Use the PokemonCard component to show each Pokemon in the favorites list */}
      <h2 className="font-bold">
        {favorites.length > 0 && favorites.length} Caught Pokemons
      </h2>
      <div className="mt-4 flex flex-col gap-4">
        {favorites.length > 0 ? (
          favorites.map((pokemon) => (
            <div key={pokemon.id} className="relative mx-auto">
              <Link to={pokemon.name} onClick={() => setOpen(false)}>
                <PokemonCard pokemon={pokemon} variant="small" />
              </Link>
              <FreePokemonDialog pokemonName={pokemon.name} />
            </div>
          ))
        ) : (
          <div className="px-4 text-center text-base text-slate-400">
            No Pokemon here. Try catching some!
          </div>
        )}
      </div>
    </>
  );
}

export default FavoritesSideBar;
