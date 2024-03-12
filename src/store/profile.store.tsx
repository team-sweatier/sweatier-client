import { Profile } from "@/types/Profile.type";
import { create } from "zustand";

interface ProfileState {
  profile: Profile | null;
  setProfile: (profile: Profile | null) => void;
}

const useProfileStore = create<ProfileState>((set) => ({
  profile: null,
  setProfile: (profile) => set({ profile }),
}));

export default useProfileStore;
