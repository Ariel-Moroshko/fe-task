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
import { LoaderCircle, X } from "lucide-react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export function FreePokemonDialog({ pokemonName }) {
  const [open, setOpen] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const { favorites, setFavorites } = useFavoritesContext();

  const handleFreePokemon = async (e) => {
    e.preventDefault();
    setIsPending(true);
    await removeFavorite(pokemonName);
    const updatedFavorites = favorites.filter(
      (pokemon) => pokemon.name !== pokemonName,
    );
    setFavorites(updatedFavorites);
    setIsPending(false);
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <button className="absolute right-2 top-2 text-red-400 hover:text-red-500">
          <X />
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent className="border-slate-800 bg-slate-900 text-slate-200">
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
            className={twMerge(
              "flex min-w-36 items-center gap-3 border-none bg-slate-800 hover:bg-slate-700 hover:text-slate-300",
              isPending && "opacity-50",
            )}
            onClick={(e) => handleFreePokemon(e)}
            disabled={isPending}
          >
            <LoaderCircle
              size={18}
              className={`animate-spin ${!isPending ? "hidden" : ""}`}
            />
            {!isPending ? "Yes" : "Releasing..."}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
