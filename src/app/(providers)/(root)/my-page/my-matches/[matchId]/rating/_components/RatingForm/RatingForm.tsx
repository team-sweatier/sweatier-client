import BlueButton from "@/components/Buttons/BlueButton";
import Heading from "@/components/Heading";
import { Rating } from "@/types/Rating.type";
import participantDto from "@/types/participantDto";
import { useEffect, useState } from "react";
import RatingCardsList from "../RatingCardsList";

function RatingForm({ participants }: { participants: participantDto[] }) {
  const [isValid, setIsValid] = useState(false);

  const handleClickButton = () => {
    console.log(ratingList);
  };
  const [ratingList, setRatingList] = useState<Rating[]>([]);

  useEffect(() => {
    ratingList.length > 0 ? setIsValid(true) : setIsValid(false);
  }, [ratingList]);

  return (
    <div className="w-full">
      <Heading className="sm:text-xl text-sm w-full mb-6 ">
        티어평가 하기
      </Heading>
      <RatingCardsList
        participants={participants}
        ratingList={ratingList}
        setRatingList={setRatingList}
      />
      <BlueButton
        isValid={isValid}
        buttonLabel="평가 완료"
        onclick={handleClickButton}
      />
    </div>
  );
}

export default RatingForm;
