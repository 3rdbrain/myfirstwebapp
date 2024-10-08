import { useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import themeConfig from '../config/themeConfig';

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#features' },
  { name: 'Pricing', href: '#pricing' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
	if (themeConfig.theme === 'dark') {
	  document.documentElement.classList.add('dark');
	} else {
	  document.documentElement.classList.remove('dark');
	}
  }, []);

  return (
	<header className="bg-white dark:bg-gray-900">
	  <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between" aria-label="Global">
		<div className="flex items-center">
		  <Link href="/" legacyBehavior>
			<a className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
			  <img src="/logo.png" alt="Brand Logo" className="h-8 w-auto mr-2" />
			  Omlette
			</a>
		  </Link>
		</div>
		<div className="hidden md:flex space-x-4">
		  {navigation.map((item) => (
			<Link key={item.name} href={item.href} legacyBehavior>
			  <a className="text-base font-medium text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
				{item.name}
			  </a>
			</Link>
		  ))}
		</div>
		<div className="md:hidden">
		  <button
			type="button"
			className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-300 hover:text-gray-500 dark:hover:text-white focus:outline-none"
			onClick={() => setMobileMenuOpen(true)}
		  >
			<span className="sr-only">Open main menu</span>
			<Bars3Icon className="h-6 w-6" aria-hidden="true" />
		  </button>
		</div>
	  </nav>
	  <Dialog as="div" className="md:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
		<div className="fixed inset-0 z-40 flex">
		  <Dialog.Panel className="relative flex-1 flex flex-col max-w-xs w-full bg-white dark:bg-gray-900">
			<div className="absolute top-0 right-0 -mr-2 pt-2">
			  <button
				type="button"
				className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-300 hover:text-gray-500 dark:hover:text-white focus:outline-none"
				onClick={() => setMobileMenuOpen(false)}
			  >
				<span className="sr-only">Close main menu</span>
				<XMarkIcon className="h-6 w-6" aria-hidden="true" />
			  </button>
			</div>
			<div className="pt-5 pb-6 px-5">
			  <div className="flex items-center justify-between">
				<Link href="/" legacyBehavior>
				  <a className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
					<img src="/path/to/logo.png" alt="Brand Logo" className="h-8 w-auto mr-2" />
					Brand
				  </a>
				</Link>
			  </div>
			  <div className="mt-6">
				<nav className="grid gap-y-8">
				  {navigation.map((item) => (
					<Link key={item.name} href={item.href} legacyBehavior>
					  <a className="text-base font-medium text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
						{item.name}
					  </a>
					</Link>
				  ))}
				</nav>
			  </div>
			</div>
		  </Dialog.Panel>
		</div>
	  </Dialog>
	</header>
  );
}