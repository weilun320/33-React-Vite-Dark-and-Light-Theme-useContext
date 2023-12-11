import { useState } from 'react';
import ThemeContext from './ThemeContext';
import Form from './components/Form';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [theme, setTheme] = useState("light");
  const [title, setTitle] = useState("Welcome");

  return (
    <ThemeContext.Provider value={{ theme, setTheme, title, setTitle }}>
      <Form />
      <label>
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={(e) => {
            setTheme(e.target.checked ? "dark" : "light");
          }}
        />
        Use dark mode
      </label>
      <Footer />
    </ThemeContext.Provider>
  );
}

export default App
