import { PropsWithChildren } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

type TextareaFormProps = PropsWithChildren<{
  label: string;
  id: string;
  placeholder: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
}>;

function TextareaForm({
  label,
  id,
  placeholder,
  register,
  errors,
  ...props
}: TextareaFormProps) {
  const errorMessages = errors[id] ? errors[id]!.message?.toString() : "";
  const hasError = !!(errors && errorMessages);

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <textarea
        id={id}
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

export default TextareaForm;
