import { MyRatings } from "@/api/rating/rating.dto";
import StarIcon from "@/app/(providers)/(root)/my-page/(my-menu)/my-matches/[matchId]/rating/_components/StarIcon";

function MyStars({ rating }: { rating: MyRatings }) {
  const totalStars = 5;
  return (
    <div className="flex">
      <div className="flex">
        {Array.from({ length: totalStars }, (_, index) => (
          <StarIcon key={index} selected={index < rating.value} />
        ))}
      </div>

      <div className="ml-4 text-xs text-neutral-90 pt-1">
        {`${rating.value} / 5`}
      </div>
    </div>
  );
}

export default MyStars;
