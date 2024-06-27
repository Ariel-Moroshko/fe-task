export async function getPokemons(page) {
  // Fetch the list of pokemons from the API
  const POKEMONS_PER_PAGE = 20;
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

function extractDetailsFromPokemonData(data) {
  return {
    id: data.id,
    name: data.name,
    sprites: [data.sprites.back_default, data.sprites.front_default],
    types: data.types.map(({ type }) => type.name),
    weight: data.weight,
    height: data.height,
    abilities: data.abilities.map(({ ability }) => ability.name),
  };
}

export async function getPokemonDetailsByURL(url) {
  // Fetch the pokemon details from according to the url given in the list of pokemons
  // Transform the data to only include to include only the id, name, relevant sprites, types, weight, height, and abilities.
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(
      `Fetching pokemon ${url} failed with status: ${response.status}`,
    );
  }
  const data = await response.json();
  return extractDetailsFromPokemonData(data);
}

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
