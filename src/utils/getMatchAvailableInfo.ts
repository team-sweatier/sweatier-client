import { Match } from "@/types/Match.type";

export default function getMatchAvailableInfo(match: Match) {
  const applicants = match.applicants;
  const capability = match.capability;
  let className;
  let label: string;
  let imagePath: string | undefined;

  if (applicants / capability < 0.8) {
    label = "신청 가능";
    imagePath = "/assets/event_available.svg";
    className = "border text-primary-100 border-primary-100";
  } else if (applicants / capability === 1) {
    label = "마감";
    className = "bg-[#E7E7E7] text-[#9BA2A8]";
  } else {
    label = "마감 임박";
    imagePath = "/assets/alarm.svg";
    className = "border border-warning text-warning";
  }

  return { label, imagePath, className };
}
