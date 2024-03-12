"use client";
import BlueButton from "@/components/Buttons/BlueButton";
import Heading from "@/components/Heading";
import useMutationRating from "@/hooks/services/matches/useMutationRating";
import { Rating } from "@/types/Rating.type";
import participantDto from "@/types/participantDto";
import { useEffect, useState } from "react";
import RatingCardsList from "../RatingCardsList";

function RatingForm({
  participants,
  matchId,
}: {
  participants: participantDto[];
  matchId: string;
}) {
  const [isValid, setIsValid] = useState(false);
  const [ratingList, setRatingList] = useState<Rating[]>([]);

  const { mutateAsync: rateParticipants } = useMutationRating(
    matchId,
    ratingList
  );

  const handleClickButton = () => {
    rateParticipants(ratingList);
  };

  useEffect(() => {
    ratingList.length > 0 ? setIsValid(true) : setIsValid(false);
  }, [ratingList]);

  return (
    <div className="w-full">
      <Heading className="text-[16px] w-full mb-6 py-0 ">티어평가 하기</Heading>
      <RatingCardsList
        participants={participants}
        ratingList={ratingList}
        setRatingList={setRatingList}
      />
      <BlueButton
        isValid={isValid}
        buttonLabel="평가 완료"
        onClick={handleClickButton}
        className="mt-8"
      />
    </div>
  );
}

export default RatingForm;
