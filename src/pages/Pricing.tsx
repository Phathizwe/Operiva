// src/pages/Pricing.tsx
import { Link } from 'react-router-dom';
import { CheckIcon } from '@heroicons/react/20/solid';

const tiers = [
  {
    name: 'Free Tier',
    id: 'tier-free',
    href: '/signup',
    price: 'R0',
    description: 'Lead-gen to conversion. Limited access to sample templates and compliance calendar.',
    features: [
      'Access to 5 Sample Artifacts',
      'Compliance Calendar',
      '2 Implementation Tracks per Quarter',
      'Monthly Newsletter',
      'Community Q&A Access',
    ],
    cta: 'Start Free',
    featured: false,
  },
  {
    name: 'Core Membership',
    id: 'tier-core',
    href: '/signup',
    price: 'R199',
    description: 'Full access to all Libraries, Tracks, and quarterly regulatory updates.',
    features: [
      'Everything in Free',
      'Full Access to All 5 Libraries',
      'All Implementation Tracks',
      'Quarterly Regulatory Updates',
      'Checklists and Calculators',
      'Sector Packs (Lite)',
    ],
    cta: 'Get Core',
    featured: true,
  },
  {
    name: 'Pro Membership',
    id: 'tier-pro',
    href: '/signup',
    price: 'R499',
    description: 'For serious operators needing policy suites, funding kits, and priority support.',
    features: [
      'Everything in Core',
      'Premium Packs (Funding Readiness, Policy Bundles)',
      'Advanced Calculators',
      'Periodic Live Workshops',
      'Priority Support (24hr SLA)',
      'Customization Credits (Limited)',
    ],
    cta: 'Go Pro',
    featured: false,
  },
];

export default function Pricing() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-base font-semibold leading-7 text-operiva-blue">Pricing</h2>
        <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl font-display">
          Simple, accessible pricing for South African SMMEs.
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-400 text-center">
        Choose the plan that fits your business needs. All prices are per month, billed annually. Monthly options available.
      </p>

      <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:max-w-4xl lg:grid-cols-3 lg:gap-x-8">
        {tiers.map((tier, tierIdx) => (
          <div
            key={tier.id}
            className={`
              rounded-3xl p-8 ring-1 xl:p-10
              ${tier.featured
                ? 'bg-white dark:bg-gray-800 ring-operiva-blue shadow-2xl'
                : 'bg-gray-50 dark:bg-gray-700 ring-gray-200 dark:ring-gray-700'
              }
            `}
          >
            <h3
              id={tier.id}
              className={`
                text-lg font-semibold leading-8
                ${tier.featured ? 'text-operiva-blue' : 'text-gray-900 dark:text-white'}
              `}
            >
              {tier.name}
            </h3>
            <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-400">{tier.description}</p>
            <p className="mt-6 flex items-baseline gap-x-1">
              <span className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">{tier.price}</span>
              <span className="text-sm font-semibold leading-6 text-gray-600 dark:text-gray-400">/month</span>
            </p>
            <Link
              to={tier.href}
              aria-describedby={tier.id}
              className={`
                mt-6 block rounded-lg py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                ${tier.featured
                  ? 'bg-operiva-blue text-white shadow-sm hover:bg-operiva-navy focus-visible:outline-operiva-blue'
                  : 'bg-white dark:bg-gray-800 text-operiva-blue ring-1 ring-inset ring-operiva-blue hover:bg-operiva-blue/10 focus-visible:outline-operiva-blue'
                }
              `}
            >
              {tier.cta}
            </Link>
            <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600 dark:text-gray-400 xl:mt-10">
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon className="h-6 w-5 flex-none text-progress-green" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-20 text-center">
        <h3 className="text-2xl font-bold text-operiva-navy dark:text-white font-display">
          Enterprise & ESD Program Licenses
        </h3>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          For multi-seat access, cohort tracking, and white-label options for sponsors, DFIs, and incubators.
        </p>
        <Link
          to="/contact"
          className="mt-6 inline-flex items-center rounded-lg bg-operiva-navy px-6 py-3 text-base font-semibold text-white shadow-md hover:bg-operiva-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-operiva-navy"
        >
          Contact Sales for Enterprise Pricing
        </Link>
      </div>
    </div>
  );
}
