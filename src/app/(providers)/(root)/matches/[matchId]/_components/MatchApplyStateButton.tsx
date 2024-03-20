import Icon from "@/components/Icon";
import isUserParticipating from "@/utils/isUserParticipating";
import { matchDetailIconsPath } from "@/utils/matchPatchs";
import translateMatchAvailable from "@/utils/translateMatches/translateMatchAvailable";

interface MatchApplyStateButtonProps {
  match: any;
  userId: string;
}

function MatchApplyStateButton({ match, userId }: MatchApplyStateButtonProps) {
  //* 1. 기신청 여부 확인하기
  const hasApplied = userId ? isUserParticipating(match, userId) : false;
  const applyState = translateMatchAvailable(
    match.applicants,
    match.capability,
    hasApplied
  );

  const getButtonClass = (applyState: string) => {
    switch (applyState) {
      case "신청 완료":
        return "bg-neutral-80 text-white";
      case "마감 임박":
        return "bg-warning text-white";
      case "마감":
        return "bg-neutral-20";
      default:
        return "bg-primary-100 text-white"; // 신청 가능
    }
  };

  const iconSrc =
    applyState === "신청 가능"
      ? matchDetailIconsPath.apply
      : matchDetailIconsPath.alarm;

  const buttonClass = getButtonClass(applyState);
  const isIconVisible =
    applyState === "신청 가능" || applyState === "마감 임박";

  return (
    <div className="flex items-center mb-5">
      <button
        type="button"
        className={`${buttonClass} ${
          applyState === "마감" ? "text-neutral-40" : ""
        } text-sm py-[6px] px-3 w-28 rounded-full font-bold flex items-center justify-center gap-x-2`}
      >
        {isIconVisible && (
          <Icon
            src={iconSrc}
            alt="상태 아이콘"
            width={18}
            height={18}
            classStyles="sm:mb-[1px] mb-1"
          />
        )}
        {applyState}
      </button>
    </div>
  );
}

export default MatchApplyStateButton;
