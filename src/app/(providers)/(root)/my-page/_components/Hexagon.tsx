function Hexagon({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-center">
      <div className="w-20 h-24 bg-neutral-20 hover:bg-neutral-30 text-center flex items-end justify-center hexagon">
        <span className="text-xs text-neutral-70 font-black mb-4">{label}</span>
      </div>
    </div>
  );
}

export default Hexagon;
