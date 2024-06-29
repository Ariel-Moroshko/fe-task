export async function getFavorites() {
  return new Promise((resolve) => {
    const favorites = localStorage.getItem("favorites");
    setTimeout(() => {
      resolve(JSON.parse(favorites) || []);
    }, 500);
  });
}

export async function addFavorite(pokemon) {
  // Add the pokemon to the favorites list
  return new Promise((resolve) => {
    setTimeout(async () => {
      if (Math.random() < 0.4) {
        const favorites = await getFavorites();
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

export async function isFavorite(pokemonName) {
  // Check if the pokemon is in the favorites list
  const favorites = await getFavorites();
  return favorites.some((pokemon) => pokemon.name === pokemonName);
}

export async function removeFavorite(pokemonName) {
  const favorites = await getFavorites();
  const updatedFavorites = favorites.filter(
    (pokemon) => pokemon.name !== pokemonName,
  );
  localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
}
