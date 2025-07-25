
import '../styles/SearchBar.css';

const SearchBar = ({ search, setSearch }) => (
    <input
        type="text"
        placeholder="Search by name..."
        className="search-bar"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
    />
);

export default SearchBar;
