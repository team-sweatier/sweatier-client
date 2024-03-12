import { Rating } from "@/types/Rating.type";
import participantDto from "@/types/participantDto";
import { Dispatch, SetStateAction, useState } from "react";
import StarIcon from "../StarIcon";

interface StarsProps {
  participant: participantDto;
  setRatingList: Dispatch<SetStateAction<Rating[]>>;
}

function Stars({ participant, setRatingList }: StarsProps) {
  const totalStars = 5;
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const handleClickStar = (newRating: number) => {
    setRating(newRating);
    setRatingList((prev) => {
      const isUserRated = prev.find(
        (rating) => rating.userId === participant.userId
      );
      if (isUserRated) {
        return prev.map((rating) =>
          rating.userId === participant.userId
            ? { ...rating, value: newRating }
            : rating
        );
      } else {
        return [...prev, { userId: participant.userId, value: newRating }];
      }
    });
  };

  return (
    <div className="flex">
      {[...Array(totalStars)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <StarIcon
            key={index}
            selected={ratingValue <= rating}
            hovered={ratingValue <= hoverRating}
            onMouseOver={() => setHoverRating(ratingValue)}
            onMouseLeave={() => setHoverRating(0)}
            onClick={() => handleClickStar(ratingValue)}
          />
        );
      })}
      <div className="ml-4">{`${rating} / 5`}</div>
    </div>
  );
}

export default Stars;
