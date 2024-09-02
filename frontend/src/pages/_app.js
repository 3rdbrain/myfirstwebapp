import { useEffect, useState } from 'react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
	// Check for saved theme in local storage
	const savedTheme = localStorage.getItem('theme');
	if (savedTheme) {
	  setTheme(savedTheme);
	  document.documentElement.classList.add(savedTheme);
	} else {
	  // Default to light theme
	  document.documentElement.classList.add('light');
	}
  }, []);

  useEffect(() => {
	// Update the theme class on the document element
	document.documentElement.classList.remove(theme === 'light' ? 'dark' : 'light');
	document.documentElement.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
	const newTheme = theme === 'light' ? 'dark' : 'light';
	setTheme(newTheme);
	localStorage.setItem('theme', newTheme);
  };

  return (
	<Component {...pageProps} theme={theme} toggleTheme={toggleTheme} />
  );
}

export default MyApp;