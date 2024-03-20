export default function translateMatchAvailable(
  applicants: number,
  capability: number,
  hasApplied: boolean
) {
  const ratio = applicants / capability; // 비율
  const label = ratio < 0.8 ? "신청 가능" : ratio === 1 ? "마감" : "마감 임박";

  return hasApplied ? "신청 완료" : label;
}
