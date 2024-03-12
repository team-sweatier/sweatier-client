import React, { useRef } from "react";

function PhoneNumberInput({
  setPhoneNumber,
}: {
  setPhoneNumber: (phoneNumber: string) => void;
}) {
  const firstInputRef = useRef<HTMLInputElement>(null);
  const secondInputRef = useRef<HTMLInputElement>(null);
  const thirdInputRef = useRef<HTMLInputElement>(null);

  const handleFirstInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length === 3) {
      secondInputRef.current?.focus();
    }
  };

  const handleSecondInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length === 4) {
      thirdInputRef.current?.focus();
    }
  };

  const handleThirdInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length === 4) {
      const phoneNumber =
        firstInputRef.current!.value +
        secondInputRef.current?.value +
        thirdInputRef.current?.value;
      setPhoneNumber(phoneNumber);
    }
  };

  return (
    <div className="flex justify-between items-center">
      <input
        ref={firstInputRef}
        maxLength={3}
        onChange={handleFirstInputChange}
        type="text"
        placeholder="010"
        className="border border-neutral-50 placeholder:text-neutral-50 h-12 rounded-md w-1/4 pl-[26px] focus:border-primary-80 outline-none transition-all duration-500 ease-in-out"
      />
      <span className="text-3xl text-neutral-40 w-1/8text-center">-</span>
      <input
        ref={secondInputRef}
        maxLength={4}
        onChange={handleSecondInputChange}
        type="text"
        placeholder="1234"
        className="border border-neutral-50 placeholder:text-neutral-50 h-12 rounded-md w-1/4 pl-[26px] focus:border-primary-80 outline-none transition-all duration-500 ease-in-out"
      />
      <span className="text-3xl text-neutral-40 w-1/8 text-center">-</span>
      <input
        ref={thirdInputRef}
        maxLength={4}
        onChange={handleThirdInputChange}
        type="text"
        placeholder="5678"
        className="border border-neutral-50 placeholder:text-neutral-50 h-12 rounded-md w-1/4 pl-[26px] focus:border-primary-80 outline-none transition-all duration-500 ease-in-out"
      />
    </div>
  );
}

export default PhoneNumberInput;
