// src/components/FeaturedProduct.tsx
import { Link } from 'react-router-dom';
import { SparklesIcon, DocumentTextIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

export default function FeaturedProduct() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20 bg-gradient-to-br from-operiva-navy to-operiva-blue">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2 items-center">
          {/* Left: Product Visual/Icon */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-white/10 p-8 backdrop-blur-sm ring-1 ring-white/20">
              <div className="flex h-full items-center justify-center">
                <DocumentTextIcon className="h-48 w-48 text-progress-green" aria-hidden="true" />
              </div>
            </div>
            <div className="absolute -top-4 -right-4 rounded-full bg-progress-green px-4 py-2 text-sm font-semibold text-white shadow-lg">
              FREE
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="lg:pl-8">
            <div className="flex items-center space-x-2">
              <SparklesIcon className="h-6 w-6 text-progress-green" aria-hidden="true" />
              <span className="text-sm font-semibold text-progress-green uppercase tracking-wide">
                Featured Product
              </span>
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl font-display">
              Business Model Canvas
            </h2>
            <p className="mt-2 text-sm text-gray-300">
              SA Edition • Version 1.0
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-200">
              The essential strategic planning tool for every South African SMME. Design, validate, and evolve your business model with this proven framework, adapted with local examples and a step-by-step guide.
            </p>

            {/* Benefits List */}
            <ul role="list" className="mt-8 space-y-3 text-base leading-7 text-gray-200">
              <li className="flex gap-x-3">
                <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-progress-green" aria-hidden="true" />
                <span>One-page visual framework for strategic clarity</span>
              </li>
              <li className="flex gap-x-3">
                <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-progress-green" aria-hidden="true" />
                <span>SA-specific examples from retail, trades, and services</span>
              </li>
              <li className="flex gap-x-3">
                <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-progress-green" aria-hidden="true" />
                <span>Includes a 90-minute guided implementation track</span>
              </li>
            </ul>

            {/* CTA */}
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                to="/artifacts/s1"
                className="rounded-lg bg-progress-green px-6 py-3 text-base font-semibold text-white shadow-md hover:bg-white hover:text-operiva-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-progress-green"
              >
                Download Free
              </Link>
              <Link
                to="/libraries/strategy"
                className="text-base font-semibold leading-6 text-white hover:text-progress-green"
              >
                View Strategy Library <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

