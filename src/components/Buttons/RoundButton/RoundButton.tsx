interface RoundButtonProps {
  label: string;
  onClick?: () => void;
  isSelected?: boolean;
  className?: string;
}

function RoundButton({
  label,
  onClick,
  className,
  isSelected = false,
  ...props
}: RoundButtonProps) {
  const buttonClassName = `text-xs px-4 py-2.5 rounded-full ${
    isSelected
      ? "text-white bg-primary-100 drop-shadow-[0px_0px_2px_#0f8cff] border-[0.0px] font-bold"
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

export default RoundButton;
