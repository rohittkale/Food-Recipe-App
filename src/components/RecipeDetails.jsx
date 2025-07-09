import '../styles/RecipeDetails.css'

function RecipeDetails({ recipe, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>
        
        <div className="recipe-details">
          <div className="recipe-header">
            <img src={recipe.image} alt={recipe.title} />
            <div className="recipe-info">
              <h2>{recipe.title}</h2>
              <div className="recipe-meta">
                <span><i className="fas fa-clock"></i> {recipe.time}</span>
                <span><i className="fas fa-users"></i> {recipe.servings} servings</span>
                <span><i className="fas fa-signal"></i> {recipe.difficulty}</span>
              </div>
              <div className="rating">
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <i 
                      key={i} 
                      className={`fas fa-star ${i < Math.floor(recipe.rating) ? 'filled' : ''}`}
                    ></i>
                  ))}
                </div>
                <span>{recipe.rating}</span>
              </div>
            </div>
          </div>

          <div className="recipe-content">
            <div className="ingredients-section">
              <h3><i className="fas fa-list"></i> Ingredients</h3>
              <ul>
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>

            <div className="instructions-section">
              <h3><i className="fas fa-clipboard-list"></i> Instructions</h3>
              <ol>
                {recipe.instructions.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecipeDetails