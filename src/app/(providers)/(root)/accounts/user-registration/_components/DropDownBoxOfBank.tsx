import { useState } from "react";

interface DropDownBoxProps {
  options: string[];
  onSelect: (bankName: string) => void;
}

function DropDownBoxOfBank({ options, onSelect }: DropDownBoxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("은행선택");

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (value: string) => {
    onSelect(value);
    setSelectedValue(value);
    setIsOpen(false);
  };

  return (
    <div className="w-2/5">
      <div className="relative">
        <button
          type="button"
          className={`w-full text-left bg-white focus:border-primary-80 outline-none border-2 px-5 py-2 block appearance-none border-natural-30 leading-tight focus:outline-none focus:shadow-outline rounded-full text-natural-50 ${
            selectedValue === "은행선택" ? `text-neutral-50` : `text-neutral-70`
          }`}
          onClick={toggleDropdown}
        >
          {selectedValue}
          <span className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
            <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414 6.707 12.707a1 1 0 11-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              )}
            </svg>
          </span>
        </button>
        {isOpen && (
          <ul className="absolute bg-white w-full border border-gray-300 rounded-md mt-1 max-h-60 overflow-auto text-natural-50 scrollbar-hide">
            {options.map((option, index) => (
              <li
                key={index}
                className="px-5 py-2 hover:bg-gray-100 cursor-pointer text-neutral-70"
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default DropDownBoxOfBank;
