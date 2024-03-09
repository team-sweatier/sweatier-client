import { create } from "zustand";

interface ModalState {
  modalElement: React.ReactElement | null;
  isOpened: boolean;
  open: (modalElement: React.ReactElement) => void;
  close: () => void;
}

const useModalStore = create<ModalState>((set) => ({
  modalElement: null,
  isOpened: false,
  open: (modalElement) => set({ modalElement, isOpened: true }),
  close: () => set({ modalElement: null, isOpened: false }),
}));

export default useModalStore;
