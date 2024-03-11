function ButtonToHistory({ label }: { label: string }) {
  return (
    <button className="rounded-lg border border-neutral-50 w-1/2 h-12 font-bold hover:text-primary-100 hover:border-primary-100">
      {label}
    </button>
  );
}

export default ButtonToHistory;
