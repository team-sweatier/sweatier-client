import { PropsWithChildren } from "react";
import { useFormContext } from "react-hook-form";

type InputProps = PropsWithChildren<{
  label: string;
  id: string;
  placeholder: string;
  minLength?: number;
}>;

function Input({ id, label, placeholder, minLength, ...props }: InputProps) {
  const { register } = useFormContext();
  return (
    <input
      id={id}
      type="text"
      aria-label={label}
      placeholder={placeholder}
      className=" border border-natural-50 placeholder:text-natural-50 text-sm rounded-lg focus:ring-primary-100 focus:border-primary-100 block w-full dark:bg-natural-50 dark:border-natural-50 dark:placeholder-natural-50 dark:text-white dark:focus:ring-primary-100 dark:focus:border-primary-100 px-5 py-3 font-light"
      {...register(`${id}`, { required: true, minLength: minLength })}
      {...props}
    />
  );
}

export default Input;
