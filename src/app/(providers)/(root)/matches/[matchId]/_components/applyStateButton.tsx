interface ApplyStateButtonProps {}

function ApplyStateButton({}: ApplyStateButtonProps) {
  // todo : 신청여부 상태 4가지
  return (
    <div className="pb-5">
      <button
        type="button"
        className="bg-neutral-80 text-white text-xs px-4 py-1 rounded-full font-bold"
      >
        신청 완료
      </button>
    </div>
  );
}

export default ApplyStateButton;
