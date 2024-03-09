import { ComponentProps, ForwardedRef, forwardRef } from "react";

interface SignUpInputProps extends ComponentProps<"input"> {
  htmlFor: string;
  label: string;
  isValid: boolean;
  focusedInput: string;
  focusedInputType: string;
}

const SignUpInput = forwardRef(
  (
    {
      htmlFor,
      label,
      isValid,
      focusedInput,
      focusedInputType,
      ...props
    }: SignUpInputProps,
    ref: ForwardedRef<HTMLInputElement> | null
  ) => {
    return (
      <>
        <label htmlFor={htmlFor} className="text-neutral-70 font-bold mt-7">
          {label}
        </label>
        <input
          ref={ref}
          className={`h-12 border border-slate-300 rounded-md pl-4 mt-2 outline-none transition-all duration-500 ease-in-out ${
            !isValid && focusedInput === focusedInputType
              ? "input-error"
              : "focus:border-primary-100"
          } `}
          {...props}
        />
      </>
    );
  }
);

export default SignUpInput;
