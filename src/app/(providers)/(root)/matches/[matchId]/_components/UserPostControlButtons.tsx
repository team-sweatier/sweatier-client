function UserPostControlButtons() {
  const controlButtons = [{ label: "수정" }, { label: "삭제" }];

  return (
    <div className="flex items-center mb-5 justify-end gap-x-2 w-full">
      {controlButtons.map((button, i) => (
        <button
          key={`${button.label}-${i}`}
          type="button"
          className="text-neutral-70 font-medium rounded-full text-sm px-2 text-center cursor-pointer w-full border-2 border-natural-60  py-2 max-w-16 hover:bg-primary-100 hover:text-neutral-20 hover:border-primary-100 transition-colors"
        >
          {button.label}
        </button>
      ))}
    </div>
  );
}

export default UserPostControlButtons;
