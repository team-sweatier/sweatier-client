interface SportsType {
  name: string;
  rules: string;
}

interface Match {
  id: string;
  hostId: string;
  sportsTypeId: number;
  tierId: string;
  title: string;
  content: string;
  gender: string;
  capability: number;
  latitude: number;
  longitude: number;
  placeName: string;
  region: string;
  address: string;
  matchDay: string;
  createdAt: string;
  updatedAt: string;
  participants: any[];
  tier: any;
  sportsType: SportsType;
  host: any;
  hostNickname: string;
  hostOneLiner: string;
  hostBankName: string;
  hostAccountNumber: string;
  applicants: number;
  tierType: string;
  sportType: string | string[];
  participating: boolean;
  hostProfileImgSrc: string;
}
