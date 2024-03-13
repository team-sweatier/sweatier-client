import { MyRatings } from "@/api/rating/rating.dto";
import RatingCheckCard from "../RatingCheckCard";

function RatingCheckCardsList({ myRatings }: { myRatings: MyRatings[] }) {
  return (
    <div className="w-full">
      <h2 className=" text-base w-full mb-4 font-bold text-natural-90">
        내가 받은 티어평가
      </h2>
      <ul className="flex flex-col gap-y-4 sm:grid sm:grid-cols-2 sm:gap-x-7">
        {myRatings.map((rating, index) => (
          <li key={rating.raterId}>
            <RatingCheckCard rating={rating} index={index} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RatingCheckCardsList;
