import { getFavorites } from "@/services/favorites.service";
import { createContext, useEffect, useState } from "react";

export const favoritesContext = createContext(null);

function FavoritesContextProvider({ children }) {
  const [isFavoritesLoading, setIsFavoritesLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const loadFavorites = async () => {
      const favoritesFromLocalStorage = await getFavorites();
      setFavorites(favoritesFromLocalStorage);
      setIsFavoritesLoading(false);
    };
    loadFavorites();
  }, []);

  return (
    <favoritesContext.Provider
      value={{ favorites, setFavorites, isFavoritesLoading }}
    >
      {children}
    </favoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
