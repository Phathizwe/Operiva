// src/components/DesktopNav.tsx
import { Link, useLocation } from 'react-router-dom';
import { BellIcon } from '@heroicons/react/24/outline';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
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

export default function DesktopNav() {
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
    <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
      {navigation.map((item) => (
        <Link
          key={item.name}
          to={item.href}
          className={classNames(
            location.pathname === item.href
              ? 'border-operiva-blue text-operiva-navy dark:text-white'
              : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white',
            'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium'
          )}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}

export function DesktopUserMenu() {
  const { currentUser, logOut } = useAuth();

  const handleLogout = async () => {
    try {
      await logOut();
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };

  return (
    <div className="hidden sm:ml-6 sm:flex sm:items-center">
      {/* Notification bell */}
      <button
        type="button"
        className="rounded-full bg-white dark:bg-gray-800 p-1 text-gray-400 hover:text-gray-500 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-operiva-blue focus:ring-offset-2"
      >
        <span className="sr-only">View notifications</span>
        <BellIcon className="h-6 w-6" aria-hidden="true" />
      </button>

      {/* Profile dropdown */}
      {currentUser ? (
        <Menu as="div" className="relative ml-3">
          <div>
            <Menu.Button className="flex rounded-full bg-white dark:bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-operiva-blue focus:ring-offset-2">
              <span className="sr-only">Open user menu</span>
              {currentUser.photoURL ? (
                <img
                  className="h-8 w-8 rounded-full"
                  src={currentUser.photoURL}
                  alt=""
                />
              ) : (
                <div className="h-8 w-8 rounded-full bg-operiva-blue flex items-center justify-center text-white">
                  {currentUser.displayName?.charAt(0) || currentUser.email?.charAt(0) || 'U'}
                </div>
              )}
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white dark:bg-gray-800 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/profile"
                    className={classNames(
                      active ? 'bg-gray-100 dark:bg-gray-700' : '',
                      'block px-4 py-2 text-sm text-gray-700 dark:text-gray-200'
                    )}
                  >
                    Your Profile
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/settings"
                    className={classNames(
                      active ? 'bg-gray-100 dark:bg-gray-700' : '',
                      'block px-4 py-2 text-sm text-gray-700 dark:text-gray-200'
                    )}
                  >
                    Settings
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={handleLogout}
                    className={classNames(
                      active ? 'bg-gray-100 dark:bg-gray-700' : '',
                      'block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200'
                    )}
                  >
                    Sign out
                  </button>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      ) : (
        <div className="ml-3 flex items-center space-x-4">
          <Link
            to="/login"
            className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white text-sm font-medium"
          >
            Log in
          </Link>
          <Link
            to="/signup"
            className="bg-operiva-blue text-white hover:bg-operiva-navy px-3 py-2 rounded-md text-sm font-medium"
          >
            Sign up
          </Link>
        </div>
      )}
    </div>
  );
}
