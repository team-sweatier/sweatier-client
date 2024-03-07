interface ButtonProps {
  label: string;
}

function Button({ label }: ButtonProps) {
  return (
    <button className="text-xs text-natural-50 px-4 py-2 rounded-3xl border-[1px] border-natural-60">
      {label}
    </button>
  );
}

export default Button;
