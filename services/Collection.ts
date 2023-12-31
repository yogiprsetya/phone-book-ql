'use client';

import { PREFIX_WEB_STORAGE } from 'config/constant';

const WEB_STORAGE_NAME = `${PREFIX_WEB_STORAGE}collection`;

export const collection = (() => {
  let localCollection: number[] = [];

  if (typeof window !== 'undefined') {
    const existing = localStorage.getItem(WEB_STORAGE_NAME);
    if (existing) {
      localCollection = JSON.parse(existing);
    }
  }

  const getAll = (): number[] => {
    return localCollection;
  };

  const add = (id: number) => {
    localCollection.push(id);
    localStorage.setItem(WEB_STORAGE_NAME, JSON.stringify(localCollection));
  };

  const remove = (id: number) => {
    const indexToDelete = localCollection.indexOf(id);
    localCollection.splice(indexToDelete, 1);
    localStorage.setItem(WEB_STORAGE_NAME, JSON.stringify(localCollection));
  };

  return { add, getAll, remove };
})();
