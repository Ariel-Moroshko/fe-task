import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PokemonDetails from "./components/PokemonDetails";
import PokemonList from "./components/PokemonList";
import FavoritesContextProvider from "./contexts/FavoritesContextProvider";
import { Toaster } from "@/components/ui/sonner";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <FavoritesContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route index element={<PokemonList />} />
              <Route path=":name" element={<PokemonDetails />} />
            </Route>
          </Routes>
        </Router>
        <Toaster />
      </FavoritesContextProvider>
    </QueryClientProvider>
  );
}

export default App;
