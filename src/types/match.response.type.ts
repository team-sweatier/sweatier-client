export type Match = {
  id: string;
  hostId: string;
  sportsTypeId: number;
  tierId: string;
  title: string;
  content: string;
  gender: "both" | "male" | "female";
  capability: number;
  latitude: number;
  longitude: number;
  placeName: string;
  region: string;
  address: string;
  matchDay: Date;
  createdAt: Date;
  updatedAt: Date | null;
  participants: [
    {
      id: string;
    }
  ];
  tier: string;
  sportsType: string;
  applicants: number;
};
export type MatchDetail = {
  id: string;
  hostId: string;
  sportsTypeId: number;
  tierId: string;
  title: string;
  content: string;
  gender: "both" | "male" | "female";
  capability: number;
  latitude: number;
  longitude: number;
  placeName: string;
  region: string;
  address: string;
  matchDay: Date;
  createdAt: Date;
  updatedAt: Date | null;
  participants: [
    {
      id: string;
      userProfile: {
        nickName: string;
      };
    }
  ];
  tier: {
    value: string;
  };
  sportsType: {
    name: string;
  };
  participate: [
    {
      id: string;
      nickName: string;
    }
  ];
  hostNickname: string;
  hostOneLiner: string;
  hostBankName: string;
  hostAccountNumber: string;
  applicants: number;
  tierType: string;
  sportType: string;
};
