// src/pages/PaymentCancel.tsx
import { Link } from 'react-router-dom';
import { XCircleIcon } from '@heroicons/react/24/outline';

export default function PaymentCancel() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        <XCircleIcon className="mx-auto h-24 w-24 text-yellow-500" />
        <h1 className="mt-6 text-3xl font-bold text-gray-900 dark:text-white">
          Payment Cancelled
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Your payment was cancelled. No charges have been made.
        </p>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-500">
          You can try again anytime you're ready.
        </p>
        <div className="mt-8 space-y-4">
          <Link
            to="/pricing"
            className="block w-full rounded-md bg-operiva-blue px-4 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-operiva-blue/90"
          >
            View Pricing Plans
          </Link>
          <Link
            to="/"
            className="block w-full rounded-md bg-white dark:bg-gray-700 px-4 py-3 text-center text-sm font-semibold text-operiva-blue dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

