import { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import FilterBar from '../components/FilterBar';
import RecipeCard from '../components/RecipeCard';
import { useBookmarks } from '../hooks/useBookmarks';

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [mealFilter, setMealFilter] = useState('all');
  const { isBookmarked, toggleBookmark } = useBookmarks();

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL || '/api/recipes')
      .then(r => r.json())
      .then(setRecipes)
      .catch(() => setRecipes([]));
  }, []);

  const filtered = recipes.filter(r => {
    const matchesMeal = mealFilter === 'all' || r.mealType === mealFilter;
    const q = search.toLowerCase().trim();
    const matchesSearch = q === '' ||
      r.name.toLowerCase().includes(q) ||
      r.description.toLowerCase().includes(q) ||
      r.ingredients.some(ing => ing.toLowerCase().includes(q));
    return matchesMeal && matchesSearch;
  });

  return (
    <main className="page">
      <section className="controls">
        <SearchBar value={search} onChange={setSearch} />
        <FilterBar active={mealFilter} onChange={setMealFilter} />
      </section>

      {filtered.length === 0 ? (
        <p className="empty-state">No recipes found. Try a different ingredient or filter.</p>
      ) : (
        <div className="recipe-grid">
          {filtered.map(recipe => (
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
