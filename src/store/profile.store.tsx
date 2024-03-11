import { Profile } from "@/types/Profile.type";
import { create } from "zustand";

interface ProfileState {
  profile: Profile | null;
}

const useProfileStore = create<ProfileState>((set) => ({
  profile: null,
  setProfile: (profile: Profile) => set({ profile }),
}));

export default useProfileStore;
