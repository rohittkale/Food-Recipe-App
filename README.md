# 🍳 Recipe Master – Food Recipe Management App 

A modern, responsive recipe management web application built with React 18 and Vite. Discover, organize, and manage your favorite recipes with an intuitive interface and powerful search capabilities.

## 🚀 Features

### Core Functionality
- **Recipe Management**: View, search, filter, and add custom recipes
- **Advanced Search**: Search by recipe title, ingredients, or tags
- **Multi-Filter System**: Filter recipes by category and difficulty level
- **Recipe Details**: View detailed instructions, ingredients, and cooking information
- **Add Custom Recipes**: Create and save your own recipes with ingredients and instructions
- **Rating System**: View recipe ratings and difficulty levels

### User Experience
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Glassmorphism effects with smooth animations
- **Interactive Elements**: Hover effects, modals, and micro-interactions
- **Real-time Updates**: Dynamic filtering and search results
- **Clean Interface**: Intuitive navigation and user-friendly design

## 🛠️ Tech Stack

- **Frontend**: React 18, JavaScript ES6+
- **Build Tool**: Vite
- **Styling**: CSS3 with modern features (Grid, Flexbox, Animations)
- **Icons**: Font Awesome 6
- **Fonts**: Google Fonts (Poppins)

## 📁 Project Structure

```
recipe-app/
├── index.html                 # Main HTML file (root level)
├── package.json              # Dependencies and scripts
├── vite.config.js            # Vite configuration
├── src/
│   ├── main.jsx              # Application entry point
│   ├── App.jsx               # Main application component
│   ├── components/           # Reusable React components
│   │   ├── Header.jsx
│   │   ├── SearchBar.jsx
│   │   ├── FilterBar.jsx
│   │   ├── RecipeCard.jsx
│   │   ├── RecipeDetails.jsx
│   │   └── AddRecipeForm.jsx
│   ├── styles/               # Component-specific CSS files
│   │   ├── App.css
│   │   ├── Header.css
│   │   ├── SearchBar.css
│   │   ├── FilterBar.css
│   │   ├── RecipeCard.css
│   │   ├── RecipeDetails.css
│   │   └── AddRecipeForm.css
│   └── data/
│       └── recipes.js        # Sample recipe data
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14.0.0 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/recipe-master.git
   cd recipe-master
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to http://localhost:5173 to view the application

### Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📱 Screenshots

### Home Page
![Home Page](https://github.com/rohittkale/Food-Recipe-App/blob/ab0e44b8e96418de147924b259654e7cce11bfa5/public/Home.png)

### Recipe Details
![Add New Recipe](https://github.com/rohittkale/Food-Recipe-App/blob/ab0e44b8e96418de147924b259654e7cce11bfa5/public/Add_New_Recipe.png)
## 🎯 Usage

### Searching Recipes
- Use the search bar to find recipes by title, ingredients, or tags
- Search is case-insensitive and updates results in real-time

### Filtering Recipes
- Filter by **Category**: All, Italian, Indian, Salad, Dessert, Mexican, Greek
- Filter by **Difficulty**: All, Easy, Medium, Hard
- Combine multiple filters for precise results

### Adding New Recipes
1. Click the "Add Recipe" button
2. Fill in the recipe details:
   - Title, category, difficulty, cooking time, servings
   - Add ingredients (one per field)
   - Add step-by-step instructions
   - Optional: Add image URL and tags
3. Click "Save Recipe" to add it to your collection

### Viewing Recipe Details
- Click any recipe card to view detailed information
- See complete ingredient list and cooking instructions
- View recipe metadata (time, servings, difficulty, rating)

## 🔧 Customization

### Adding New Categories
Edit `src/data/recipes.js` and add recipes with new category values. The filter will automatically update.

### Modifying Styles
Each component has its own CSS file in `src/styles/`. Modify these files to customize the appearance.

### Adding New Features
The component-based architecture makes it easy to add new features:
- Create new components in `src/components/`
- Add corresponding CSS files in `src/styles/`
- Import and use in `App.jsx`

## 🌟 Key Features Implemented

### Frontend Architecture
- **Component-based design** with reusable components
- **State management** using React hooks (useState, useEffect)
- **Props drilling** for data flow between components
- **Event handling** for user interactions

### Modern React Patterns
- **Functional components** with hooks
- **Conditional rendering** for dynamic content
- **List rendering** with proper key props
- **Form handling** with controlled components

### CSS Techniques
- **CSS Grid** and **Flexbox** for responsive layouts
- **CSS animations** and **transitions**
- **Glassmorphism effects** with backdrop-filter
- **Gradient backgrounds** and **box shadows**
- **Responsive design** with media queries

## 🐛 Known Issues

- Recipe images are currently from external URLs (Unsplash)
- No persistent storage (data resets on page refresh)
- Limited to client-side functionality

## 🚀 Future Enhancements

- [ ] Add local storage for persistent data
- [ ] Implement user authentication
- [ ] Add recipe sharing functionality
- [ ] Integrate with recipe APIs
- [ ] Add shopping list generation
- [ ] Implement recipe import/export
- [ ] Add nutrition information
- [ ] Include cooking timers

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- Email: your.email@example.com

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - The web framework used
- [Vite](https://vitejs.dev/) - Build tool and development server
- [Font Awesome](https://fontawesome.com/) - Icons
- [Google Fonts](https://fonts.google.com/) - Typography
- [Unsplash](https://unsplash.com/) - Recipe images

## 📊 Project Stats

- **Lines of Code**: ~1,500+
- **Components**: 7 React components
- **CSS Files**: 7 styled components
- **Features**: 10+ core features
- **Responsive**: Mobile, Tablet, Desktop
- **Performance**: Fast loading with Vite

---

⭐ **Star this repository if you found it helpful!**
