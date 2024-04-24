import { create } from "zustand";

interface ISideBarStore {
  isOpen: boolean;
  toggleSideBar: VoidFunction;
}

const sideBarStore = create<ISideBarStore>((set) => ({
  isOpen: false,
  toggleSideBar: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export default sideBarStore;
