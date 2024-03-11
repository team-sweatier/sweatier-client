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
  }, []);

  const scroll = (scrollOffset: number) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += scrollOffset;
    }
  };

  return (
    <>
      {weeksList ? (
        <div className="mb-4 flex items-center justify-center sticky z-30 top-0 bg-white h-14 border-b ">
          <button
            onClick={() => scroll(-100)}
            className="px-2 items-center hidden sm:flex"
          >
            <Image
              src={`/assets/arrow.svg`}
              width={30}
              height={30}
              alt="left-arrow"
              className="mb-[6px]"
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

          <button onClick={() => scroll(100)} className="px-2 hidden sm:flex ">
            <Image
              src={`/assets/arrow.svg`}
              width={30}
              height={30}
              alt="right-arrow"
              className="mb-[6px] -rotate-180"
            />
          </button>
        </div>
      ) : null}
    </>
  );
}

export default WeeklyCalendar;
