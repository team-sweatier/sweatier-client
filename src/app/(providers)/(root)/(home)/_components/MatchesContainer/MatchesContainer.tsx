import matchTypes from "@/utils/matchTypes";
import FloatingButton from "../FloatingButton";
import MatchCardsList from "../MatchCardsList";
import Region from "../RegionButton/RegionButton";
import TypesList from "../TypesList";
import WeeklyCalendar from "../WeeklyCalendar";

function MatchesContainer() {
  const sportsList = matchTypes.sports.map((sport) => Object.keys(sport)[0]);

  return (
    <section className="w-full relative">
      <WeeklyCalendar />
      <TypesList typeName="sports" typesList={sportsList} className="px-1" />
      <Region />
      <MatchCardsList />
      <FloatingButton />
    </section>
  );
}

export default MatchesContainer;
