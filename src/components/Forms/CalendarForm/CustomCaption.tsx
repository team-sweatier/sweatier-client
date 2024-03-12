import leftArrow from "@/../public/assets/match_create_page/left-arrow-md.png";
import rightArrow from "@/../public/assets/match_create_page/right-arrow-md.png";
import Icon from "@/components/Icon";
import { format } from "date-fns";
import { CaptionProps, useNavigation } from "react-day-picker";

function CustomCaption(props: CaptionProps) {
  const { goToMonth, nextMonth, previousMonth } = useNavigation();
  return (
    <div className="flex item-center justify-center gap-x-4 py-2 mb-4 text-center">
      <button
        type="button"
        disabled={!previousMonth}
        onClick={() => previousMonth && goToMonth(previousMonth)}
      >
        <Icon src={leftArrow} alt="left-arrow" classStyles="h-4 w-4 stroke-2" />
      </button>
      <span className="text-lg text-neutral-90 font-bold mt-1">
        {format(props.displayMonth, "yyyy.M")}
      </span>
      <button
        type="button"
        disabled={!nextMonth}
        onClick={() => nextMonth && goToMonth(nextMonth)}
      >
        <Icon
          src={rightArrow}
          alt="right-arrow"
          classStyles="h-4 w-4 stroke-2"
        />
      </button>
    </div>
  );
}

export default CustomCaption;
