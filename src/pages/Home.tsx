// src/pages/Home.tsx
import { Link } from 'react-router-dom';
import TrustSignals from '../components/TrustSignals';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import ChangelogPreview from '../components/ChangelogPreview';

// The five core outcomes (features)
const outcomes = [
  {
    name: 'Cash Acceleration',
    description: 'Demand for invoice discipline, collections SOPs, and debtor playbooks is high. Get paid faster with proven templates.',
    icon: CheckCircleIcon,
  },
  {
    name: 'Compliance & Governance',
    description: 'CIPC, SARS, POPIA, UIF/COIDA—get step-by-step, locally accurate, jargon-free checklists and filing packs.',
    icon: CheckCircleIcon,
  },
  {
    name: 'Customer & Growth',
    description: 'Practical marketing templates, review response scripts, and promo calendars beat abstract "digital transformation."',
    icon: CheckCircleIcon,
  },
  {
    name: 'Operations & Control',
    description: 'Standardize your business with SOP templates for retail cash-up, stock count, job cards, and quality checks.',
    icon: CheckCircleIcon,
  },
  {
    name: 'Capital Readiness',
    description: 'Funding readiness packs, KPI tracker templates, and board/ESD reporting formats increase your approval odds.',
    icon: CheckCircleIcon,
  },
];

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg">
                <div className="mt-24 sm:mt-32 lg:mt-16">
                  <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-operiva-navy dark:text-light-gray">
                    <span className="rounded-full bg-progress-green/10 px-3 py-1 text-sm font-semibold leading-6 text-progress-green ring-1 ring-inset ring-progress-green/20">
                      SA-Ready
                    </span>
                    <span>Updated for CIPC, SARS, and POPIA.</span>
                  </span>
                </div>
                <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl font-display">
                  Run right, starting today.
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
                  Operiva provides practical, compliant, and proven templates and playbooks that standardize operations and speed results—without enterprise complexity.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Link
                    to="/libraries"
                    className="rounded-lg bg-operiva-blue px-6 py-3 text-base font-semibold text-white shadow-md hover:bg-operiva-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-operiva-blue"
                  >
                    Browse Free Templates
                  </Link>
                  <Link to="/pricing" className="text-base font-semibold leading-6 text-operiva-navy dark:text-light-gray hover:text-progress-green">
                    See Membership Options <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
            {/* Placeholder for the visual asset (e.g., a dashboard screenshot) */}
            <div className="shadow-lg md:rounded-lg">
              <div className="bg-operiva-blue [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.lg))]">
                <div className="relative px-6 pt-8 sm:pt-16 md:pl-16 md:pr-0">
                  <div className="mx-auto max-w-2xl md:mx-0 md:max-w-none">
                    <div className="w-full overflow-hidden rounded-lg bg-charcoal">
                      <div className="flex bg-operiva-navy/40 ring-1 ring-white/5">
                        <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white text-sm">
                          Cash Acceleration Track
                        </div>
                      </div>
                      <div className="px-6 pb-14 pt-6">
                        <pre className="text-[0.8rem] leading-6 text-gray-300">
                          <code>
                            {`// Implementation Track: Reduce DSO in 30 Days
1. Download: Invoice Template Pack (Artifact)
2. Customize: Add your logo and payment terms.
3. Deploy: Send to all new clients.
4. Download: Debtor Dunning Scripts (Artifact)
5. Action: Send first reminder email on Day 3.
6. Track: Use Debtor Aging Spreadsheet (Artifact)
7. Upgrade: Unlock Collections Pro Pack for SOPs.`}
                          </code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white dark:from-gray-900 sm:h-32" />
      </div>

      {/* Trust Signals Section - Added based on research */}
      <TrustSignals />
      </div>

      {/* Outcomes Section (Features) */}
      <div className="mx-auto mt-24 max-w-7xl px-6 sm:mt-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-operiva-blue">
            The 5 Outcomes That Drive Your Business
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl font-display">
            Stop guessing. Start executing.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
            Our ready-to-use digital products are mapped to the core challenges every South African SMME faces.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {outcomes.map((outcome) => (
              <div key={outcome.name} className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-operiva-blue">
                    <outcome.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {outcome.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-400">
                  <p className="flex-auto">{outcome.description}</p>
                  <p className="mt-6">
                    <Link to="/libraries" className="text-sm font-semibold leading-6 text-operiva-blue hover:text-operiva-navy">
                      Explore {outcome.name} <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Changelog Preview Section - Added based on research */}
      <ChangelogPreview />

      {/* Trust and CTA Section (Simplified Pricing) */}
      <div className="mx-auto mt-32 max-w-7xl sm:mt-56 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden bg-operiva-navy px-6 py-20 shadow-xl sm:rounded-lg sm:px-10 sm:py-24 md:px-12 lg:px-20">
          <div className="relative mx-auto max-w-2xl lg:mx-0 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-display">
              Ready to standardize your operations?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Start with our free templates and upgrade to a Core Membership for full access to all Libraries, Tracks, and quarterly regulatory updates.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/pricing"
                className="rounded-lg bg-progress-green px-6 py-3 text-base font-semibold text-white shadow-md hover:bg-operiva-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-progress-green"
              >
                See Membership Options
              </Link>
              <Link to="/changelog" className="text-base font-semibold leading-6 text-white/80 hover:text-white">
                View Changelog <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
