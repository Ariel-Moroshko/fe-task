import FavoritesSideBar from "./FavoritesSideBar";
import { Outlet } from "react-router-dom";
import pokemonLogo from "../assets/pokemon.png";
import pokeBall from "../assets/poke_ball.svg";

function Home() {
  return (
    <div className="flex min-h-dvh bg-slate-950 text-slate-100">
      <FavoritesSideBar />
      <div className="flex flex-1 flex-col">
        <div className="flex flex-col items-center justify-center bg-slate-950 py-2 text-3xl font-bold">
          <img src={pokemonLogo} alt="pokemon logo" className="" />
          <div className="flex items-center justify-center gap-2">
            <img src={pokeBall} alt="poke ball" className="h-12 w-12" />
            <div>Pokedex</div>
          </div>
        </div>
        <Outlet />
      </div>
      {/* Add the main app content here - side panel, main view (list vs details) and header */}
    </div>
  );
}

export default Home;
