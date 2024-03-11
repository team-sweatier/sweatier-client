import profile from "@/../public/assets/rating_page/profileImage.svg";
import { Rating } from "@/types/Rating.type";
import participantDto from "@/types/participantDto";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import Stars from "../Stars";

interface RatingCardProps {
  participant: participantDto;
  ratingList: Rating[];
  setRatingList: Dispatch<SetStateAction<Rating[]>>;
}

function RatingCard({
  participant,
  ratingList,
  setRatingList,
}: RatingCardProps) {
  return (
    <div className="w-full flex px-6 py-4 rounded-[10px] bg-primary-20 gap-x-6">
      <div>
        <Image
          src={profile}
          alt="profile-image"
          priority
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="flex flex-col justify-center gap-y-5">
        <div>{participant.nickname}</div>
        <Stars participant={participant} setRatingList={setRatingList} />
      </div>
    </div>
  );
}

export default RatingCard;
