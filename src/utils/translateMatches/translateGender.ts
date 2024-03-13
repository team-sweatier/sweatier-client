export default function translateGender(genderId: "both" | "male" | "female") {
  switch (genderId) {
    case "both":
      return "남녀 모두";
    case "female":
      return "여성";
    case "male":
      return "남성";
  }
}
