import { Profile } from "@/types/Profile.type";
import { create } from "zustand";

interface ProfileState {
  profile: Profile["profile"] | null;
  setProfile: (profile: Profile["profile"] | null) => void;
}

const useProfileStore = create<ProfileState>((set) => ({
  profile: null,
  setProfile: (profile) => set({ profile }),
}));

export default useProfileStore;
