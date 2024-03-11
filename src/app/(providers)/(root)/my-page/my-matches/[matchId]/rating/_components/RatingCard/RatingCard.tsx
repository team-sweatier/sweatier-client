import profile from "@/../public/assets/rating_page/profileImage.svg";
import participantDto from "@/types/participantDto";
import Image from "next/image";
import Star from "../Star/Star";

function RatingCard({ participant }: { participant: participantDto }) {
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
        <Star />
      </div>
    </div>
  );
}

export default RatingCard;
