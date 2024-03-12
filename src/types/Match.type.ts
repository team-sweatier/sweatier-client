export type Match = {
  id: string;
  hostId: string;
  sportsTypeId: string;
  tier: string;
  title: string;
  content: string;
  applicants: number;
  capability: number;
  gender: "both" | "male" | "female";
  address: string;
  matchDay: Date;
  matchTime: string;
  createdAt: Date;
  updatedAt: Date | null;
};
