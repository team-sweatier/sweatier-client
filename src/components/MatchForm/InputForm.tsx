import { PropsWithChildren } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

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
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type="text"
        aria-label={label}
        placeholder={placeholder}
        className=""
        {...register(`${id}`, { required: `${placeholder}` })}
        {...props}
      />
      {hasError && <p>{errorMessages}</p>}
    </div>
  );
}

export default InputForm;
