"use client";
import api from "@/api";
import BlueButton from "@/components/Buttons/BlueButton";
import { Rating } from "@/types/Rating.type";
import participantDto from "@/types/participantDto";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import RatingCardsList from "../RatingCardsList/RatingCardsList";

function RatingForm({
  participants,
  matchId,
}: {
  participants: participantDto[];
  matchId: string;
}) {
  const [isValid, setIsValid] = useState(false);
  const [ratingList, setRatingList] = useState<Rating[]>([]);
  const router = useRouter();

  const handleClickButton = async () => {
    const response = await api.rating.rateParticipants({
      matchId,
      ratings: ratingList,
    });
    router.push("/");
  };

  useEffect(() => {
    ratingList.length > 0 ? setIsValid(true) : setIsValid(false);
  }, [ratingList]);

  return (
    <div className="w-full">
      <h2 className=" text-base w-full mb-4 font-bold text-natural-90">
        티어평가 하기
      </h2>
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
