// src/components/ChangelogPreview.tsx
import { Link } from 'react-router-dom';
import { SparklesIcon } from '@heroicons/react/24/outline';

// Placeholder data for the latest updates
const latestUpdates = [
  {
    id: 1,
    date: 'Oct 15, 2025',
    title: 'Expanded Human Capital Library',
    description: 'Added 5 new tracks focused on remote team management and performance reviews.',
    type: 'New Content',
  },
  {
    id: 2,
    date: 'Oct 10, 2025',
    title: 'POPIA Compliance Checklist v2.1',
    description: 'Updated checklist to reflect the latest Information Regulator guidance on data breach reporting.',
    type: 'Regulatory Update',
  },
  {
    id: 3,
    date: 'Oct 1, 2025',
    title: 'New: Collections SOP Template',
    description: 'A complete Standard Operating Procedure for managing debtor collections and dunning sequences.',
    type: 'New Artifact',
  },
];

export default function ChangelogPreview() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <SparklesIcon className="mx-auto h-10 w-10 text-progress-green" aria-hidden="true" />
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl font-display">
          What's New at Operiva
        </h2>
        <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-400">
          We are constantly updating our kits and tracks to keep you compliant and ahead of the curve.
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-2xl lg:max-w-4xl">
        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
          {latestUpdates.map((update) => (
            <li key={update.id} className="py-6 flex justify-between items-start">
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-3">
                  <span className={`inline-flex items-center rounded-full px-3 py-0.5 text-xs font-medium ${
                    update.type === 'Regulatory Update' ? 'bg-amber-alert/10 text-amber-alert ring-amber-alert/20' :
                    update.type === 'New Content' ? 'bg-operiva-blue/10 text-operiva-blue ring-operiva-blue/20' :
                    'bg-progress-green/10 text-progress-green ring-progress-green/20'
                  }`}>
                    {update.type}
                  </span>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{update.date}</p>
                </div>
                <p className="mt-2 text-lg font-semibold text-gray-900 dark:text-white">{update.title}</p>
                <p className="mt-1 text-base text-gray-600 dark:text-gray-400">{update.description}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-8 text-center">
          <Link
            to="/changelog"
            className="text-base font-semibold leading-6 text-operiva-blue hover:text-progress-green"
          >
            View Full Changelog <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
