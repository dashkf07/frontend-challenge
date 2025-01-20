import { FavoriteIcon } from "@/shared/ui";
import styles from "./add-to-favorites.module.scss";
import { useFavoriteStore } from "@/shared/store";

interface Cat {
    id: string;
    url: string;
    width: number;
    height: number;
    breeds: any[]; 
}

interface FavoriteToggleProps {
  cat: Cat;
}

export const AddToFavorites: React.FC<FavoriteToggleProps> = ({ cat }) => {
  const { favoriteCats, addFavorite, removeFavorite } = useFavoriteStore();

  const isFavorite = favoriteCats.some((favorite) => favorite.id === cat.id);

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(cat.id);
    } else {
      addFavorite(cat);
    }
  };

  return (
    <button
      className={styles.button}
      onClick={toggleFavorite}
    >
      <FavoriteIcon isFavorite={isFavorite}/>
    </button>
  );
};
