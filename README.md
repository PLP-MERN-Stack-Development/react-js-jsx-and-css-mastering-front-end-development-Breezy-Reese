# 🎨 React Task Manager - Mastering Front-End Development

A modern, responsive React application built with JSX and Tailwind CSS, demonstrating component architecture, state management, hooks usage, and API integration. This project serves as a comprehensive task manager with features like task CRUD operations, API data fetching, theme switching, and more.

## 🚀 Features

- **Task Management**: Add, complete, delete, and filter tasks (All, Active, Completed)
- **API Integration**: Fetch and display data from JSONPlaceholder API with Latin-to-English translation
- **Theme Switching**: Toggle between light and dark modes with persistent storage
- **Responsive Design**: Mobile-first design using Tailwind CSS
- **Routing**: Client-side routing with React Router for multiple pages
- **Local Storage**: Persist tasks and theme preferences using custom hooks
- **Reusable Components**: Modular UI components (Button, Card, Navbar, Footer)
- **TypeScript Support**: Type-safe development with TypeScript
- **ESLint Configuration**: Code quality and consistency

## 🛠️ Tech Stack

- **Frontend Framework**: React 19 with JSX
- **Build Tool**: Vite (with Rolldown)
- **Styling**: Tailwind CSS 4.x
- **Routing**: React Router DOM 7.x
- **Type Checking**: TypeScript
- **Linting**: ESLint with React-specific rules
- **State Management**: React Hooks (useState, useEffect, useContext)
- **API**: JSONPlaceholder (REST API)
- **Icons**: Emoji-based theme toggle

## 📦 Installation

1. **Prerequisites**: Ensure you have Node.js (v18 or higher) installed.

2. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd react-task-project
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

5. **Open your browser** and navigate to `http://localhost:5173` (or the port shown in the terminal).

## 📖 Usage

- **Home Page**: Overview of the application with feature cards
- **Tasks Page**: Manage your daily tasks with add, complete, delete, and filter functionality
- **API Data Page**: Browse and search through translated API posts
- **Theme Toggle**: Click the sun/moon icon in the navbar to switch themes

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Button.jsx          # Reusable button component with variants
│   ├── Card.jsx            # Card component for content display
│   ├── Navbar.jsx          # Navigation bar with routing and theme toggle
│   ├── layout/
│   │   └── Layout.jsx      # Main layout wrapper
│   ├── pages/
│   │   ├── Home.jsx        # Home page component
│   │   ├── Tasks.jsx       # Task management page
│   │   ├── ApiData.jsx     # API data display page
│   │   └── Footer.jsx      # Footer component
│   └── hooks/
│       └── useLocalStorage.js # Custom hook for local storage
├── context/
│   └── ThemeContext.jsx    # Theme provider for dark/light mode
├── App.jsx                 # Main app component with routing
├── main.jsx                # App entry point
└── index.css               # Global styles with Tailwind directives
```

## 📜 Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run lint` - Run ESLint for code quality checks
- `npm run preview` - Preview the production build locally

## 🔧 Configuration

### Tailwind CSS
Tailwind is configured in `tailwind.config.js` with custom theme extensions if needed.

### ESLint
ESLint is set up with React-specific rules. For production applications, consider enabling type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      tseslint.configs.recommendedTypeChecked,
      tseslint.configs.strictTypeChecked,
      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])
```

You can also add ESLint plugins for React:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      reactX.configs['recommended-typescript'],
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])
```

## 🚀 Deployment

Deploy to platforms like Vercel, Netlify, or GitHub Pages:

1. Build the project: `npm run build`
2. Upload the `dist` folder to your hosting platform
3. Configure the platform to serve `index.html` for all routes (SPA routing)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a pull request

## 📄 License

This project is part of a learning assignment and is not licensed for commercial use.

## 📚 React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

---

**Week 3 Assignment**: React.js, JSX, and Tailwind CSS – Mastering Front-End Development
