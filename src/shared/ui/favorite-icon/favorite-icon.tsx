"use client";

import { useState } from "react";

interface FavoriteIconProps {
  isFavorite: boolean;
}

export const FavoriteIcon: React.FC<FavoriteIconProps> = ({ isFavorite }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="37"
      fill="none"
      viewBox="0 0 40 37"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isFavorite || hovered ? (
        <path
          fill="#F24E1E"
          d="m20 36.7-2.9-2.64C6.8 24.72 0 18.56 0 11 0 4.84 4.84 0 11 0c3.48 0 6.82 1.62 9 4.18C22.18 1.62 25.52 0 29 0c6.16 0 11 4.84 11 11 0 7.56-6.8 13.72-17.1 23.08z"
        ></path>
      ) : (
        <path
          fill="#F24E1E"
          d="M29 0c-3.48 0-6.82 1.62-9 4.18C17.82 1.62 14.48 0 11 0 4.84 0 0 4.84 0 11c0 7.56 6.8 13.72 17.1 23.08L20 36.7l2.9-2.64C33.2 24.72 40 18.56 40 11c0-6.16-4.84-11-11-11m-8.8 31.1-.2.2-.2-.2C10.28 22.48 4 16.78 4 11c0-4 3-7 7-7 3.08 0 6.08 1.98 7.14 4.72h3.74C22.92 5.98 25.92 4 29 4c4 0 7 3 7 7 0 5.78-6.28 11.48-15.8 20.1"
        ></path>
      )}
    </svg>
  );
};
