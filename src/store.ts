import { create } from "zustand";

type FavPoetsStore = {
  favPoets: object;
  addFavPoet: (newPoet: object) => void;
};

export const useFavPoetsStore = create<FavPoetsStore>((set) => ({
  favPoets: {},
  addFavPoet: (newPoet: object) =>
    set((state) => ({ favPoets: { ...state.favPoets, newPoet } })),
}));
