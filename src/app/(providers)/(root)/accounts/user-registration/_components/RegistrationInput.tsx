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
      className={`h-12 border border-neutral-50 rounded-xl pl-[26px] mt-4 focus:border-primary-80 outline-none transition-all duration-500 ease-in-out`}
      {...props}
    />
  );
}

export default RegistrationInput;
