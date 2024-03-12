import BlueButton from "@/components/Buttons/BlueButton";
import FormOuter from "@/components/Forms/FormOuter";

function MatchSubmitButton({ isValid }: { isValid: boolean }) {
  return (
    <FormOuter>
      <BlueButton
        buttonLabel="작성 완료"
        isValid={isValid}
        type="submit"
        className="py-10"
      />
    </FormOuter>
  );
}

export default MatchSubmitButton;
