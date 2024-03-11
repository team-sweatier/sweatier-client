type TierData = {
  value: string;
  sportType: {
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
