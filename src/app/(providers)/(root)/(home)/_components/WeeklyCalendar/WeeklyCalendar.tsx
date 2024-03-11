"use client";

import useFilterStore from "@/store/filter.store";
import { Dayjs } from "dayjs";
import { useEffect, useState } from "react";
import Day from "../Day";

function WeeklyCalendar() {
  const { date, setDate } = useFilterStore();
  const [weeksList, setWeeksList] = useState<Dayjs[]>([]);

  useEffect(() => {
    let tempWeeksList = [date];
    for (let i = 0; i < 13; i++) {
      tempWeeksList.push(tempWeeksList[tempWeeksList.length - 1].add(1, "day"));
    }
    setWeeksList(tempWeeksList);
  }, [date]);

  return (
    <div className="mb-4  flex justify-center sticky z-30 top-0 bg-white">
      <ul className="scrollbar-hide overflow-x-auto flex border-b gap-x-4 ">
        {weeksList.map((day) => (
          <li key={day.toString()}>
            <Day day={day} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WeeklyCalendar;
