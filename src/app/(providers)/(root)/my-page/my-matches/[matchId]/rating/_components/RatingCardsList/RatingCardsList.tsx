import { Rating } from "@/types/Rating.type";
import participantDto from "@/types/participantDto";
import { Dispatch, SetStateAction } from "react";
import RatingCard from "../RatingCard";

interface RatingCardsListProps {
  participants: participantDto[];
  ratingList: Rating[];
  setRatingList: Dispatch<SetStateAction<Rating[]>>;
}
function RatingCardsList({
  participants,
  ratingList,
  setRatingList,
}: RatingCardsListProps) {
  return (
    <div className="w-full">
      <ul className="flex flex-col gap-y-4">
        {participants.map((participant) => (
          <li key={participant.id}>
            <RatingCard
              ratingList={ratingList}
              setRatingList={setRatingList}
              participant={participant}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RatingCardsList;
