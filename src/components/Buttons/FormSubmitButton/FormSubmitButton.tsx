import MatchDto from "@/types/MatchDto";
import FormOuter from "../../Forms/FormOuter";

interface FormSubmitButtonProps {
  editValues?: MatchDto;
  isValid: boolean;
}

function FormSubmitButton({ editValues, isValid }: FormSubmitButtonProps) {
  return (
    <FormOuter>
      <input
        type="submit"
        value={editValues ? "수정 완료" : "작성 완료"}
        className="text-white bg-primary-100 font-medium rounded-lg text-sm px-5 py-5 text-center disabled:cursor-not-allowed cursor-pointer w-full disabled:bg-gray-300"
        disabled={!isValid}
      />
    </FormOuter>
  );
}

export default FormSubmitButton;
