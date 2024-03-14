type TierData = {
  id: string;
  value: string;
  sportType: {
    id: number;
    name: string;
  };
};

export type GetUserTiersData = {
  tiers: TierData[];
};

type TierOfTiers = {
  value: string;
  description: string;
};

export type TiersData = TierOfTiers[];
