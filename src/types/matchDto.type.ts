export type matchDto = {
  title: string;
  content: string;
  players: string;
  gender: string;
  date: string;
  time: string;
  place: string;
};

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
  matchDay: Date;
};
