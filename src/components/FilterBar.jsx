import '../styles/FilterBar.css'

function FilterBar({
  categories,
  difficulties,
  selectedCategory,
  selectedDifficulty,
  onCategoryChange,
  onDifficultyChange
}) {
  return (
    <div className="filter-bar">
      <div className="filter-group">
        <label>Category:</label>
        <select
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
        >
          {categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label>Difficulty:</label>
        <select
          value={selectedDifficulty}
          onChange={(e) => onDifficultyChange(e.target.value)}
        >
          {difficulties.map(difficulty => (
            <option key={difficulty} value={difficulty}>
              {difficulty}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default FilterBar