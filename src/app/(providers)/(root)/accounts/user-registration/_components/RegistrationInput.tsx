import { ComponentProps } from "react";

interface RegistrationInputProps extends ComponentProps<"input"> {
  value: string;
  setValue: (value: string) => void;
}

function RegistrationInput({
  value,
  setValue,
  ...props
}: RegistrationInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <input
      onChange={handleChange}
      value={value}
      className={`h-12 border border-slate-300 rounded-md pl-4 mt-2 focus:border-primary-80 outline-none transition-all duration-500 ease-in-out`}
      {...props}
    />
  );
}

export default RegistrationInput;
