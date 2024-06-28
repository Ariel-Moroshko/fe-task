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
    console.log(result);
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
        className={twMerge(
          `animate-shimmer inline-flex h-12 min-w-44 items-center justify-center gap-3 rounded-md border border-violet-600 bg-[linear-gradient(110deg,#000103,45%,#1f2b3d,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-1 focus:ring-slate-400 focus:ring-offset-1 focus:ring-offset-slate-300`,
        )}
        disabled={isPending}
      >
        <LoaderCircle
          className={`animate-spin ${!isPending ? "hidden" : ""}`}
        />
        <div>{isPending ? "Catching..." : "Catch"}</div>
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
