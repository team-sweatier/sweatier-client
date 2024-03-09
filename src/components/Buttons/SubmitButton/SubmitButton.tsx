import FormOuter from "../../Forms/FormOuter";

interface SubmitButtonProps {
  buttonLabel: string;
  isValid: boolean;
  onclick?: () => void;
  className?: string;
}

function SubmitButton({
  buttonLabel,
  isValid,
  onclick,
  className,
}: SubmitButtonProps) {
  return (
    <FormOuter>
      <input
        type="submit"
        value={buttonLabel}
        className={`bg-primary-100 text-white font-medium rounded-lg text-sm px-5 py-5 text-center disabled:cursor-not-allowed cursor-pointer w-full disabled:bg-natural-20 disabled:text-natural-40 ${className}`}
        disabled={!isValid}
        onClick={onclick}
      />
    </FormOuter>
  );
}

export default SubmitButton;
