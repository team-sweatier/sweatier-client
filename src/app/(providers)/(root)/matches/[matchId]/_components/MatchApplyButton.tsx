import Icon from "@/components/Icon";
import { matchDetailIcons } from "@/utils/matchIcons";

interface MatchApplyButtonProps {
  state: "신청 가능" | "마감 임박" | "마감" | "신청 완료";
}

function MatchApplyButton({ state }: MatchApplyButtonProps) {
  const getButtonClass = (state: string) => {
    switch (state) {
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
    state === "신청 가능" ? matchDetailIcons.apply : matchDetailIcons.alarm;

  const buttonClass = getButtonClass(state);
  const isIconVisible = state === "신청 가능" || state === "마감 임박";

  return (
    <div className="flex items-center mb-5">
      <button
        type="button"
        className={`${buttonClass} ${
          state === "마감" ? "text-neutral-40" : ""
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
        {state}
      </button>
    </div>
  );
}

export default MatchApplyButton;
