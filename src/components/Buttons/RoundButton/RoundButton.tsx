import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

interface RoundButtonProps {
  label: string;
  onClick?: () => void;
  isSelected?: boolean;
  className?: string;
  isLink?: boolean;
  href?: Url;
}

function RoundButton({
  label,
  onClick,
  className,
  isSelected = false,
  isLink = false,
  href,
  ...props
}: RoundButtonProps) {
  const buttonClassName = `rounded-button ${isSelected ? "selected" : ""} ${
    className || ""
  }`;

  if (isLink && href) {
    return (
      <Link className={buttonClassName} href={href} {...props}>
        {label}
      </Link>
    );
  }

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
