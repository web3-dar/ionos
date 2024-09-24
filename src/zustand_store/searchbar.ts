import { create } from "zustand";

interface SearchStore {
  open: boolean;
  setOpen: () => void;
  toggleOpen: () => void;
}

const useSearch = create<SearchStore>((set) => ({
  open: false,
  setOpen: () => set(() => ({ open: true })),
  toggleOpen: () => set((state) => ({ open: !state.open })),
}));
export default useSearch;
