"use client";

import useQueryGetMyTiers from "@/react-query/queries/useQuery.getTiers";
import { PropsWithChildren, createContext, useContext } from "react";

export type Tier = {
  value: string;
  sportType: {
    name: string;
  };
};

const TiersContext = createContext<Tier[] | null>(null);

export const useTiers = () => useContext(TiersContext);

export function TiersProvider({ children }: PropsWithChildren) {
  const { data: tiers } = useQueryGetMyTiers();

  return (
    <TiersContext.Provider value={tiers || null}>
      {children}
    </TiersContext.Provider>
  );
}
