"use client";

import useFilterStore from "@/store/filter.store";
import { Dayjs } from "dayjs";

function Day({ day }: { day: Dayjs }) {
  const { date, setDate } = useFilterStore();

  const isSelected = date.isSame(day, "day");

  const handleClickDay = () => {
    setDate(day);
  };

  return (
    <div
      className={`flex justify-center items-center w-[58px] h-14 text-center border-b-2 border-transparent cursor-pointer ${
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
