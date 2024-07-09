import useFavoritesContext from "@/hooks/useFavoritesContext";
import PokemonCard from "./PokemonCard";
import { Link, useParams } from "react-router-dom";
import { FreePokemonDialog } from "./FreePokemonDialog";
import useMobileSheetContext from "@/hooks/useMobileSheetContext";
import { useEffect, useState, useTransition } from "react";
import { Input } from "./ui/input";
import AsideTypeSelect from "./AsideTypeSelect";
import { Button } from "./ui/button";
import { twMerge } from "tailwind-merge";

function FavoritesSideBar() {
  const { favorites, isFavoritesLoading } = useFavoritesContext();
  const [searchText, setSearchText] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [filtered, setFiltered] = useState(favorites);
  const [isPending, startTransition] = useTransition();
  const { setOpen } = useMobileSheetContext();
  const { name: currentChosenPokemon } = useParams();

  const isFiltering = searchText || selectedType;

  const handleSearchTextChange = (newText) => {
    setSearchText(newText);
  };

  const handleTypeChange = (newType) => {
    setSelectedType(newType);
  };

  const handleClearFilters = () => {
    setSearchText("");
    setSelectedType("");
  };

  useEffect(() => {
    startTransition(() => {
      setFiltered(
        favorites.filter(
          (pokemon) =>
            pokemon.name.includes(searchText) &&
            (selectedType ? pokemon.types.includes(selectedType) : true),
        ),
      );
    });
  }, [favorites, searchText, selectedType]);

  if (isFavoritesLoading) {
    return <div className="text-base text-slate-400">loading...</div>;
  }

  return (
    <>
      <h2 className="font-bold">
        {favorites.length > 0 && favorites.length} Caught Pokemons
      </h2>
      <div className="flex w-full flex-col items-center justify-center gap-4 rounded-lg border border-slate-800 p-4">
        <Input
          type="email"
          value={searchText}
          onChange={(e) => handleSearchTextChange(e.target.value)}
          placeholder="Search by name"
          className="border-slate-800 bg-slate-800 ring-offset-slate-950 placeholder:text-slate-400 focus-visible:ring-slate-400"
        />
        <AsideTypeSelect
          selectedType={selectedType}
          setSelectedType={handleTypeChange}
        />
        <div className="flex w-full items-center">
          <div
            className={twMerge(
              "flex-1 text-sm font-bold text-blue-200",
              !isFiltering && "invisible",
            )}
          >
            {filtered.length} results found
          </div>
          <Button
            className="min-w-28 border border-slate-800 hover:bg-slate-800 hover:text-slate-50"
            onClick={() => handleClearFilters()}
          >
            Clear filters
          </Button>
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-4">
        {filtered.map((pokemon) => (
          <div
            key={pokemon.id}
            className={twMerge(
              "relative mx-auto",
              pokemon.name === currentChosenPokemon &&
                "rounded-xl outline outline-2 outline-offset-0 outline-blue-300",
            )}
          >
            <Link to={pokemon.name} onClick={() => setOpen(false)}>
              <PokemonCard pokemonName={pokemon.name} variant="small" />
            </Link>
            <FreePokemonDialog pokemonName={pokemon.name} />
          </div>
        ))}
        {!isFiltering && favorites.length === 0 && (
          <div className="px-4 text-center text-base text-slate-400">
            {!searchText &&
              !selectedType &&
              "No Pokemon here. Try catching some!"}
          </div>
        )}
      </div>
    </>
  );
}

export default FavoritesSideBar;
