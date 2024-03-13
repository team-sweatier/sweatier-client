"use client";

import api from "@/api";
import { Match } from "@/types/Match.type";
import day from "@/utils/day";
import { useEffect } from "react";

type tierLabel = "티어 평가하기" | "받은 티어평가 보기";

//todo : 유저가 해당 게시물에 tier 평가를 했다면 "받은 티어 평가 보기" -> 티어 조회 페이지로 이동 / 안했다면 "티어 평가하기" -> 티어 평가하기 페이지로 이동
//todo : Link 요소로 버튼 감싸기! 페이지별 경로 물어보기

interface MatchesOnDateProps {
  label: string;
  date: string;
  matches: Match[];
}

function MatchesOnDate({ label, date, matches }: MatchesOnDateProps) {
  const tierLabelType: tierLabel = "받은 티어평가 보기";

  useEffect(() => {
    api.user.getMyMatches().then((res) => console.log(res));
  }, []);

  return (
    <div className="px-4 border-primary-20 w-full">
      <div className="flex font-bold text-base gap-x-4 mb-8">
        <div className="text-neutral-90">{label}</div>
        <div className="text-primary-100">
          {day(date).format("M월 D일 (ddd)")}
        </div>
      </div>

      <div className="">
        <ul className="flex flex-col gap-y-4 sm:gap-8">
          {matches.map((match) => (
            <li key={match.id}>
              <MatchCard match={match} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

interface MatchCardProps {
  match: Match;
}

function MatchCard({ match }: MatchCardProps) {
  return (
    <div className="shadow-card drop-shadow-lg bg-white rounded-[10px] py-[14px] px-5 grid grid-cols-1 gap-y-4">
      <time
        className="font-bold text-neutral-90"
        dateTime={match.matchDay.toISOString()}
      >
        {day(match.matchDay).format("hh:mm")}
      </time>
      <h6>{match.title}</h6>
    </div>
  );
}

export default MatchesOnDate;
