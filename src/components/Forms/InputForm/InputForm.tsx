import { PropsWithChildren } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import FormOuter from "../../FormOuter";
import Label from "../Label";

type InputFormProps = PropsWithChildren<{
  label: string;
  id: string;
  placeholder: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
}>;

function InputForm({
  label,
  id,
  placeholder,
  register,
  errors,
  ...props
}: InputFormProps) {
  const errorMessages = errors[id] ? errors[id]!.message?.toString() : "";
  const hasError = !!(errors && errorMessages);

  return (
    <FormOuter>
      <Label id={id} label={label} />
      <input
        id={id}
        type="text"
        aria-label={label}
        placeholder={placeholder}
        className=" border border-natural-50 text-natural-50 text-sm rounded-lg focus:ring-primary-100 focus:border-primary-100 block w-full dark:bg-natural-50 dark:border-natural-50 dark:placeholder-natural-50 dark:text-white dark:focus:ring-primary-100 dark:focus:border-primary-100 px-5 py-3 font-light"
        {...register(`${id}`, { required: `${placeholder}` })}
        {...props}
      />
      {hasError && <p>{errorMessages}</p>}
    </FormOuter>
  );
}

export default InputForm;
