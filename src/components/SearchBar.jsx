import '../styles/SearchBar.css'

function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="search-bar">
      <div className="search-input-container">
        <i className="fas fa-search search-icon"></i>
        <input
          type="text"
          placeholder="Search recipes, ingredients, or tags..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="search-input"
        />
      </div>
    </div>
  )
}

export default SearchBar