function PokemonCard({ pokemon }) {
  const { id, name, sprites } = pokemon;
  return (
    <div className="group flex h-56 flex-col items-center justify-center gap-4 rounded-xl border-2 border-slate-700 transition-all duration-300 ease-in-out hover:border-slate-500">
      <div className="relative p-2">
        <div className="absolute inset-0 rounded-full bg-gradient-to-b from-slate-700 to-slate-900"></div>
        <img
          src={sprites[0]}
          className="relative h-[96px] w-[96px] transition-all duration-500 group-hover:scale-125"
        />
      </div>
      <div className="text-2xl font-bold">{name}</div>
      <div className="font-bold text-slate-500">#{id}</div>
    </div>
  );
}

export default PokemonCard;
