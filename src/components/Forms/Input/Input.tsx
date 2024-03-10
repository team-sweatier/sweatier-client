import { forwardRef, PropsWithChildren } from "react";
import { useFormContext } from "react-hook-form";

type InputProps = PropsWithChildren<{
  label: string;
  id: string;
  placeholder: string;
  minLength?: number;
  className?: string;
}>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, placeholder, minLength, className }, ref) => {
    const { register } = useFormContext();

    return (
      <input
        {...register(id, { required: true, minLength: minLength })}
        id={id}
        type="text"
        aria-label={id}
        placeholder={placeholder}
        className={`border border-natural-30 placeholder:text-natural-50 text-sm rounded-lg focus:ring-primary-100 focus:border-primary-100 block w-full dark:bg-natural-50 dark:border-natural-50 dark:placeholder-natural-50 dark:text-white dark:focus:ring-primary-100 dark:focus:border-primary-100 px-5 py-3 font-light ${className}`}
        ref={ref}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
