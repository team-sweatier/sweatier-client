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
        <label
          htmlFor={htmlFor}
          className="text-neutral-70 font-bold absolute top-0 left-[26px] overflow-hidden bg-white z-5 px-1 text-[14px]"
        >
          {label}
        </label>
        <input
          ref={ref}
          className={`h-12 border text-neutral-50 border-neutral-30 rounded-lg placeholder:text-neutral-50 placeholder-pretendard text-[14px] pl-[30px] mt-2 outline-none transition-all duration-500 ease-in-out ${
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

SignUpInput.displayName = "SignUpInput";

export default SignUpInput;
