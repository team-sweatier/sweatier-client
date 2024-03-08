"use client";

import { Dayjs } from "dayjs";
import { Dispatch, SetStateAction } from "react";

function Day({
  day,
  selectedDate,
  setSelectedDate,
}: {
  day: Dayjs;
  selectedDate: Dayjs;
  setSelectedDate: Dispatch<SetStateAction<Dayjs>>;
}) {
  const isSelected = selectedDate.isSame(day, "day");

  const handleClickDay = () => {
    setSelectedDate(day);
  };

  return (
    <div
      className={`flex justify-center items-center w-14 h-14 text-center border-b-2 border-transparent cursor-pointer ${
        isSelected
          ? "font-bold border-b-2 border-b-black"
          : "border-b-2 border-b-transparent"
      }`}
      onClick={handleClickDay}
    >
      <div className="w-full">{day.format("M.D ddd")}</div>
    </div>
  );
}

export default Day;
