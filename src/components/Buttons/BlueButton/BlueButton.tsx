import FormOuter from "../../Forms/FormOuter";

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
  className,
  type = "button",
}: BlueButtonProps) {
  return (
    <FormOuter>
      <input
        type={type}
        value={buttonLabel}
        className={`bg-primary-100 text-white font-medium rounded-lg text-sm px-5 text-center disabled:cursor-not-allowed cursor-pointer w-full disabled:bg-natural-20 disabled:text-natural-40 sm:py-3 py-2 ${className}`}
        disabled={!isValid}
        onClick={onClick}
      />
    </FormOuter>
  );
}

export default BlueButton;
