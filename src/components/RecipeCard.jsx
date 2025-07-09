import '../styles/RecipeCard.css'

function RecipeCard({ recipe, onClick }) {
  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return '#4CAF50'
      case 'Medium': return '#FF9800'
      case 'Hard': return '#F44336'
      default: return '#666'
    }
  }

  return (
    <div className="recipe-card" onClick={onClick}>
      <div className="recipe-image">
        <img src={recipe.image} alt={recipe.title} />
        <div className="recipe-overlay">
          <span className="recipe-category">{recipe.category}</span>
        </div>
      </div>
      
      <div className="recipe-content">
        <h3 className="recipe-title">{recipe.title}</h3>
        
        <div className="recipe-meta">
          <span className="recipe-time">
            <i className="fas fa-clock"></i> {recipe.time}
          </span>
          <span className="recipe-servings">
            <i className="fas fa-users"></i> {recipe.servings}
          </span>
          <span 
            className="recipe-difficulty"
            style={{ color: getDifficultyColor(recipe.difficulty) }}
          >
            <i className="fas fa-signal"></i> {recipe.difficulty}
          </span>
        </div>

        <div className="recipe-rating">
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <i 
                key={i} 
                className={`fas fa-star ${i < Math.floor(recipe.rating) ? 'filled' : ''}`}
              ></i>
            ))}
          </div>
          <span className="rating-text">{recipe.rating}</span>
        </div>

        <div className="recipe-tags">
          {recipe.tags.slice(0, 3).map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default RecipeCard