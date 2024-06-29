export const POKEMONS_PER_PAGE = 20;

/**
 * Fetches a list of Pokemon from the API based on the specified page number.
 */
export async function getPokemons(page) {
  // Calculate the offset based on the page number and Pokemon per page
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?offset=${(page - 1) * POKEMONS_PER_PAGE}&limit=${POKEMONS_PER_PAGE}`,
  );
  if (!response.ok) {
    throw new Error(
      `Fetching pokemons list failed with status: ${response.status}`,
    );
  }
  return response.json();
}

/**
 * Extracts relevant details from the raw Pokemon data:
 * id, name, relevant sprites, types, weight, height, and abilities.
 */
function extractDetailsFromPokemonData(data) {
  return {
    id: data.id,
    name: data.name,
    sprites: [data.sprites.back_default, data.sprites.front_default].filter(
      (s) => s !== null,
    ),
    types: data.types.map(({ type }) => type.name),
    weight: data.weight,
    height: data.height,
    abilities: data.abilities.map(({ ability }) => ability.name),
  };
}

/**
 * Fetches detailed information about a Pokemon using its URL.
 */
export async function getPokemonDetailsByURL(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(
      `Fetching pokemon ${url} failed with status: ${response.status}`,
    );
  }
  const data = await response.json();
  return extractDetailsFromPokemonData(data);
}

/**
 * Fetches detailed information about a Pokemon using its name.
 */
export async function getPokemonDetailsByName(name) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  if (!response.ok) {
    throw new Error(
      `Fetching pokemon name: ${name} failed with status: ${response.status}`,
    );
  }
  const data = await response.json();
  return extractDetailsFromPokemonData(data);
}
