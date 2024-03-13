export default function translateTier(tier: string) {
  switch (tier) {
    case "beginner":
      return "비기너";
    case "amateur":
      return "아마추어";
    case "semi pro":
      return "세미프로";
    case "pro":
      return "프로";
    case "master":
      return "마스터";
    default:
      return "마스터";
  }
}
