import { MyRatings } from "@/api/rating/rating.dto";
import Heading from "@/components/Heading";
import RatingCheckCard from "../RatingCheckCard";

function RatingCheckCardsList({ myRatings }: { myRatings: MyRatings[] }) {
  return (
    <div className="w-full">
      <Heading className=" text-base w-full mb-4 py-0.5">
        내가 받은 티어평가
      </Heading>
      <ul className="flex flex-col gap-y-4">
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
