export function getFavorites() {
  return JSON.parse(localStorage.getItem("favorites")) ?? [];
}

export async function addFavorite(pokemon) {
  // Add the pokemon to the favorites list
  return new Promise((resolve) => {
    setTimeout(() => {
      if (Math.random() < 0.3) {
        const favorites = getFavorites();
        localStorage.setItem(
          "favorites",
          JSON.stringify([...favorites, pokemon]),
        );
        resolve(true);
      } else {
        resolve(false);
      }
    }, 500);
  });
}

export function isFavorite(pokemonName) {
  // Check if the pokemon is in the favorites list
  const favorites = getFavorites();
  return favorites.some((pokemon) => pokemon.name === pokemonName);
}

export function removeFavorite(pokemonName) {
  const favorites = getFavorites();
  const updatedFavorites = favorites.filter(
    (pokemon) => pokemon.name !== pokemonName,
  );
  localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
}
