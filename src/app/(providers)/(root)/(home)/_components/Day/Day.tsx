"use client";

import dayjs from "@/utils/day";
import { Dayjs } from "dayjs";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

function Day({ day }: { day: Dayjs }) {
  const searchParams = useSearchParams();
  const date = searchParams.get("date") || dayjs().format("YYYY-MM-DD");
  const queryString = new URLSearchParams(searchParams.toString());
  queryString.set("date", day.format("YYYY-MM-DD"));

  const isSelected = day.format("YYYY-MM-DD") === date;

  return (
    <Link
      href={{ query: queryString.toString() }}
      className={`flex justify-center items-center w-[58px] h-14 text-center border-b-2 border-transparent cursor-pointer ${
        isSelected
          ? "font-bold border-b-2 border-b-black"
          : "border-b-2 border-b-transparent"
      }`}
    >
      <div className="w-full">{day.format("M.D ddd")}</div>
    </Link>
  );
}

export default Day;
