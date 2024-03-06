import { ComponentProps } from "react";

interface SignUpInputProps extends ComponentProps<"input"> {
  htmlFor: string;
  label: string;
  isValid: boolean;
  focusedInput: string;
  focusedInputType: string;
}

function SignUpInput({
  htmlFor,
  label,
  isValid,
  focusedInput,
  focusedInputType,
  ...props
}: SignUpInputProps) {
  return (
    <>
      <label htmlFor={htmlFor} className="text-neutral-70">
        {label}
      </label>
      <input
        className={`h-12 border bg-primary-20 text-neutral-50 rounded-md pl-4 mt-2 outline-none transition-all duration-500 ease-in-out ${
          !isValid && focusedInput === focusedInputType
            ? "input-error"
            : "focus:border-primary-100"
        } `}
        {...props}
      />
    </>
  );
}

export default SignUpInput;
