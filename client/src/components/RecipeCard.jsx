import BookmarkButton from './BookmarkButton';

export default function RecipeCard({ recipe, bookmarked, onToggleBookmark }) {
  return (
    <div className="recipe-card">
      <div className="card-image-wrap">
        <img src={recipe.image} alt={recipe.name} loading="lazy" />
        <span className={`meal-badge badge-${recipe.mealType}`}>{recipe.mealType}</span>
        <BookmarkButton bookmarked={bookmarked} onClick={onToggleBookmark} />
      </div>
      <div className="card-body">
        <h3>{recipe.name}</h3>
        <p className="card-desc">{recipe.description}</p>
        <div className="card-meta">
          <span>⏱ {recipe.time}</span>
          <span>🍽 {recipe.servings} servings</span>
        </div>
        <div className="ingredients-list">
          <strong>Ingredients:</strong>
          <p>{recipe.ingredients.join(', ')}</p>
        </div>
      </div>
    </div>
  );
}
