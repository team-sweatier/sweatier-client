interface BlueButtonProps {
  buttonLabel: string;
  isValid: boolean;
  onClick?: () => void;
  className?: string;
  type?: string;
}

function BlueButton({
  buttonLabel,
  isValid,
  onClick,
  type = "button",
}: BlueButtonProps) {
  return (
    <div className="grid grid-cols-1 w-full relative">
      <input
        type={type}
        value={buttonLabel}
        className="bg-primary-100 text-white font-medium rounded-lg text-sm sm:px-5 text-center disabled:cursor-not-allowed cursor-pointer w-full disabled:bg-neutral-20 disabled:text-neutral-40 sm:py-3 py-2"
        disabled={!isValid}
        onClick={onClick}
      />
    </div>
  );
}

export default BlueButton;
