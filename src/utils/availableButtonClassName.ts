export const availableButtonClassName = (applyState: string) => {
  switch (applyState) {
    case "신청 가능":
      return "rounded-[10px] gap-x-1 justify-center relative flex w-16 h-6 items-center border border-primary-100 text-primary-100";

    case "마감":
      return "rounded-[10px] gap-x-1 justify-center relative flex w-16 h-6 items-center bg-[#E7E7E7] text-[#9BA2A8]";

    case "마감 임박":
      return "rounded-[10px] gap-x-1 justify-center relative flex w-16 h-6 items-center border border-warning text-warning";

    case "신청 완료":
      return "rounded-[10px] gap-x-1 justify-center relative flex w-16 h-6 items-center bg-neutral-80 text-white";
    case "신청 불가":
      return "rounded-[10px] gap-x-1 justify-center relative flex w-16 h-6 items-center bg-[#E7E7E7] text-[#9BA2A8]";
  }
};
