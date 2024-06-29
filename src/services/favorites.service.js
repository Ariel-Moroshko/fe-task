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
      if (Math.random() < 0.3) {
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

export async function getCatchAttempts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const json = localStorage.getItem("catchAttempts");
      if (!json) {
        resolve(new Map());
      } else {
        const obj = JSON.parse(json);
        resolve(new Map(Object.entries(obj)));
      }
    }, 500);
  });
}

export async function recordCatchAttempt(pokemon) {
  const catchAttempts = await getCatchAttempts();
  const currentAttempts = catchAttempts.get(pokemon) ?? 0;
  catchAttempts.set(pokemon, currentAttempts + 1);
  const obj = Object.fromEntries(catchAttempts);
  localStorage.setItem("catchAttempts", JSON.stringify(obj));
}

export async function resetCatchAttemptsForPokemon(pokemon) {
  const catchAttempts = await getCatchAttempts();
  catchAttempts.delete(pokemon);
  const obj = Object.fromEntries(catchAttempts);
  localStorage.setItem("catchAttempts", JSON.stringify(obj));
}
