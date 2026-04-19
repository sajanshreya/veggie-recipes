const MEAL_TYPES = ['all', 'breakfast', 'lunch', 'dinner', 'snack'];

export default function FilterBar({ active, onChange }) {
  return (
    <div className="filter-bar">
      {MEAL_TYPES.map(type => (
        <button
          key={type}
          className={`filter-btn ${active === type ? 'active' : ''}`}
          onClick={() => onChange(type)}
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </button>
      ))}
    </div>
  );
}
