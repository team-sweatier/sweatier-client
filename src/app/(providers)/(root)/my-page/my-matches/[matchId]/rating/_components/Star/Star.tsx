import { Rating } from "@/types/Rating.type";
import participantDto from "@/types/participantDto";
import { Dispatch, SetStateAction, useState } from "react";

interface RatingCardProps {
  participant: participantDto;
  setRatingList: Dispatch<SetStateAction<Rating[]>>;
}

function RatingStar({ participant, setRatingList }: RatingCardProps) {
  const totalStars = 5;
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const handleMouseOver = (newRating: number) => {
    setHoverRating(newRating);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const handleClick = (newRating: number) => {
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
      {[...Array(totalStars)].map((star, index) => {
        const ratingValue = index + 1;
        return (
          <svg
            key={index}
            onMouseOver={() => handleMouseOver(ratingValue)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(ratingValue)}
            width="19"
            height="18"
            viewBox="0 0 19 18"
            fill={
              ratingValue <= (hoverRating || rating) ? "#128CFF" : "#00ff0000"
            }
            stroke={
              ratingValue <= (hoverRating || rating) ? "#0B1E2F" : "#9BA2A8"
            }
            style={{ cursor: "pointer", marginRight: "5px" }}
          >
            <path
              d="M7.64386 3.62704C8.43046 1.66605 8.82377 0.685547 9.50009 0.685547C10.1764 0.685547 10.5697 1.66605 11.3563 3.62705L11.393 3.71836C11.8373 4.82623 12.0595 5.38016 12.5124 5.71685C12.9652 6.05354 13.5597 6.10678 14.7486 6.21326L14.9636 6.2325C16.9094 6.40677 17.8823 6.4939 18.0905 7.11288C18.2986 7.73187 17.5761 8.38921 16.1311 9.7039L15.6488 10.1427C14.9173 10.8082 14.5515 11.1409 14.3811 11.5771C14.3493 11.6584 14.3228 11.7418 14.3019 11.8266C14.1899 12.2813 14.297 12.764 14.5112 13.7295L14.5778 14.03C14.9715 15.8043 15.1684 16.6915 14.8247 17.0741C14.6963 17.2171 14.5293 17.3201 14.3439 17.3707C13.8477 17.5061 13.1433 16.932 11.7343 15.7839C10.8091 15.0301 10.3465 14.6531 9.81544 14.5683C9.60653 14.535 9.39366 14.535 9.18475 14.5683C8.65365 14.6531 8.19106 15.0301 7.26589 15.7839C5.85694 16.932 5.15246 17.5061 4.65626 17.3707C4.47084 17.3201 4.30393 17.2171 4.17551 17.0741C3.83183 16.6915 4.02866 15.8043 4.42234 14.03L4.48902 13.7295C4.70322 12.764 4.81033 12.2813 4.69827 11.8266C4.67737 11.7418 4.65093 11.6584 4.61913 11.5771C4.44866 11.1409 4.08291 10.8082 3.3514 10.1427L2.86912 9.7039C1.42408 8.38921 0.701554 7.73187 0.909732 7.11288C1.11791 6.4939 2.09082 6.40677 4.03663 6.2325L4.25157 6.21326C5.44049 6.10678 6.03494 6.05354 6.48779 5.71685C6.94064 5.38016 7.16284 4.82623 7.60723 3.71836L7.64386 3.62704Z"
              stroke={
                ratingValue <= (hoverRating || rating) ? "#0B1E2F" : "#9BA2A8"
              }
            />
          </svg>
        );
      })}
      <div className="ml-4">{`${rating} / 5`}</div>
    </div>
  );
}

export default RatingStar;
