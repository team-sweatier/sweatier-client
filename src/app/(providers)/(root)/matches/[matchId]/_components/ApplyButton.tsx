interface ApplyButtonProps {
  isAbledApply: boolean;
}

function ApplyButton({ isAbledApply }: ApplyButtonProps) {
  // todo: 신청하기 disabled 상태 전환
  return (
    <button
      type="button"
      className={`text-sm px-5 py-6 rounded-3xl font-bold border-[0.7px] ${
        isAbledApply
          ? "bg-primary-100 text-white border-primary-100 drop-shadow-[0px_0px_2px_#0f8cff]"
          : "bg-neutral-20 text-neutral-40 border-[#E6E6E6]"
      }`}
    >
      신청하기
    </button>
  );
}

export default ApplyButton;