// src/components/MobileNav.tsx
import { Disclosure } from '@headlessui/react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const navigation = [
  { name: 'Libraries', href: '/libraries' },
  { name: 'Tracks', href: '/tracks' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Changelog', href: '/changelog' },
  { name: 'About', href: '/about' },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function MobileNav() {
  const { currentUser, logOut } = useAuth();
  const location = useLocation();

  const handleLogout = async () => {
    try {
      await logOut();
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };

  return (
    <Disclosure.Panel className="sm:hidden">
      <div className="space-y-1 pb-3 pt-2">
        {navigation.map((item) => (
          <Disclosure.Button
            key={item.name}
            as={Link}
            to={item.href}
            className={classNames(
              location.pathname === item.href
                ? 'bg-operiva-blue/10 border-operiva-blue text-operiva-navy dark:bg-gray-700 dark:text-white'
                : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white',
              'block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
            )}
          >
            {item.name}
          </Disclosure.Button>
        ))}
      </div>
      <div className="border-t border-gray-200 dark:border-gray-700 pb-3 pt-4">
        {currentUser ? (
          <>
            <div className="flex items-center px-4">
              <div className="flex-shrink-0">
                {currentUser.photoURL ? (
                  <img
                    className="h-10 w-10 rounded-full"
                    src={currentUser.photoURL}
                    alt=""
                  />
                ) : (
                  <div className="h-10 w-10 rounded-full bg-operiva-blue flex items-center justify-center text-white">
                    {currentUser.displayName?.charAt(0) || currentUser.email?.charAt(0) || 'U'}
                  </div>
                )}
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-gray-800 dark:text-white">
                  {currentUser.displayName || 'User'}
                </div>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {currentUser.email}
                </div>
              </div>
            </div>
            <div className="mt-3 space-y-1">
              <Disclosure.Button
                as={Link}
                to="/profile"
                className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Your Profile
              </Disclosure.Button>
              <Disclosure.Button
                as={Link}
                to="/settings"
                className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Settings
              </Disclosure.Button>
              <Disclosure.Button
                as="button"
                onClick={handleLogout}
                className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white w-full text-left"
              >
                Sign out
              </Disclosure.Button>
            </div>
          </>
        ) : (
          <div className="mt-3 space-y-1">
            <Disclosure.Button
              as={Link}
              to="/login"
              className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Log in
            </Disclosure.Button>
            <Disclosure.Button
              as={Link}
              to="/signup"
              className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Sign up
            </Disclosure.Button>
          </div>
        )}
      </div>
    </Disclosure.Panel>
  );
}
