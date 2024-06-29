import FavoritesSideBar from "./FavoritesSideBar";
import { Link, Outlet } from "react-router-dom";
import pokemonLogo from "../assets/pokemon.png";
import pokeBall from "../assets/poke_ball.svg";
import { MobileSheet } from "./MobileSheet";

function Home() {
  return (
    <div className="flex min-h-dvh bg-slate-950 text-slate-100">
      <MobileSheet />
      <div className="hidden max-h-dvh basis-80 flex-col items-center gap-4 overflow-auto bg-slate-900 px-4 py-4 text-xl md:flex">
        <FavoritesSideBar />
      </div>
      <div className="flex max-h-dvh flex-1 flex-col overflow-auto">
        <div className="flex flex-col items-center justify-center bg-slate-950 py-2 text-3xl font-bold">
          <img
            src={pokemonLogo}
            width={269}
            height={99}
            alt="pokemon logo"
            className=""
          />
          <Link to="/">
            <div className="flex items-center justify-center gap-2">
              <img src={pokeBall} alt="poke ball" className="h-12 w-12" />
              <div>Pokedex</div>
            </div>
          </Link>
        </div>
        <Outlet />
      </div>
      {/* Add the main app content here - side panel, main view (list vs details) and header */}
    </div>
  );
}

export default Home;
