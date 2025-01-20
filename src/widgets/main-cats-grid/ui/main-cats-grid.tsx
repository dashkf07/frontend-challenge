"use client";

import React, { useState } from "react";
import { CatCard } from "@/entities/cat";
import styles from "./main-cats-grid.module.scss";
import { fetchCats } from "@/shared/api";
import { InfiniteScroll } from "@/shared/ui";
import { AddToFavorites } from "@/features/add-to-favorites";
import { Cat } from "@/shared/types";

export const MainCatsGrid = () => {
  const [cats, setCats] = useState<Cat[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadMoreCats = async () => {
    if (loading || !hasMore) return;
    setLoading(true);
    try {
      const newCats = await fetchCats(page, 10);
      if (newCats.length === 0) {
        setHasMore(false);
      } else {
        setCats((prev) => [...prev, ...newCats]);
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.error("Error while loading cats:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <InfiniteScroll
      onLoadMore={loadMoreCats}
      isLoading={loading}
      hasMore={hasMore}
    >
      <div className={styles.grid}>
        {cats.map((cat) => (
          <CatCard
            key={cat.id}
            cat={cat}
            action={<AddToFavorites cat={cat} />}
          />
        ))}
      </div>
      {loading && <p className={styles.loading}>...загружаем еще котиков...</p>}
      {!hasMore && <p className={styles.noMore}>больше котиков нет :(</p>}
    </InfiniteScroll>
  );
};
