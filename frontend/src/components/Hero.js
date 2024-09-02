import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import ThemeSwitcher from './ThemeSwitcher';

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '/features' },
];

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
	<div className="relative bg-white overflow-hidden">
	  <div className="max-w-7xl mx-auto">
		<div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
		  <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
			<nav className="relative flex items-center justify-between sm:h-10 lg:justify-between" aria-label="Global">
			  <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
				<div className="flex items-center justify-between w-full md:w-auto">
				  <Link href="/" legacyBehavior>
					<a>
					  <span className="sr-only">Your Company</span>
					  <img className="h-8 w-auto sm:h-10" src="/logo.png" alt="Logo" />
					</a>
				  </Link>
				  <div className="-mr-2 flex items-center md:hidden">
					<button
					  type="button"
					  className="bg-gray-100 p-2 rounded-md inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
					  onClick={() => setMobileMenuOpen(true)}
					  aria-label="Open main menu"
					>
					  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
					</button>
				  </div>
				</div>
			  </div>
			  <div className="hidden md:flex md:items-center md:space-x-8">
				{navigation.map((item) => (
				  <Link key={item.name} href={item.href} legacyBehavior>
					<a className="font-medium text-gray-500 hover:text-gray-900">
					  {item.name}
					</a>
				  </Link>
				))}
				<ThemeSwitcher />
			  </div>
			</nav>
		  </div>

		  <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
			<div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
			  <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
			  <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
				&#8203;
			  </span>
			  <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
				<div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
				  <div className="sm:flex sm:items-start">
					<div className="mt-3 text-center sm:mt-0 sm:text-left">
					  <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
						Menu
					  </Dialog.Title>
					  <div className="mt-2">
						{navigation.map((item) => (
						  <Link key={item.name} href={item.href} legacyBehavior>
							<a className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
							  {item.name}
							</a>
						  </Link>
						))}
						<ThemeSwitcher />
					  </div>
					</div>
				  </div>
				</div>
				<div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
				  <button
					type="button"
					className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
					onClick={() => setMobileMenuOpen(false)}
					aria-label="Close menu"
				  >
					Close
				  </button>
				</div>
			  </div>
			</div>
		  </Dialog>

		  <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
			<div className="lg:grid lg:grid-cols-2 lg:gap-8">
			  <div className="sm:text-center lg:text-left">
				<h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
				  <span className="block xl:inline">Welcome to</span>{' '}
				  <span className="block text-indigo-600 xl:inline">Our Product</span>
				</h1>
				<p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
				  This is a brief description of our product. It is designed to help you achieve your goals and improve your workflow.
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
	</div>
  );
}