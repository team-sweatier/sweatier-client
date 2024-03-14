import { MyRatings } from "@/api/rating/rating.dto";
import RatingCheckStar from "../MyStars/MyStars";

function RatingCheckCard({
  rating,
  index,
}: {
  rating: MyRatings;
  index: number;
}) {
  return (
    <div className="w-full flex px-6 py-4 rounded-[10px] bg-primary-20 gap-x-11 sm:gap-x-8 items-center h-full">
      <div className="font-bold text-sm">{`Player${index + 1}`}</div>
      <RatingCheckStar rating={rating} />
    </div>
  );
}

export default RatingCheckCard;
