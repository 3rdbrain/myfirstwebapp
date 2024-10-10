import themeConfig from '../config/themeConfig';
import { useEffect } from 'react';

export default function Pricing() {
  useEffect(() => {
	if (themeConfig.theme === 'dark') {
	  document.documentElement.classList.add('dark');
	} else {
	  document.documentElement.classList.remove('dark');
	}
  }, []);

  return (
	<div id="pricing" className="bg-white dark:bg-gray-900">
	  <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 text-center">
		<h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
		  Pricing
		</h2>
		<p className="mt-4 text-lg leading-6 text-gray-500 dark:text-gray-300">
		  Choose the plan that best suits your needs.
		</p>
		<div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
		  <div className="card bg-white dark:bg-gray-800 shadow-lg">
			<div className="card-body">
			  <h3 className="card-title text-lg font-medium text-gray-900 dark:text-white">
				Basic Plan
			  </h3>
			  <p className="text-sm text-gray-500 dark:text-gray-300">
				$10/month
			  </p>
			  <ul className="mt-4 space-y-2">
				<li className="flex items-start">
				  <svg className="h-6 w-6 text-indigo-600 dark:text-indigo-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
				  </svg>
				  <p className="ml-3 text-sm text-gray-700 dark:text-gray-300">
					Feature 1: Description of feature 1.
				  </p>
				</li>
				<li className="flex items-start">
				  <svg className="h-6 w-6 text-indigo-600 dark:text-indigo-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
				  </svg>
				  <p className="ml-3 text-sm text-gray-700 dark:text-gray-300">
					Feature 2: Description of feature 2.
				  </p>
				</li>
			  </ul>
			</div>
		  </div>
		  <div className="card bg-white dark:bg-gray-800 shadow-lg">
			<div className="card-body">
			  <h3 className="card-title text-lg font-medium text-gray-900 dark:text-white">
				Standard Plan
			  </h3>
			  <p className="text-sm text-gray-500 dark:text-gray-300">
				$20/month
			  </p>
			  <ul className="mt-4 space-y-2">
				<li className="flex items-start">
				  <svg className="h-6 w-6 text-indigo-600 dark:text-indigo-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
				  </svg>
				  <p className="ml-3 text-sm text-gray-700 dark:text-gray-300">
					Feature 1: Description of feature 1.
				  </p>
				</li>
				<li className="flex items-start">
				  <svg className="h-6 w-6 text-indigo-600 dark:text-indigo-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
				  </svg>
				  <p className="ml-3 text-sm text-gray-700 dark:text-gray-300">
					Feature 2: Description of feature 2.
				  </p>
				</li>
				<li className="flex items-start">
				  <svg className="h-6 w-6 text-indigo-600 dark:text-indigo-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
				  </svg>
				  <p className="ml-3 text-sm text-gray-700 dark:text-gray-300">
					Feature 3: Description of feature 3.
				  </p>
				</li>
			  </ul>
			</div>
		  </div>
		  <div className="card bg-white dark:bg-gray-800 shadow-lg">
			<div className="card-body">
			  <h3 className="card-title text-lg font-medium text-gray-900 dark:text-white">
				Premium Plan
			  </h3>
			  <p className="text-sm text-gray-500 dark:text-gray-300">
				$30/month
			  </p>
			  <ul className="mt-4 space-y-2">
				<li className="flex items-start">
				  <svg className="h-6 w-6 text-indigo-600 dark:text-indigo-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
				  </svg>
				  <p className="ml-3 text-sm text-gray-700 dark:text-gray-300">
					Feature 1: Description of feature 1.
				  </p>
				</li>
				<li className="flex items-start">
				  <svg className="h-6 w-6 text-indigo-600 dark:text-indigo-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
				  </svg>
				  <p className="ml-3 text-sm text-gray-700 dark:text-gray-300">
					Feature 2: Description of feature 2.
				  </p>
				</li>
				<li className="flex items-start">
				  <svg className="h-6 w-6 text-indigo-600 dark:text-indigo-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
				  </svg>
				  <p className="ml-3 text-sm text-gray-700 dark:text-gray-300">
					Feature 3: Description of feature 3.
				  </p>
				</li>
				<li className="flex items-start">
				  <svg className="h-6 w-6 text-indigo-600 dark:text-indigo-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
				  </svg>
				  <p className="ml-3 text-sm text-gray-700 dark:text-gray-300">
					Feature 4: Description of feature 4.
				  </p>
				</li>
			  </ul>
			</div>
		  </div>
		</div>
	  </div>
	</div>
  );
}