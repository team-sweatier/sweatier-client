function Hexagon({ sportType, tier }: { sportType: string; tier: string }) {
  return (
    <div className="flex items-center justify-center">
      <div className="w-20 h-24 bg-neutral-20 hover:bg-neutral-30 text-center flex flex-col items-center justify-between hexagon">
        <span className="text-xs text-neutral-70 mt-10">{tier}</span>
        <span className="text-xs text-neutral-70 font-black mb-4">
          {sportType}
        </span>
      </div>
    </div>
  );
}

export default Hexagon;
