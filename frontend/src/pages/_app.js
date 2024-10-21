import { useEffect } from 'react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
	// Apply the dark theme by default
	document.documentElement.classList.add('dark');
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;