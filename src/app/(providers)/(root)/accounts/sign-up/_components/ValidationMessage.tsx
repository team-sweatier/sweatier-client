import ValidationIcon from "./ValidationIcon";

interface ValidationMessageProps {
  isValid: boolean;
  focusedInput: string;
  focusedInputName: string;
  message: string;
}

function ValidationMessage(props: ValidationMessageProps) {
  const { isValid, focusedInput, focusedInputName, message } = props;

  return (
    <p
      className={`flex ml-6 text-[11px] text-neutral-50 ${
        isValid ? "text-primary-100" : ""
      } ${!isValid && focusedInput === "email" ? "text-red-500" : ""}`}
    >
      <ValidationIcon
        isValid={isValid}
        focusedInput={focusedInput}
        focusedInputName={focusedInputName}
      />
      <span className="flex items-center">{message}</span>
    </p>
  );
}

export default ValidationMessage;
