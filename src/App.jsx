import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PokemonDetails from "./components/PokemonDetails";
import PokemonList from "./components/PokemonList";
import { Toaster } from "@/components/ui/sonner";
import ContextProviders from "./contexts/ContextProviders";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ContextProviders>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route index element={<PokemonList />} />
              <Route path=":name" element={<PokemonDetails />} />
            </Route>
          </Routes>
        </Router>
        <Toaster />
      </ContextProviders>
    </QueryClientProvider>
  );
}

export default App;
