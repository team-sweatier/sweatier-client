export default function translateMatchAvailable(match: any) {
  const { applicants, capability, participating } = match;
  const ratio = applicants / capability; // 비율
  const label = ratio < 0.8 ? "신청 가능" : ratio === 1 ? "마감" : "마감 임박";

  return participating ? "신청 완료" : label;
}
