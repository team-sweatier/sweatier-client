"use client";

import arrow from "@/../public/assets/main_page/arrow.png";
import day from "@/utils/day";
import Image from "next/image";
import Day from "../Day";

function WeeklyCalendar() {
  const today = day();
  const weeksList = Array(13)
    .fill(0)
    .map((_, i) => today.add(i, "day"));

  const scroll = (scrollOffset: number) => {
    const weeklyCalendar = document.getElementById("weekly-calender");
    if (!weeklyCalendar) return;

    weeklyCalendar.scrollLeft += scrollOffset;
  };

  return (
    <div className="flex items-center justify-center z-30 top-0 bg-white h-14 sticky border-b ">
      <button
        onClick={() => scroll(-150)}
        className="px-2 sm:flex items-center hidden"
      >
        <Image
          src={arrow}
          width={30}
          height={30}
          alt="left-arrow"
          className="mb-[6px]"
        />
      </button>
      <ul
        id="weekly-calender"
        className="scrollbar-hide overflow-x-auto flex border-b gap-x-4 items-center"
      >
        {weeksList?.map((day, index) => (
          <li key={day.toString()} className="flex items-center">
            <Day day={day} />
          </li>
        ))}
      </ul>

      <button
        onClick={() => scroll(150)}
        className="px-2 border-b border-transparent sm:flex items-center hidden"
      >
        <Image
          src={arrow}
          width={30}
          height={30}
          alt="right-arrow"
          className="mb-[6px] -rotate-180"
        />
      </button>
    </div>
  );
}

export default WeeklyCalendar;
