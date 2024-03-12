import { ComponentProps } from "react";

interface ButtonToHistoryProps extends ComponentProps<"button"> {
  label: string;
}

function ButtonToHistory({ label, ...props }: ButtonToHistoryProps) {
  return (
    <button
      {...props}
      className="rounded-lg border border-neutral-50 w-1/2 h-12 font-bold hover:text-primary-100 hover:border-primary-100"
    >
      {label}
    </button>
  );
}

export default ButtonToHistory;
