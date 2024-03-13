"use client";

import useQueryGetMyMatches from "@/hooks/services/matches/useQueryMyMatches";
import dayjs from "dayjs";
import groupBy from "lodash.groupby";
import { useSearchParams } from "next/navigation";
import { Suspense, useMemo } from "react";
import MatchesCalendar from "../_components/MatchesCalendar";
import MatchesOnDate from "../_components/MatchesOnDate";

function MyMatchesPage() {
  const { data: matches } = useQueryGetMyMatches();
  const date = useSearchParams().get("date") || dayjs().format("YYYY-MM-DD");
  const matchesByDate = useMemo(
    () =>
      groupBy(matches, (match) => dayjs(match.matchDay).format("YYYY-MM-DD")),
    [matches]
  );
  const matchesOnDate = matchesByDate[date] || [];

  return (
    <Suspense>
      <main className="px-5 sm:px-0 pt-[30px] pb-[50px] mx-auto max-w-screen-md w-full justify-between h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center w-max md:w-full mx-auto">
          <MatchesCalendar matchesByDate={matchesByDate} />
          <MatchesOnDate
            label="경기 내역 조회"
            date={date}
            matches={matchesOnDate}
          />
        </div>
      </main>
    </Suspense>
  );
}

export default MyMatchesPage;
