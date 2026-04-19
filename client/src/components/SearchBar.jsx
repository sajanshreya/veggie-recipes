export default function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by ingredient (e.g. spinach, avocado...)"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
}
