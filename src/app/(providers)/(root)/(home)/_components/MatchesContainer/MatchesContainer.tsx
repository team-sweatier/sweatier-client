"use client";

import day from "@/utils/day";
import matchTypes from "@/utils/matchTypes";
import { Dayjs } from "dayjs";
import { useState } from "react";
import MatchCardsList from "../MatchCardsList";
import Region from "../RegionButton/RegionButton";
import TypesList from "../TypesList";
import WeeklyCalendar from "../WeeklyCalendar";

function MatchesContainer() {
  const today = day().startOf("day");
  const [selectedDate, setSelectedDate] = useState<Dayjs>(today);
  const [selectedSports, setSelectedSports] = useState<string>("농구");
  const [selectedRegion, setSelectedRegion] = useState<string>("");

  const sportsList = matchTypes.sports.map((sport) => Object.keys(sport)[0]);

  return (
    <section className="w-full relative">
      <WeeklyCalendar
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <TypesList
        typesList={sportsList}
        selectedTypes={selectedSports}
        setSelectedTypes={setSelectedSports}
      />
      <Region
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
      />

      <MatchCardsList
        selectedDate={selectedDate}
        selectedSports={selectedSports}
        selectedRegion={selectedRegion}
      />
    </section>
  );
}

export default MatchesContainer;
