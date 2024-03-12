import { create } from "zustand";

interface AuthState {
  isLoggedIn: boolean;
  logIn: () => void;
  logOut: () => void;
  isAuthInitialized: boolean;
  setIsAuthInitialized: (isInitialized: boolean) => void;
}

const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false,
  logIn: () => set({ isLoggedIn: true }),
  logOut: () => set({ isLoggedIn: false }),
  isAuthInitialized: false,
  setIsAuthInitialized: (isInitialized) =>
    set(() => ({ isAuthInitialized: isInitialized })),
}));

export default useAuthStore;
