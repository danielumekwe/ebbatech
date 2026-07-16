"use client";

import React, { createContext, useContext, useSyncExternalStore } from "react";

interface CompareContextType {
  compareSlugs: string[];
  addToCompare: (slug: string) => void;
  removeFromCompare: (slug: string) => void;
  clearCompare: () => void;
  isInCompare: (slug: string) => boolean;
}

const CompareContext = createContext<CompareContextType | undefined>(undefined);

const STORAGE_KEY = "ebbatech_compare";
const EMPTY: string[] = [];
const listeners = new Set<() => void>();
let cache: string[] | null = null;

function readFromStorage(): string[] {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    const parsed = saved ? JSON.parse(saved) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function getSnapshot(): string[] {
  if (cache === null) {
    cache = readFromStorage();
  }
  return cache;
}

function getServerSnapshot(): string[] {
  return EMPTY;
}

function subscribe(onStoreChange: () => void) {
  listeners.add(onStoreChange);
  return () => listeners.delete(onStoreChange);
}

function setSlugs(slugs: string[]) {
  cache = slugs;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(slugs));
  listeners.forEach((listener) => listener());
}

export function CompareProvider({ children }: { children: React.ReactNode }) {
  const compareSlugs = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const addToCompare = (slug: string) => {
    const current = getSnapshot();
    if (current.includes(slug)) return;
    if (current.length >= 3) {
      alert("You can compare a maximum of 3 products at a time.");
      return;
    }
    setSlugs([...current, slug]);
  };

  const removeFromCompare = (slug: string) => {
    setSlugs(getSnapshot().filter((s) => s !== slug));
  };

  const clearCompare = () => {
    setSlugs([]);
  };

  const isInCompare = (slug: string) => {
    return compareSlugs.includes(slug);
  };

  return (
    <CompareContext.Provider
      value={{
        compareSlugs,
        addToCompare,
        removeFromCompare,
        clearCompare,
        isInCompare
      }}
    >
      {children}
    </CompareContext.Provider>
  );
}

export function useCompare() {
  const context = useContext(CompareContext);
  if (context === undefined) {
    throw new Error("useCompare must be used within a CompareProvider");
  }
  return context;
}
