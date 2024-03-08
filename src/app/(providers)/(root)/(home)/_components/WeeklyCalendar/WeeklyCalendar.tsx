"use client";

import { Dayjs } from "dayjs";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Day from "../Day";

function WeeklyCalendar({
  selectedDate,
  setSelectedDate,
}: {
  selectedDate: Dayjs;
  setSelectedDate: Dispatch<SetStateAction<Dayjs>>;
}) {
  const [weeksList, setWeeksList] = useState<Dayjs[]>([]);

  useEffect(() => {
    let tempWeeksList = [selectedDate];
    for (let i = 0; i < 13; i++) {
      tempWeeksList.push(tempWeeksList[tempWeeksList.length - 1].add(1, "day"));
    }
    setWeeksList(tempWeeksList);
  }, []);

  return (
    <div className="mb-4 w-full">
      <ul className="scrollbar-hide overflow-x-auto flex border-b">
        {weeksList.map((day) => (
          <li key={day.toString()}>
            <Day
              day={day}
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WeeklyCalendar;
