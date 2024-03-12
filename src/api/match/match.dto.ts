export type MatchDto = {
  title: string;
  content: string;
  gender: "male" | "female" | "both";
  capability: number;
  sportsTypeName: string;
  latitude: number;
  longitude: number;
  placeName: string;
  region: string;
  address: string;
  matchDay: Date;
};
