import { Match } from "@/types/Match.type";

export default function getMatchAvailableInfo(match: Match) {
  const { applicants, capability } = match;

  const ratio = applicants / capability;
  const label = ratio < 0.8 ? "신청 가능" : ratio === 1 ? "마감" : "마감 임박";
  const imagePath =
    ratio < 0.8
      ? "/assets/main_page/event_available.svg"
      : ratio > 0.8 && ratio < 1
      ? "/assets/main_page/alarm.svg"
      : undefined;

  return { label, imagePath };
}
