import FormOuter from "../../Forms/FormOuter";

interface FormSubmitButtonProps {
  buttonLabel: string;
  isValid: boolean;
  onclick?: () => void;
}

function SubmitButton({
  buttonLabel,
  isValid,
  onclick,
}: FormSubmitButtonProps) {
  return (
    <FormOuter>
      <input
        type="submit"
        value={buttonLabel}
        className="text-white bg-primary-100 font-medium rounded-lg text-sm px-5 py-5 text-center disabled:cursor-not-allowed cursor-pointer w-full disabled:bg-gray-300"
        disabled={!isValid}
        onClick={onclick}
      />
    </FormOuter>
  );
}

export default SubmitButton;
