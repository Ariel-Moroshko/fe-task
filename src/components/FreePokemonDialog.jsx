import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import useFavoritesContext from "@/hooks/useFavoritesContext";
import { removeFavorite } from "@/services/favorites.service";
import { X } from "lucide-react";

export function FreePokemonDialog({ pokemonName }) {
  const { favorites, setFavorites } = useFavoritesContext();

  const handleFreePokemon = () => {
    removeFavorite(pokemonName);
    const updatedFavorites = favorites.filter(
      (pokemon) => pokemon.name !== pokemonName,
    );
    setFavorites(updatedFavorites);
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button className="absolute right-2 top-2 text-red-400 hover:text-red-500">
          <X />
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent className="border-slate-800 bg-slate-950 text-slate-200">
        <AlertDialogHeader>
          <AlertDialogTitle>Release Pokemon</AlertDialogTitle>
          <AlertDialogDescription className="text-lg text-slate-300">
            Are you sure you want to release{" "}
            <span className="font-bold">{pokemonName}</span>?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="border-none bg-transparent hover:bg-transparent hover:text-slate-300">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            className="border-none bg-slate-800 hover:bg-slate-700 hover:text-slate-300"
            onClick={() => handleFreePokemon()}
          >
            Yes
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
