import { favoritesContext } from "@/contexts/FavoritesContextProvider";
import { useContext } from "react";

function useFavoritesContext() {
  const context = useContext(favoritesContext);
  if (!context) {
    throw new Error(
      "useFavoritesContext must be used within a FavoritesContextProvider",
    );
  }
  return context;
}

export default useFavoritesContext;
