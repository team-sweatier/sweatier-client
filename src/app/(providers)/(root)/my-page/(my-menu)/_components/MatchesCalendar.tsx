"use client";

import CustomCaption from "@/components/Forms/CalendarForm/CustomCaption";
import "@/components/Forms/CalendarForm/calendar.css";
import { Match } from "@/types/Match.type";
import { ko } from "date-fns/locale";
import dayjs from "dayjs";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

interface MatchesCalendarProps {
  matchesByDate: Record<string, Match[]>;
}

function MatchesCalendar({ matchesByDate }: MatchesCalendarProps) {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const date = searchParams.get("date");
    if (date) return;

    router.replace(
      `${window.location.href}/?date=${dayjs().format("YYYY-MM-DD")}`
    );
  }, [router, searchParams]);

  return (
    <Suspense>
      <DayPicker
        mode="single"
        locale={ko}
        showOutsideDays
        disabled={false}
        modifiers={{ before: true }}
        className="!m-0"
        classNames={{
          table: "w-full",
          head: "p-0",
          head_row:
            "flex font-medium text-gray-900 border-neutral-20 border-b-[0.5px]",
          head_cell:
            "h-[50px] w-[50px] text-sm font-normal flex items-center justify-center",
          row: "w-full border-neutral-20 border-b-[0.5px]",
          cell: "w-full p-0",
        }}
        components={{
          Day: ({ date }) => (
            <Day
              date={dayjs(date).format("YYYY-MM-DD")}
              hasMatch={!!matchesByDate[dayjs(date).format("YYYY-MM-DD")]}
            />
          ),
          Caption: CustomCaption,
        }}
      />
    </Suspense>
  );
}

function Day({ date, hasMatch }: { date: string; hasMatch: boolean }) {
  const day = dayjs(date).format("D");
  const searchParams = useSearchParams();
  const queryString = new URLSearchParams(searchParams.toString());
  const selectedDate = queryString.get("date");
  queryString.set("date", date);

  return (
    <Suspense>
      <Link
        href={{ query: queryString.toString() }}
        data-isbefore={dayjs(date).isBefore(dayjs(), "D")}
        data-selected={selectedDate === date}
        className="group/day h-[50px] w-[50px] py-[9px] rounded-md flex flex-col justify-between items-center bg-white data-[selected=true]:bg-primary-100 hover:bg-primary-100 transition"
      >
        <time
          dateTime={date}
          className="text-neutral-90 leading-[19px] group-data-[isbefore=true]/day:text-neutral-40 group-data-[selected=true]/day:text-white group-hover/day:!text-white transition"
        >
          {day}
        </time>

        {hasMatch && (
          <div className="w-1.5 h-1.5 rounded-full bg-primary-100 group-data-[isbefore=true]/day:bg-neutral-30 group-data-[selected=true]/day:bg-white group-hover/day:!bg-white transition" />
        )}
      </Link>
    </Suspense>
  );
}

export default MatchesCalendar;
