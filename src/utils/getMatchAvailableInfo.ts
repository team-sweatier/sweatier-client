import { Match, MatchDetail } from "@/types/match.response.type";

export default function getMatchAvailableInfo(match: Match | MatchDetail) {
  const { applicants, capability, participating } = match;

  const ratio = applicants / capability;
  const label = participating
    ? "신청 완료"
    : ratio < 0.8
    ? "신청 가능"
    : ratio === 1
    ? "마감"
    : "마감 임박";
  const imagePath =
    ratio < 0.8
      ? "/assets/main_page/event_available.svg"
      : ratio > 0.8 && ratio < 1
      ? "/assets/main_page/alarm.svg"
      : undefined;

  return { label, imagePath };
}
