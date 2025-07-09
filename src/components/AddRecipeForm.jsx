import { useState } from 'react'
import '../styles/AddRecipeForm.css'

function AddRecipeForm({ onAdd, onClose }) {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    difficulty: 'Easy',
    time: '',
    servings: '',
    image: '',
    ingredients: [''],
    instructions: [''],
    tags: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const recipe = {
      ...formData,
      servings: parseInt(formData.servings),
      ingredients: formData.ingredients.filter(ing => ing.trim()),
      instructions: formData.instructions.filter(inst => inst.trim()),
      tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag)
    }
    
    onAdd(recipe)
  }

  const handleIngredientChange = (index, value) => {
    const newIngredients = [...formData.ingredients]
    newIngredients[index] = value
    setFormData({ ...formData, ingredients: newIngredients })
  }

  const addIngredient = () => {
    setFormData({ ...formData, ingredients: [...formData.ingredients, ''] })
  }

  const removeIngredient = (index) => {
    const newIngredients = formData.ingredients.filter((_, i) => i !== index)
    setFormData({ ...formData, ingredients: newIngredients })
  }

  const handleInstructionChange = (index, value) => {
    const newInstructions = [...formData.instructions]
    newInstructions[index] = value
    setFormData({ ...formData, instructions: newInstructions })
  }

  const addInstruction = () => {
    setFormData({ ...formData, instructions: [...formData.instructions, ''] })
  }

  const removeInstruction = (index) => {
    const newInstructions = formData.instructions.filter((_, i) => i !== index)
    setFormData({ ...formData, instructions: newInstructions })
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content add-recipe-modal" onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>
        
        <h2><i className="fas fa-plus"></i> Add New Recipe</h2>
        
        <form onSubmit={handleSubmit} className="add-recipe-form">
          <div className="form-row">
            <div className="form-group">
              <label>Recipe Title</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required
              />
            </div>
            
            <div className="form-group">
              <label>Category</label>
              <input
                type="text"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Difficulty</label>
              <select
                value={formData.difficulty}
                onChange={(e) => setFormData({ ...formData, difficulty: e.target.value })}
              >
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </div>
            
            <div className="form-group">
              <label>Cooking Time</label>
              <input
                type="text"
                placeholder="e.g., 30 mins"
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                required
              />
            </div>
            
            <div className="form-group">
              <label>Servings</label>
              <input
                type="number"
                min="1"
                value={formData.servings}
                onChange={(e) => setFormData({ ...formData, servings: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Image URL</label>
            <input
              type="url"
              placeholder="https://example.com/image.jpg"
              value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label>Ingredients</label>
            {formData.ingredients.map((ingredient, index) => (
              <div key={index} className="ingredient-input">
                <input
                  type="text"
                  value={ingredient}
                  onChange={(e) => handleIngredientChange(index, e.target.value)}
                  placeholder={`Ingredient ${index + 1}`}
                />
                {formData.ingredients.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeIngredient(index)}
                    className="remove-btn"
                  >
                    <i className="fas fa-minus"></i>
                  </button>
                )}
              </div>
            ))}
            <button type="button" onClick={addIngredient} className="add-btn">
              <i className="fas fa-plus"></i> Add Ingredient
            </button>
          </div>

          <div className="form-group">
            <label>Instructions</label>
            {formData.instructions.map((instruction, index) => (
              <div key={index} className="instruction-input">
                <textarea
                  value={instruction}
                  onChange={(e) => handleInstructionChange(index, e.target.value)}
                  placeholder={`Step ${index + 1}`}
                  rows="2"
                />
                {formData.instructions.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeInstruction(index)}
                    className="remove-btn"
                  >
                    <i className="fas fa-minus"></i>
                  </button>
                )}
              </div>
            ))}
            <button type="button" onClick={addInstruction} className="add-btn">
              <i className="fas fa-plus"></i> Add Step
            </button>
          </div>

          <div className="form-group">
            <label>Tags (comma-separated)</label>
            <input
              type="text"
              placeholder="e.g., italian, pasta, quick"
              value={formData.tags}
              onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
            />
          </div>

          <div className="form-actions">
            <button type="button" onClick={onClose} className="cancel-btn">
              Cancel
            </button>
            <button type="submit" className="submit-btn">
              <i className="fas fa-save"></i> Save Recipe
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddRecipeForm