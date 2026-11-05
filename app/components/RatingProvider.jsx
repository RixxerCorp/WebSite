'use client';

import { createContext, useContext } from 'react';

const RatingContext = createContext(null);

export function RatingProvider({ rating, children }) {
  return <RatingContext.Provider value={rating}>{children}</RatingContext.Provider>;
}

export function useRating() {
  return useContext(RatingContext);
}
