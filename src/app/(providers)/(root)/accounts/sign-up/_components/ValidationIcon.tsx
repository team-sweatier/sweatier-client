import Image from "next/image";

interface ValidationIconProps {
  isValid: boolean;
  focusedInput: string;
  focusedInputName: string;
}

function ValidationIcon(props: ValidationIconProps) {
  const { isValid, focusedInput, focusedInputName } = props;

  return (
    <>
      {focusedInput === focusedInputName && (
        <>
          {isValid ? (
            <Image
              src="/assets/sign-up_page/validation_valid.svg"
              alt="체크표시"
              width={20}
              height={20}
            />
          ) : (
            <Image
              src="/assets/sign-up_page/validation_invalid.svg"
              alt="X표시"
              width={20}
              height={20}
            />
          )}
        </>
      )}
      {focusedInput !== focusedInputName && (
        <>
          {isValid ? (
            <Image
              src="/assets/sign-up_page/validation_valid.svg"
              alt="체크표시"
              width={20}
              height={20}
            />
          ) : (
            <Image
              src="/assets/sign-up_page/validation_default.svg"
              alt="디폴트"
              width={20}
              height={20}
            />
          )}
        </>
      )}
    </>
  );
}

export default ValidationIcon;
