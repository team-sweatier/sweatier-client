type TierData = {
  id: string;
  value: string;
  sportType: {
    id: number;
    name: string;
  };
};

type TierOfTiers = {
  value: string;
  description: string;
};

export type TiersData = TierOfTiers[];

type UserTierData = {
  id: string;
  value: string;
  sportType: {
    id: string;
    name: string;
  };
};

export type GetUserTiersData = {
  tiers: UserTierData[];
};
