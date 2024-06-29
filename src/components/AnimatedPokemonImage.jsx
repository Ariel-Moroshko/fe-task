import { useEffect, useState } from "react";

function AnimatedPokemonImage({ sprites }) {
  const [spriteIndex, setSpriteIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setSpriteIndex((index) => (index + 1) % sprites.length),
      1000,
    );
    return () => {
      clearInterval(intervalId);
    };
  }, [sprites, setSpriteIndex]);

  return (
    <div className="relative p-2">
      <div className="absolute inset-0 rounded-full bg-gradient-to-b from-slate-700 to-slate-900"></div>
      {sprites[0] ? (
        <img
          src={sprites[spriteIndex]}
          className="relative h-[96px] w-[96px]"
        />
      ) : (
        <div className="h-[96px] w-[96px]"></div>
      )}
    </div>
  );
}

export default AnimatedPokemonImage;
