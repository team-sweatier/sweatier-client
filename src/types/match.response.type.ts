export type MatchResonseType = {
  // id: string;
  // hostId: string;
  sport: string;
  title: string;
  content: string;
  applicants: number;
  capability: number;
  gender: "both" | "male" | "female";
  keyword: string;
  address: string;
  latitude: number;
  longitude: number;
  matchDay: Date;
  // createdAt: Date;
  // updatedAt: Date | null;
};

interface UserProfile {
  // 실제 userProfile에 대한 더 자세한 타입 정의가 필요할 수 있습니다.
  // 예제에서는 [Object]로 표시되어 있어 구체적인 내용은 명시되지 않았습니다.
}

interface Participant {
  id: string;
  nickName: string;
}

interface MatchResponseType {
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
  matchDay: string;
  createdAt: string;
  updatedAt: string;
  participants: Array<{ id: string; userProfile: UserProfile }>;
  tier: {
    value: "beginner" | "amateur" | "pro" | "semi-pro" | "master" | string;
  };
  sportsType: {
    name: "basketball" | "baseball" | "tennis" | "soccer" | "bedminton";
  };
  participate: Participant[];
  hostNickname: string;
  hostOneLiner: string;
  hostBankName: string;
  hostAccountNumber: string;
  applicants: number;
  tierType: "beginner" | "amateur" | "pro" | "semi-pro" | "master" | string;
  sportType: "basketball" | "baseball" | "tennis" | "soccer" | "bedminton";
  participating: boolean;
}
