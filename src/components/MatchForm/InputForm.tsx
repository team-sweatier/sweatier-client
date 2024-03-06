import { PropsWithChildren } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import FormOuter from "../FormOuter";
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
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        {...register(`${id}`, { required: `${placeholder}` })}
        {...props}
      />
      {hasError && <p>{errorMessages}</p>}
    </FormOuter>
  );
}

export default InputForm;
