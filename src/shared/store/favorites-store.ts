import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Cat } from "../types";

interface FavoriteStore {
  favoriteCats: Cat[];
  addFavorite: (cat: Cat) => void;
  removeFavorite: (id: string) => void;
}

export const useFavoriteStore = create<FavoriteStore>()(
  persist(
    (set) => ({
      favoriteCats: [],
      addFavorite: (cat) =>
        set((state) => ({
          favoriteCats: [...state.favoriteCats, cat],
        })),
      removeFavorite: (id) =>
        set((state) => ({
          favoriteCats: state.favoriteCats.filter((cat) => cat.id !== id),
        })),
    }),
    {
      name: "favorite-cats-storage",
    }
  )
);
