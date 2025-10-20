// src/pages/PaymentSuccess.tsx
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

export default function PaymentSuccess() {
  useEffect(() => {
    // You could add analytics tracking here
    console.log('Payment successful');
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        <CheckCircleIcon className="mx-auto h-24 w-24 text-green-500" />
        <h1 className="mt-6 text-3xl font-bold text-gray-900 dark:text-white">
          Payment Successful!
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Thank you for subscribing to Operiva. Your account has been upgraded.
        </p>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-500">
          You now have full access to all features in your subscription tier.
        </p>
        <div className="mt-8 space-y-4">
          <Link
            to="/dashboard"
            className="block w-full rounded-md bg-operiva-blue px-4 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-operiva-blue/90"
          >
            Go to Dashboard
          </Link>
          <Link
            to="/libraries"
            className="block w-full rounded-md bg-white dark:bg-gray-700 px-4 py-3 text-center text-sm font-semibold text-operiva-blue dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            Browse Libraries
          </Link>
        </div>
      </div>
    </div>
  );
}

