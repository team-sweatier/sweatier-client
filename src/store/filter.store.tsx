import day from "@/utils/day";
import { Dayjs } from "dayjs";
import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

interface FilterState {
  region: string;
  sports: string;
  date: Dayjs;
  setRegion: (region: string) => void;
  setSports: (sports: string) => void;
  setDate: (date: Dayjs) => void;
}

const useFilterStore = create<FilterState>(
  (set) => (
    subscribeWithSelector(() => ({ region: true, sports: true, date: true })),
    {
      region: "",
      sports: "농구",
      date: day().startOf("day"),
      setRegion: (region) => set({ region }),
      setSports: (sports) => set({ sports }),
      setDate: (date) => set({ date }),
    }
  )
);

export default useFilterStore;
