interface TierButtonProps {
  label: string;
}

function TierButton({ label }: TierButtonProps) {
  return (
    <div className="flex justify-center items-center text-center relative rounded-full w-full max-w-24 py-[3px] border border-primary-100 text-primary-100 hover:bg-primary-100 hover:text-white transition-colors">
      <span className="text-[10px] font-bold">{label}</span>
    </div>
  );
}

export default TierButton;
