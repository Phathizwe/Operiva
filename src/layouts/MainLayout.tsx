// src/layouts/MainLayout.tsx
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import DesktopNav, { DesktopUserMenu } from '../components/DesktopNav';
import MobileNav from '../components/MobileNav';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Disclosure as="nav" className="bg-white dark:bg-gray-800 shadow">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 justify-between">
                <div className="flex">
                  <div className="flex flex-shrink-0 items-center">
                    <Link to="/">
                      <img
                        className="h-8 w-auto"
                        src="/logo.svg"
                        alt="Operiva"
                      />
                    </Link>
                  </div>
                  <DesktopNav />
                </div>
                <DesktopUserMenu />
                <div className="-mr-2 flex items-center sm:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-operiva-blue">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <MobileNav />
          </>
        )}
      </Disclosure>

      <main className="py-6 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>

      <footer className="bg-white dark:bg-gray-800 shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
            <p className="text-center text-sm text-gray-500 dark:text-gray-400">
              &copy; {new Date().getFullYear()} Operiva. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
