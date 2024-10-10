import { useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link as ScrollLink } from 'react-scroll';
import Link from 'next/link';
import themeConfig from '../config/themeConfig';

const navigation = [
  { name: 'Product', href: 'product' },
  { name: 'Features', href: 'features' },
  { name: 'Pricing', href: 'pricing' },
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
    <nav className="bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" legacyBehavior>
                <a className="text-xl font-bold text-gray-900 dark:text-white">Logo</a>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navigation.map((item) => (
                  <ScrollLink
                    key={item.name}
                    to={item.href}
                    smooth={true}
                    duration={500}
                    className="cursor-pointer text-gray-900 dark:text-white hover:text-indigo-600"
                  >
                    {item.name}
                  </ScrollLink>
                ))}
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 dark:text-white hover:text-indigo-600 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      <Dialog as="div" className="md:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-40 flex">
          <Dialog.Panel className="relative flex-1 flex flex-col max-w-xs w-full bg-white dark:bg-gray-900">
            <div className="absolute top-0 right-0 -mr-2 pt-2">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 dark:text-white hover:text-indigo-600 focus:outline-none"
              >
                <span className="sr-only">Close main menu</span>
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
              <nav className="px-2 space-y-1">
                {navigation.map((item) => (
                  <ScrollLink
                    key={item.name}
                    to={item.href}
                    smooth={true}
                    duration={500}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 dark:text-white hover:text-indigo-600 cursor-pointer"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </ScrollLink>
                ))}
              </nav>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </nav>
  );
}