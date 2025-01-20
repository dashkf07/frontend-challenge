"use client"

import React, { useEffect, useRef, ReactNode } from "react";
import styles from "./infinite-scroll.module.scss";

interface InfiniteScrollProps {
  onLoadMore: () => void;
  isLoading: boolean; 
  hasMore?: boolean;
  children: ReactNode; 
}

export const InfiniteScroll: React.FC<InfiniteScrollProps> = ({
  onLoadMore,
  isLoading,
  hasMore = true,
  children,
}) => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const triggerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isLoading || !hasMore) return;

    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          onLoadMore();
        }
      });
    }

    const observer = observerRef.current;
    if (triggerRef.current) {
      observer.observe(triggerRef.current);
    }

    return () => {
      if (triggerRef.current) {
        observer.unobserve(triggerRef.current);
      }
    };
  }, [isLoading, hasMore, onLoadMore]);

  return (
    <div className={styles.wrapper}>
      {children}
      {!isLoading && hasMore && <div ref={triggerRef} className={styles.trigger} />}
    </div>
  );
};
