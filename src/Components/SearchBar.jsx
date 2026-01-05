import { debounce } from "../utils/debounce";

export default function SearchBar({ onSearch }) {
  const handleSearch = debounce((e) => {
    onSearch(e.target.value);
  }, 500);

  return (
    <input
      type="text"
      placeholder="Search product..."
      onChange={handleSearch}
      className="input"
    />
  );
}
