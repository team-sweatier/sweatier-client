"use client";
import CustomCaption from "@/components/Forms/CalendarForm/CustomCaption";
import "@/components/Forms/CalendarForm/calendar.css";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

function MyCalendar() {
  const [selected, setSelected] = useState<Date>();

  console.log("selected", selected);

  return (
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={(date) => setSelected(date)}
      fromDate={new Date()}
      className=""
      showOutsideDays
      classNames={{
        table: "w-full",
        head_row:
          "flex font-medium text-gray-900 border-neutral-20 border-b-[0.5px]",
        head_cell: "m-1 w-full font-normal text-sm",
        row: "w-full py-1 border-neutral-20 border-b-[0.5px]",
        cell: "text-gray-600 rounded-md h-full w-full text-center text-base m-1 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day_range_end)]:bg-natural-40 [&:has([aria-selected].day-outside)]:text-white rounded-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20 hover:rounded-md",
        day: "h-9 w-9 p-0 font-normal",
        day_range_end: "day-range-end",
        day_selected:
          "rounded-md bg-primary-100 text-white hover:bg-primary-80 hover:text-white focus:bg-primary-100 focus:text-white text-center",
        day_today: "text-primary-100 bg-green-200",
        day_outside:
          "text-natural-40 opacity-20 aria-selected:bg-gray-500 aria-selected:text-gray-900 aria-selected:bg-opacity-0",
        day_disabled: "text-natural-40 cursor-not-allowed",
        day_hidden: "invisible",
      }}
      components={{
        Caption: CustomCaption,
      }}
    />
  );
}

export default MyCalendar;
