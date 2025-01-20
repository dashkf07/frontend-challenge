import React from "react";
import styles from "./cat.module.scss";
import { Cat } from "../model";

export interface CatCardProps {
  cat: Cat;
  action?: React.ReactNode;
}

export const CatCard: React.FC<CatCardProps> = ({ cat, action }) => {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={cat.url} alt="Cat" />
      {action && <div className={styles.action}>{action}</div>}
    </div>
  );
};
