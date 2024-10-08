
import Link from 'next/link';
import themeConfig from '../config/themeConfig';
import { useEffect } from 'react';
import { FaTwitter, FaReddit } from 'react-icons/fa';

export default function Hero() {
  useEffect(() => {
	if (themeConfig.theme === 'dark') {
	  document.documentElement.classList.add('dark');
	} else {
	  document.documentElement.classList.remove('dark');
	}
  }, []);

  return (
	<div className="relative bg-white dark:bg-gray-900 overflow-hidden">
	  <div className="max-w-7xl mx-auto">
		<div className="relative z-10 pb-8 bg-white dark:bg-gray-900 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
		  <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
			<main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
			  <div className="lg:grid lg:grid-cols-2 lg:gap-8">
				<div className="sm:text-center lg:text-left">
				  <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 dark:text-gray-200 sm:text-4xl md:text-5xl">
					<span className="block xl:inline">Build Smarter</span>{' '}
					<span className="block text-indigo-600 xl:inline">Launch Faster...</span>
				  </h1>
				  <p className="mt-3 text-base text-gray-500 dark:text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
					The Ultimate FastAPI & Next.js Boilerplate for Web Apps, SaaS, and AI Projects.
				  </p>
				  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
					<div className="rounded-md shadow">
					  <Link href="#" legacyBehavior>
						<a className="btn btn-primary">
						  Get started
						</a>
					  </Link>
					</div>
					<div className="mt-3 sm:mt-0 sm:ml-3">
					  <Link href="#" legacyBehavior>
						<a className="btn btn-secondary">
						  Learn more
						</a>
					  </Link>
					</div>
				  </div>
				</div>
				<div className="mt-12 lg:mt-0 lg:flex lg:items-center">
				  <img
					className="mx-auto lg:max-w-lg"
					src="/integration.png"
					alt="Product Image"
				  />
				</div>
			  </div>
			</main>
		  </div>
		</div>
		<div className="bg-white dark:bg-gray-900 py-8">
		  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
			<h2 className="text-2xl font-extrabold text-gray-900 dark:text-gray-200 sm:text-3xl">
			  Featured on
			</h2>
			<div className="mt-6 flex justify-center space-x-6">
			  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
				<FaTwitter className="h-8 w-8" />
			  </a>
			  <a href="https://reddit.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
				<FaReddit className="h-8 w-8" />
			  </a>
			</div>
		  </div>
		</div>
	  </div>
	</div>
  );
}