import React from "react";
import styles from "./cat.module.scss";
import Image from "next/image";
import type { Cat } from "@/shared/types";

export interface CatCardProps {
  cat: Cat;
  action?: React.ReactNode;
}

export const CatCard: React.FC<CatCardProps> = ({ cat, action }) => {
  return (
    <div className={styles.card}>
      <Image
        className={styles.image}
        src={cat.url}
        alt="Cat"
        width={225}
        height={225}
      />
      {action && <div className={styles.action}>{action}</div>}
    </div>
  );
};
