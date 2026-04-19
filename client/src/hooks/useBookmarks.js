import { useState } from 'react';

const STORAGE_KEY = 'veggie-bookmarks';

function getStored() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

export function useBookmarks() {
  const [bookmarks, setBookmarks] = useState(getStored);

  function toggleBookmark(id) {
    setBookmarks(prev => {
      const next = prev.includes(id) ? prev.filter(b => b !== id) : [...prev, id];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }

  function isBookmarked(id) {
    return bookmarks.includes(id);
  }

  return { bookmarks, toggleBookmark, isBookmarked };
}
