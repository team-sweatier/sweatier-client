import { PropsWithChildren } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

type SelectFormProps = PropsWithChildren<{
  label: string;
  id: string;
  placeholder: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  values: string[];
}>;

function SelectForm({
  label,
  id,
  placeholder,
  register,
  errors,
  values,
}: SelectFormProps) {
  const errorMessages = errors[id] ? errors[id]!.message?.toString() : "";
  const hasError = !!(errors && errorMessages);

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        aria-label={label}
        className=""
        {...register(`${id}`, { required: `${placeholder}` })}
      >
        {values.map((value, i) => (
          <option key={`${value}-${i}`} value={value}>
            {value}
          </option>
        ))}
      </select>
      {hasError && <p>{errorMessages}</p>}
    </div>
  );
}

export default SelectForm;
