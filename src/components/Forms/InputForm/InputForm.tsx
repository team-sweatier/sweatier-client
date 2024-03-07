import { PropsWithChildren } from "react";
import { useFormContext } from "react-hook-form";
import postIcon from "../../../../public/assets/postIcon.svg";
import FormOuter from "../FormOuter";
import Label from "../Label";

type InputFormProps = PropsWithChildren<{
  label: string;
  id: string;
  placeholder: string;
}>;

function InputForm({ label, id, placeholder }: InputFormProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const errorMessages = errors[id] ? errors[id]!.message?.toString() : "";
  const hasError = !!(errors && errorMessages);

  return (
    <FormOuter>
      <Label id={id} label={label} iconSrc={postIcon} />
      <input
        id={id}
        type="text"
        aria-label={label}
        placeholder={placeholder}
        className=" border border-natural-50 text-natural-50 text-sm rounded-lg focus:ring-primary-100 focus:border-primary-100 block w-full dark:bg-natural-50 dark:border-natural-50 dark:placeholder-natural-50 dark:text-white dark:focus:ring-primary-100 dark:focus:border-primary-100 px-5 py-3 font-light"
        {...register(`${id}`, { required: `${placeholder}` })}
      />
      {hasError && <p>{errorMessages}</p>}
    </FormOuter>
  );
}

export default InputForm;
