import dayjs, { Dayjs } from "dayjs";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Day from "../Day";

function WeeklyCalendar() {
  const [weeksList, setWeeksList] = useState<Dayjs[]>();
  const scrollContainerRef = useRef<HTMLUListElement>(null); // HTMLUListElement 타입 지정

  useEffect(() => {
    let tempWeeksList = [dayjs()];
    for (let i = 0; i < 13; i++) {
      tempWeeksList.push(tempWeeksList[tempWeeksList.length - 1].add(1, "day"));
    }
    setWeeksList(tempWeeksList);
  }, [date]);

  const scroll = (scrollOffset: number) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += scrollOffset;
    }
  };

  return (
    <>
      {weeksList ? (
        <div className="mb-4 flex items-center justify-center sticky z-30 top-0 bg-white h-14 ">
          <button
            onClick={() => scroll(-100)}
            className="px-2 border-b border-transparent flex items-center"
          >
            <Image
              src={`/assets/arrow-point.png`}
              width={20}
              height={20}
              alt="left-arrow"
              className="-rotate-180 mb-1"
            />
          </button>
          <ul
            ref={scrollContainerRef}
            className="scrollbar-hide overflow-x-auto flex border-b gap-x-4 items-center"
          >
            {weeksList.map((day, index) => (
              <li key={day.toString()} className="flex items-center">
                <Day day={day} />
              </li>
            ))}
          </ul>

          <button onClick={() => scroll(100)} className="px-2 ">
            <Image
              src={`/assets/arrow-point.png`}
              width={20}
              height={20}
              alt="right-arrow"
              className="mb-1"
            />
          </button>
        </div>
      ) : null}
    </>
  );
}

export default WeeklyCalendar;
