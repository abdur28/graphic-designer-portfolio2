import { create } from 'zustand';

const useStore = create((set) => ({
  router: null,
  dom: null,
  setRouter: (router) => set({ router }),
  setDom: (dom) => set({ dom }),
}));

export default useStore;
