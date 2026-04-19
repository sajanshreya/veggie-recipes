export default function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by name, ingredient or keyword..."
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
}
