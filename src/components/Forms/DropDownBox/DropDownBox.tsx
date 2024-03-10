"use client";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";

interface DropDownBoxProps {
  options: string[];
  registerId: string;
}

function DropDownBox({ options, registerId }: DropDownBoxProps) {
  const { setValue, watch, unregister } = useFormContext();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  //* 현재 선택된 값을 실시간으로 watch
  const selectedValue = watch(registerId);

  //* Dropdown 열고 닫기
  const toggleDropdown = () => setIsOpen(!isOpen);

  //* 클릭한 value로 값을 갱신하고 드롭다운 닫기
  const handleOptionClick = (value: string) => {
    setValue(registerId, value, { shouldDirty: true, shouldValidate: true });
    toggleDropdown();
  };

  useEffect(() => {
    return () => unregister(registerId); // 필드가 언마운트될 때 react-hook-form에서 해당 필드를 해제
  }, [unregister, registerId]);

  return (
    <div className="w-24">
      <div className="relative">
        <button
          type="button"
          className="w-full text-left bg-white border-2 px-5 py-2 block appearance-none border-natural-30 leading-tight focus:outline-none focus:shadow-outline rounded-full text-natural-50"
          onClick={toggleDropdown}
        >
          {selectedValue || options[0]}
          <span className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              {!isOpen ? (
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414 6.707 12.707a1 1 0 11-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              )}
            </svg>
          </span>
        </button>
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } absolute bg-white w-full border border-gray-300 rounded-md mt-1 max-h-60 overflow-auto text-natural-50 scrollbar-hide z-10`}
        >
          {options.map((option, index) => (
            <li
              key={index}
              className="px-5 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DropDownBox;
