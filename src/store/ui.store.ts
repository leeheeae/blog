import { create } from "zustand";

export interface IUiStore {
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

const useUiStore = create<IUiStore>((set) => ({
  isDarkMode: false,
  onToggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode }))
}));

export default useUiStore;
