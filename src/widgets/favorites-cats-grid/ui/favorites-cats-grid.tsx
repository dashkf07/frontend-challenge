"use client"

import { useFavoriteStore } from "@/shared/store";
import { CatCard } from "@/entities/cat";
import { AddToFavorites } from "@/features/add-to-favorites";
import styles from "./favorites-cats-grid.module.scss";

export const FavoritesCatsGrid: React.FC = () => {
  const { favoriteCats } = useFavoriteStore();

  interface Cat {
    id: string;
    url: string;
    width: number;
    height: number;
    breeds: any[]; 
  }

  return (
    <div className={styles.grid}>
      {favoriteCats.length > 0 ? (
        favoriteCats.map((cat: Cat) => (
          <div key={cat.id} className={styles.cardContainer}>
            <CatCard
              cat={cat}
              action={<AddToFavorites cat={cat}/>}
            />
          </div>
        ))
      ) : (
        <p className={styles.noFavorites}>избранных котов нет :(</p>
      )}
    </div>
  );
};
