import { forwardRef, PropsWithChildren } from "react";

type InputProps = PropsWithChildren<{
  label: string;
  id: string;
  placeholder: string;
  minLength?: number;
  className?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>; // 추가
  value?: string; // 추가
}>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, placeholder, minLength, className, onChange, value }, ref) => {
    return (
      <input
        id={id}
        type="text"
        aria-label={id}
        placeholder={placeholder}
        className={`border border-natural-30 placeholder:text-natural-50 text-sm rounded-lg focus:ring-primary-100 focus:border-primary-100 block w-full dark:bg-natural-50 dark:border-natural-50 dark:placeholder-natural-50 dark:text-white dark:focus:ring-primary-100 dark:focus:border-primary-100 px-5 py-3 font-light ${className}`}
        minLength={minLength}
        ref={ref}
        onChange={onChange}
        value={value}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
