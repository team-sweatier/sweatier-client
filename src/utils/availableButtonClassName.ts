export const availableButtonClassName = (applyState: string) => {
  switch (applyState) {
    case "신청 가능":
      return "border border-primary-100 text-primary-100";

    case "마감":
      return "bg-[#E7E7E7] text-[#9BA2A8]";

    case "마감 임박":
      return "border border-warning text-warning";

    case "신청 완료":
      return "bg-neutral-80 text-white";
    case "신청 불가":
      return "bg-[#E7E7E7] text-[#9BA2A8]";
  }
};
