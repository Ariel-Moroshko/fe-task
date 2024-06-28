import useFavoritesContext from "@/hooks/useFavoritesContext";
import { addFavorite } from "@/services/favorites.service";
import { LoaderCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { twMerge } from "tailwind-merge";

function CatchButton({ pokemon }) {
  const { favorites, setFavorites } = useFavoritesContext();
  const [isPending, setIsPending] = useState(false);

  const handleCatchClick = async () => {
    setIsPending(true);
    const result = await addFavorite(pokemon);
    if (result) {
      setFavorites([...favorites, pokemon]);
    } else {
      toast(getRandomUnsuccessfulCatchMessage(), {
        cancel: {
          label: "Close",
        },
        style: {
          background: "#0f172a",
        },
        classNames: {
          toast: "bg-blue-400",
          title: "text-slate-100",
          cancelButton: "group-[.toast]:bg-slate-950",
        },
      });
    }
    setIsPending(false);
  };

  return (
    <div className="group relative mt-8">
      <button
        onClick={() => handleCatchClick()}
        disabled={isPending}
        className={twMerge(
          "group/catch relative inline-flex items-center justify-center overflow-hidden rounded-md p-0.5 font-bold",
          isPending && "opacity-40",
        )}
      >
        <span className="absolute h-full w-full bg-gradient-to-br from-[#eacd57] via-[#ff1c1c] to-[#f50bca] transition-all duration-500 ease-out group-hover/catch:opacity-100"></span>
        <span className="relative inline-flex h-12 min-w-44 items-center justify-center gap-3 rounded-md bg-slate-900 transition-all duration-300 hover:bg-slate-950">
          <LoaderCircle
            className={`animate-spin ${!isPending ? "hidden" : ""}`}
          />
          <span className="">{isPending ? "Catching..." : "Catch"}</span>
        </span>
      </button>
    </div>
  );
}

const unsuccessfulCatchMessages = [
  "Oh no! The Pokemon slipped away!",
  "Better luck next time, Trainer!",
  "Oops! The Pokemon dodged your Poke Ball!",
  "Close, but no catch this time!",
  "The Pokemon ran away! Try again!",
  "Almost had it! Keep trying!",
  "The Pokemon escaped! Don't give up!",
  "Not this time! The Pokemon got away!",
  "The Pokemon evaded capture! Try again!",
  "So close! The Pokemon escaped your grasp!",
];

function getRandomUnsuccessfulCatchMessage() {
  const randomIndex = Math.floor(
    Math.random() * unsuccessfulCatchMessages.length,
  );
  return unsuccessfulCatchMessages[randomIndex];
}

export default CatchButton;
