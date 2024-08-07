import { getCatchAttempts } from "@/services/favorites.service";
import { createContext, useEffect, useState } from "react";

export const catchAttemptsContext = createContext(null);
const MAX_CATCH_ATTEMPTS = 2;

function CatchAttemptsContextProvider({ children }) {
  const [isCatchAttemptsLoading, setIsCatchAttemptsLoading] = useState(true);
  const [catchAttempts, setCatchAttempts] = useState(() => new Map());

  const addCatchAttempt = (pokemonName) => {
    setCatchAttempts((prevAttempts) => {
      const newAttempts = new Map(prevAttempts);
      newAttempts.set(pokemonName, (newAttempts.get(pokemonName) ?? 0) + 1);
      return newAttempts;
    });
  };

  const resetCatchAttempts = (pokemonName) => {
    setCatchAttempts((prevAttempts) => {
      const newAttempts = new Map(prevAttempts);
      newAttempts.delete(pokemonName);
      return newAttempts;
    });
  };

  const getPokemonCatchAttemptsLeft = (pokemonName) => {
    return MAX_CATCH_ATTEMPTS - (catchAttempts.get(pokemonName) ?? 0);
  };

  useEffect(() => {
    const loadCatchAttempts = async () => {
      const catchAttemptsFromLocalStorage = await getCatchAttempts();
      setCatchAttempts(catchAttemptsFromLocalStorage);
      setIsCatchAttemptsLoading(false);
    };
    loadCatchAttempts();
  }, []);

  return (
    <catchAttemptsContext.Provider
      value={{
        addCatchAttempt,
        resetCatchAttempts,
        getPokemonCatchAttemptsLeft,
        isCatchAttemptsLoading,
      }}
    >
      {children}
    </catchAttemptsContext.Provider>
  );
}

export default CatchAttemptsContextProvider;
