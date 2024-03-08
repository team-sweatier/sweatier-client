"use client";

import day from "@/utils/day";
import { Dayjs } from "dayjs";
import { useState } from "react";
import MatchCardsList from "../MatchCardsList";
import Region from "../RegionButton/RegionButton";
import SportsTypesList from "../SportsTypesList";
import WeeklyCalendar from "../WeeklyCalendar";

function MatchesContainer() {
  const today = day().startOf("day");
  const [selectedDate, setSelectedDate] = useState<Dayjs>(today);
  const [selectedSports, setSelectedSports] = useState<string>("농구");
  const [selectedRegion, setSelectedRegion] = useState<string>("");

  return (
    <section className="w-full">
      <WeeklyCalendar
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <SportsTypesList
        selectedSports={selectedSports}
        setSelectedSports={setSelectedSports}
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
