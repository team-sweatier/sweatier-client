"use client";

import { Match } from "@/types/match.response.type";
import day from "@/utils/day";
import { useRouter } from "next/navigation";

type tierLabel = "티어 평가하기" | "받은 티어평가 보기";

//todo : 유저가 해당 게시물에 tier 평가를 했다면 "받은 티어 평가 보기" -> 티어 조회 페이지로 이동 / 안했다면 "티어 평가하기" -> 티어 평가하기 페이지로 이동
//todo : Link 요소로 버튼 감싸기! 페이지별 경로 물어보기

interface MatchesOnDateProps {
  label: string;
  date: string;
  matches: Match[];
}

function MatchesOnDate({ label, date, matches }: MatchesOnDateProps) {
  return (
    <div className="px-4 border-primary-20 w-full">
      <div className="flex font-bold text-base gap-x-4 mb-8">
        <div className="text-neutral-90">{label}</div>
        <div className="text-primary-100">
          {day(date).format("M월 D일 (ddd)")}
        </div>
      </div>

      <ul className="flex flex-col gap-y-4 sm:gap-8">
        {matches.map((match) => (
          <li key={match.id}>
            <MatchCard match={match} />
          </li>
        ))}
      </ul>
    </div>
  );
}

interface MatchCardProps {
  match: Match;
}

function MatchCard({ match }: MatchCardProps) {
  const router = useRouter();

  return (
    <div className="shadow-card bg-white rounded-[10px] py-[14px] px-5 grid grid-cols-1 gap-y-4">
      <time className="font-bold text-neutral-90" dateTime={match.matchDay}>
        {day(match.matchDay).format("hh:mm")}
      </time>
      <h6>{match.title}</h6>

      <div className="flex justify-between">
        <p className="text-[11px] text-neutral-60">
          남녀모두 | 6vs6 | 모든레벨
        </p>
        <button
          onClick={() => router.push(`/my-page/my-matches/${match.id}/rating`)}
          className="border-primary-100 border rounded-[30px] w-[98px] text-[11px] font-bold bg-white py-[5.5px] text-center text-primary-100"
        >
          티어평가 하기
        </button>
      </div>
    </div>
  );
}

export default MatchesOnDate;
