import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useFavoritesContext from "@/hooks/useFavoritesContext";
import { useEffect, useState } from "react";

function AsideTypeSelect({ selectedType, setSelectedType }) {
  const { favorites } = useFavoritesContext();
  const [types, setTypes] = useState([]);

  useEffect(() => {
    const typesSet = new Set();
    favorites.forEach((pokemon) => {
      pokemon.types.forEach((type) => {
        typesSet.add(type);
      });
    });
    const updatedTypes = [...typesSet];
    setTypes(updatedTypes);
    if (!updatedTypes.includes(selectedType)) {
      setSelectedType("");
    }
  }, [favorites, selectedType, setSelectedType]);

  return (
    <Select
      value={selectedType}
      onValueChange={setSelectedType}
      disabled={types.length === 0}
    >
      <SelectTrigger className="border-slate-800 bg-slate-800 ring-offset-slate-800 placeholder:text-slate-400 focus:ring-slate-300">
        <SelectValue placeholder="Select a type" />
      </SelectTrigger>
      <SelectContent className="border-slate-800 bg-slate-800 text-slate-50">
        <SelectGroup>
          {types.map((type) => (
            <SelectItem key={type} value={type}>
              {type}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default AsideTypeSelect;
