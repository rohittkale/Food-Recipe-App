import '../styles/Header.css'

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <i className="fas fa-utensils"></i>
          <h1>Recipe Master</h1>
        </div>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#recipes">Recipes</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}

export default Header