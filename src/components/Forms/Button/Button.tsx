interface ButtonProps {
  label: string;
  onClick?: () => void;
  isSelected?: boolean;
  className?: string;
}

function Button({
  label,
  onClick,
  className,
  isSelected = false,
  ...props
}: ButtonProps) {
  const buttonClassName = `text-xs px-4 py-2.5 rounded-3xl ${
    isSelected
      ? "text-white bg-primary-100 border-[#E6E6E6] drop-shadow-[0px_0px_2px_#0f8cff] border-[0.7px] font-bold"
      : "text-natural-50 border-natural-60/90 border-[1px]"
  } ${className || ""}`;

  return (
    <button
      type="button"
      className={buttonClassName}
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  );
}

export default Button;
