import { Match } from "@/types/Match.type";
import FloatingButton from "../FloatingButton";
import MatchCardsList from "../MatchCardsList";
import Region from "../RegionButton/RegionButton";
import SportTypeFilter from "../SportTypeFilter";
import WeeklyCalendar from "../WeeklyCalendar";

interface MatchesContainerProps {
  matches: Match[];
  date: string;
  sportType: string;
  region: string | undefined;
}

function MatchesContainer(props: MatchesContainerProps) {
  return (
    <section className="w-full h-full relative">
      <WeeklyCalendar />
      <SportTypeFilter />
      <Region />
      <MatchCardsList matches={props.matches} />
      <FloatingButton />
    </section>
  );
}

export default MatchesContainer;
