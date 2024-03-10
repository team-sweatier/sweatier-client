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
  return (
    <button
      type="button"
      className={`px-4 py-2 rounded-3xl text-neutral-50 border border-neutral-40 ${
        selectedGender === gender ? "bg-primary-100 text-white" : ""
      }`}
      onClick={() => onSelect(gender)}
    >
      {gender === Gender.Male ? "남성" : "여성"}
    </button>
  );
}

export default GenderButton;
