"use client";

import useQueryGetMyTiers from "@/react-query/queries/useQuery.getTiers";
import { PropsWithChildren, createContext, useContext } from "react";

export type Tiers = Record<string, string>;

const TiersContext = createContext<Tiers | null>(null);

export const useTiers = () => useContext(TiersContext);

export function TiersProvider({ children }: PropsWithChildren) {
  const { data: tiers } = useQueryGetMyTiers();
  console.log(tiers);

  return (
    <TiersContext.Provider value={tiers || null}>
      {children}
    </TiersContext.Provider>
  );
}
