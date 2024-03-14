export type CreateMatchDto = {
  title: string;
  content: string;
  gender: "male" | "female" | "both";
  capability: number;
  sportsTypeName: "baseball" | "basketball" | "soccer" | "tennis" | "badminton";
  latitude: number;
  longitude: number;
  placeName: string;
  region: string;
  address: string;
  matchDay: string;
};
