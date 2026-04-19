import { useState, useEffect } from 'react';
import RecipeCard from '../components/RecipeCard';
import { useBookmarks } from '../hooks/useBookmarks';

export default function Bookmarks() {
  const [recipes, setRecipes] = useState([]);
  const { bookmarks, isBookmarked, toggleBookmark } = useBookmarks();

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL || '/api/recipes')
      .then(r => r.json())
      .then(setRecipes)
      .catch(() => setRecipes([]));
  }, []);

  const saved = recipes.filter(r => bookmarks.includes(r.id));

  return (
    <main className="page">
      <h2 className="page-title">Saved Recipes</h2>
      {saved.length === 0 ? (
        <p className="empty-state">No bookmarks yet. Heart a recipe to save it here.</p>
      ) : (
        <div className="recipe-grid">
          {saved.map(recipe => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              bookmarked={isBookmarked(recipe.id)}
              onToggleBookmark={() => toggleBookmark(recipe.id)}
            />
          ))}
        </div>
      )}
    </main>
  );
}
