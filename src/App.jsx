import { useState, useEffect } from 'react'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import FilterBar from './components/FilterBar'
import RecipeCard from './components/RecipeCard'
import RecipeDetails from './components/RecipeDetails'
import AddRecipeForm from './components/AddRecipeForm'
import { recipes as initialRecipes } from './data/recipes'
import './styles/App.css'

function App() {
  const [recipes, setRecipes] = useState(initialRecipes)
  const [filteredRecipes, setFilteredRecipes] = useState(recipes)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedDifficulty, setSelectedDifficulty] = useState('All')
  const [selectedRecipe, setSelectedRecipe] = useState(null)
  const [showAddForm, setShowAddForm] = useState(false)

  // Filter recipes based on search and filters
  useEffect(() => {
    let filtered = recipes

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(recipe =>
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    }

    // Category filter
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(recipe => recipe.category === selectedCategory)
    }

    // Difficulty filter
    if (selectedDifficulty !== 'All') {
      filtered = filtered.filter(recipe => recipe.difficulty === selectedDifficulty)
    }

    setFilteredRecipes(filtered)
  }, [recipes, searchTerm, selectedCategory, selectedDifficulty])

  const handleAddRecipe = (newRecipe) => {
    const recipe = {
      ...newRecipe,
      id: Date.now(),
      rating: 0,
      tags: newRecipe.tags || []
    }
    setRecipes([...recipes, recipe])
    setShowAddForm(false)
  }

  const categories = ['All', ...new Set(recipes.map(recipe => recipe.category))]
  const difficulties = ['All', 'Easy', 'Medium', 'Hard']

  return (
    <div className="App">
      <Header />
      
      <main className="main-content">
        <div className="container">
          <div className="search-section">
            <SearchBar 
              searchTerm={searchTerm} 
              onSearchChange={setSearchTerm} 
            />
            <FilterBar
              categories={categories}
              difficulties={difficulties}
              selectedCategory={selectedCategory}
              selectedDifficulty={selectedDifficulty}
              onCategoryChange={setSelectedCategory}
              onDifficultyChange={setSelectedDifficulty}
            />
            <button 
              className="add-recipe-btn"
              onClick={() => setShowAddForm(true)}
            >
              <i className="fas fa-plus"></i> Add Recipe
            </button>
          </div>

          <div className="recipes-grid">
            {filteredRecipes.map(recipe => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                onClick={() => setSelectedRecipe(recipe)}
              />
            ))}
          </div>

          {filteredRecipes.length === 0 && (
            <div className="no-recipes">
              <i className="fas fa-search"></i>
              <h3>No recipes found</h3>
              <p>Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </main>

      {selectedRecipe && (
        <RecipeDetails
          recipe={selectedRecipe}
          onClose={() => setSelectedRecipe(null)}
        />
      )}

      {showAddForm && (
        <AddRecipeForm
          onAdd={handleAddRecipe}
          onClose={() => setShowAddForm(false)}
        />
      )}
    </div>
  )
}

export default App
