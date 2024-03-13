import MatchCard from "@/components/MatchCard";
import { Match } from "@/types/match.response.type";

interface MatchCardsListProps {
  matches: Match[];
}

function MatchCardsList({ matches }: MatchCardsListProps) {
  return matches.length ? (
    <ul className="flex flex-col gap-y-4 sm:gap-8  min-h-[700px]">
      {matches.map((match) => (
        <li key={match.id}>
          <MatchCard match={match} className="mx-1" />
        </li>
      ))}
    </ul>
  ) : (
    <div className="flex justify-center mt-24 text-neutral-70 text-sm mb-[400px]">
      일치하는 장소가 없습니다.
    </div>
  );
}

export default MatchCardsList;
