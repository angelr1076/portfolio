import { useState } from 'react';

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleTheme() {
    setDarkMode(prev => !prev);
    document.documentElement.classList.toggle('light');
  }
  
  return (
    <button onClick={toggleTheme}>
      Toggle Theme
    </button> 
  );
}

export default ThemeToggle;