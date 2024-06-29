/**
 * Retrieves the list of favorite Pokemon from local storage.
 */
export async function getFavorites() {
  return new Promise((resolve) => {
    const favorites = localStorage.getItem("favorites");
    setTimeout(() => {
      resolve(JSON.parse(favorites) || []);
    }, 500);
  });
}

/**
 * Attempts to add a Pokemon to favorites with a 40% success rate.
 */
export async function addFavorite(pokemon) {
  return new Promise((resolve) => {
    setTimeout(async () => {
      // 40% chance of successfully catching the Pokemon
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

/**
 * Checks if a Pokemon is in the favorites list.
 */
export async function isFavorite(pokemonName) {
  const favorites = await getFavorites();
  return favorites.some((pokemon) => pokemon.name === pokemonName);
}

/**
 * Removes a Pokemon from the favorites list.
 */
export async function removeFavorite(pokemonName) {
  const favorites = await getFavorites();
  const updatedFavorites = favorites.filter(
    (pokemon) => pokemon.name !== pokemonName,
  );
  localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
}

/**
 * Retrieves the catch attempts for each Pokemon from local storage.
 */
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

/**
 * Records a catch attempt for a specific Pokemon.
 */
export async function recordCatchAttempt(pokemon) {
  const catchAttempts = await getCatchAttempts();
  const currentAttempts = catchAttempts.get(pokemon) ?? 0;
  catchAttempts.set(pokemon, currentAttempts + 1);
  const obj = Object.fromEntries(catchAttempts);
  localStorage.setItem("catchAttempts", JSON.stringify(obj));
}

/**
 * Resets the catch attempts for a specific Pokemon.
 */
export async function resetCatchAttemptsForPokemon(pokemon) {
  const catchAttempts = await getCatchAttempts();
  catchAttempts.delete(pokemon);
  const obj = Object.fromEntries(catchAttempts);
  localStorage.setItem("catchAttempts", JSON.stringify(obj));
}
