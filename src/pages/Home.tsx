// src/pages/Home.tsx - Redesigned with Operiva CI
import { Link } from 'react-router-dom';
import TrustSignals from '../components/TrustSignals';
import { 
  CheckCircleIcon, 
  CurrencyDollarIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  ChartBarIcon,
  CogIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';
import ChangelogPreview from '../components/ChangelogPreview';
import FeaturedProduct from '../components/FeaturedProduct';

// The six core outcomes with proper icons
const outcomes = [
  {
    name: 'Cash Acceleration',
    description: 'Get paid faster with invoice discipline, collections SOPs, and debtor playbooks.',
    icon: CurrencyDollarIcon,
    color: 'text-progress-green',
    bgColor: 'bg-progress-green/10',
  },
  {
    name: 'Compliance & Governance',
    description: 'CIPC, SARS, POPIA, UIF/COIDA—step-by-step, locally accurate, jargon-free checklists.',
    icon: ShieldCheckIcon,
    color: 'text-operiva-blue',
    bgColor: 'bg-operiva-blue/10',
  },
  {
    name: 'Customer & Growth',
    description: 'Practical marketing templates, review scripts, and promo calendars that drive results.',
    icon: UserGroupIcon,
    color: 'text-progress-green',
    bgColor: 'bg-progress-green/10',
  },
  {
    name: 'Operations & Control',
    description: 'Standardize your business with SOP templates for retail, stock, and quality checks.',
    icon: CogIcon,
    color: 'text-operiva-blue',
    bgColor: 'bg-operiva-blue/10',
  },
  {
    name: 'Human Capital',
    description: 'Leadership development, delegation frameworks, and talent retention strategies.',
    icon: RocketLaunchIcon,
    color: 'text-progress-green',
    bgColor: 'bg-progress-green/10',
  },
  {
    name: 'Strategy & Planning',
    description: 'Business model design, SWOT analysis, and market entry frameworks for growth.',
    icon: ChartBarIcon,
    color: 'text-operiva-blue',
    bgColor: 'bg-operiva-blue/10',
  },
];

// Stats for social proof
const stats = [
  { value: '34+', label: 'Ready-to-Use Artifacts' },
  { value: '100%', label: 'SA-Specific Content' },
  { value: '6', label: 'Business Outcomes' },
  { value: 'Free', label: 'Core Templates' },
];

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section - Redesigned */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-operiva-navy/5 via-white to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-900">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-32">
          <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
            {/* Badge */}
            <div className="mt-24 sm:mt-32 lg:mt-16">
              <span className="inline-flex items-center space-x-2 rounded-full bg-progress-green/10 px-4 py-2 text-sm font-semibold text-progress-green ring-1 ring-inset ring-progress-green/20">
                <CheckCircleIcon className="h-5 w-5" />
                <span>SA-Ready Templates & Playbooks</span>
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="mt-10 text-5xl font-bold tracking-tight text-operiva-navy dark:text-white sm:text-6xl font-display leading-tight">
              Run right,
              <br />
              <span className="text-progress-green">starting today.</span>
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-xl leading-8 text-gray-600 dark:text-gray-400">
              Practical, compliant, and proven templates that standardize operations and speed results—without enterprise complexity.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                to="/libraries"
                className="rounded-lg bg-progress-green px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-progress-green/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-progress-green transition-all"
              >
                Browse Free Templates
              </Link>
              <Link 
                to="/pricing" 
                className="text-base font-semibold leading-6 text-operiva-navy dark:text-light-gray hover:text-progress-green transition-colors"
              >
                See Pricing <span aria-hidden="true">→</span>
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-4 gap-4 sm:gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-operiva-navy dark:text-white font-display">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Visual - Improved */}
          <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-20">
            <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
              <div className="rounded-xl bg-operiva-navy/5 p-2 ring-1 ring-inset ring-operiva-navy/10 lg:rounded-2xl lg:p-4">
                <div className="rounded-lg bg-white shadow-2xl ring-1 ring-gray-900/10">
                  {/* Mock Dashboard */}
                  <div className="bg-operiva-navy rounded-t-lg px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <div className="h-3 w-3 rounded-full bg-red-500"></div>
                      <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                      <div className="h-3 w-3 rounded-full bg-progress-green"></div>
                      <div className="ml-4 text-sm font-medium text-white">
                        Cash Flow Forecast Dashboard
                      </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700">Month 1 Cash</span>
                        <span className="text-2xl font-bold text-progress-green">R 45,000</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-gray-200">
                        <div className="h-2 w-3/4 rounded-full bg-progress-green"></div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700">Month 2 Cash</span>
                        <span className="text-2xl font-bold text-yellow-600">R 12,000</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-gray-200">
                        <div className="h-2 w-1/4 rounded-full bg-yellow-500"></div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700">Month 3 Cash</span>
                        <span className="text-2xl font-bold text-progress-green">R 38,000</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-gray-200">
                        <div className="h-2 w-2/3 rounded-full bg-progress-green"></div>
                      </div>
                      <div className="mt-6 rounded-lg bg-yellow-50 p-4 ring-1 ring-yellow-600/20">
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <svg className="h-5 w-5 text-yellow-600" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div className="ml-3">
                            <p className="text-sm font-medium text-yellow-800">
                              Month 2 is tight. Chase late payments now.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Signals */}
      <TrustSignals />

      {/* Outcomes Section - Redesigned with Better Visual Hierarchy */}
      <div className="mx-auto mt-24 max-w-7xl px-6 sm:mt-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-progress-green uppercase tracking-wide">
            The 6 Business Outcomes
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-operiva-navy dark:text-white sm:text-5xl font-display">
            Stop guessing. Start executing.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
            Our ready-to-use digital products are mapped to the core challenges every South African SMME faces.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
            {outcomes.map((outcome) => (
              <div 
                key={outcome.name} 
                className="flex flex-col rounded-2xl border border-gray-200 dark:border-gray-700 p-8 hover:border-progress-green hover:shadow-lg transition-all duration-300"
              >
                <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-operiva-navy dark:text-white">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${outcome.bgColor}`}>
                    <outcome.icon className={`h-6 w-6 ${outcome.color}`} aria-hidden="true" />
                  </div>
                  {outcome.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-400">
                  <p className="flex-auto">{outcome.description}</p>
                  <p className="mt-6">
                    <Link 
                      to="/libraries" 
                      className="text-sm font-semibold leading-6 text-progress-green hover:text-operiva-blue transition-colors"
                    >
                      Explore {outcome.name} <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Featured Product Section */}
      <FeaturedProduct />

      {/* Changelog Preview Section */}
      <ChangelogPreview />

      {/* Final CTA Section - Redesigned */}
      <div className="mx-auto mt-32 max-w-7xl sm:mt-56 sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gradient-to-br from-operiva-navy to-operiva-blue px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32">
          {/* Decorative background pattern */}
          <svg
            className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="grid-pattern"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" strokeWidth={0} fill="url(#grid-pattern)" />
          </svg>

          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl font-display">
              Ready to standardize your operations?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Start with our free templates and upgrade to a Core Membership for full access to all Libraries, Tracks, and quarterly regulatory updates.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/pricing"
                className="rounded-lg bg-progress-green px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-progress-green/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all"
              >
                See Membership Options
              </Link>
              <Link 
                to="/changelog" 
                className="text-base font-semibold leading-6 text-white hover:text-progress-green transition-colors"
              >
                View Changelog <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

