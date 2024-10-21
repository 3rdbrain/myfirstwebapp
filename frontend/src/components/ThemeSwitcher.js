import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

export default function ThemeSwitcher({ theme, toggleTheme }) {
  return (
	<button
	  onClick={toggleTheme}
	  className="p-2 rounded-md text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
	  aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
	>
	  {theme === 'light' ? (
		<MoonIcon className="h-6 w-6" aria-hidden="true" />
	  ) : (
		<SunIcon className="h-6 w-6" aria-hidden="true" />
	  )}
	</button>
  );
}