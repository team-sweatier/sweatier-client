type TierData = {
  value: string;
  sportType: {
    name: string;
  };
};

export type GetUserTiersData = {
  tiers: TierData[];
};
