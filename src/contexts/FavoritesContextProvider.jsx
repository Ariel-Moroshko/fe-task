import { getFavorites } from "@/services/favorites.service";
import { createContext, useState } from "react";

export const favoritesContext = createContext(null);

function FavoritesContextProvider({ children }) {
  const [favorites, setFavorites] = useState(() => getFavorites());
  return (
    <favoritesContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </favoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
