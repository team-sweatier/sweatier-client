import RoundButton from "@/components/Buttons/RoundButton";

export enum Gender {
  Male = "male",
  Female = "female",
}

interface GenderButtonProps {
  gender: Gender;
  selectedGender: Gender | "";
  onSelect: (gender: Gender) => void;
}

function GenderButton({ gender, selectedGender, onSelect }: GenderButtonProps) {
  const label = gender === Gender.Male ? "남성" : "여성";

  return (
    <RoundButton
      onClick={() => onSelect(gender)}
      isSelected={gender === selectedGender}
      label={label}
      className="text-neutral-50 px-4 py-2"
    />
  );
}

export default GenderButton;
