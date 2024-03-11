import participantDto from "@/types/participantDto";
import RatingCard from "../RatingCard";

const participants: participantDto[] = [
  { userId: "1", nickname: "닉네임1" },
  { userId: "2", nickname: "닉네임3" },
  { userId: "3", nickname: "닉네임3" },
];

function RatingCardsList() {
  return (
    <div className="w-full">
      <ul className="flex flex-col gap-y-4">
        {participants.map((participant) => (
          <li key={participant.userId}>
            <RatingCard participant={participant} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RatingCardsList;
