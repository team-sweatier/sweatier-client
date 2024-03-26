export default function getMatchAvailableInfo(
  applicants: number,
  capability: number,
  hasApplied: boolean,
  isSameTier: boolean | null,
  isSameGender: boolean | null
) {
  const ratio = applicants / capability;

  if (isSameTier === null || isSameGender === null) {
    return "";
  }

  const label =
    isSameTier && isSameGender
      ? ratio < 0.8
        ? "신청 가능"
        : ratio === 1
        ? "마감"
        : "마감 임박"
      : "신청 불가";

  return hasApplied ? "신청 완료" : label;
}
