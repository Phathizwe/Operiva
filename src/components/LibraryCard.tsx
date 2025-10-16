// src/components/LibraryCard.tsx
import { Link } from 'react-router-dom';
import type { Library } from '../types';
// Removed unused import: ArrowRightIcon

interface LibraryCardProps {
  library: Library;
}

export default function LibraryCard({ library }: LibraryCardProps) {
  // Helper to assign a color based on the outcome for visual distinction
  const getColor = (outcome: string) => {
    switch (outcome) {
      case 'Cash':
        return 'bg-progress-green text-progress-green ring-progress-green/20';
      case 'Compliance':
        return 'bg-operiva-blue text-operiva-blue ring-operiva-blue/20';
      case 'Customers':
        return 'bg-amber-alert text-amber-alert ring-amber-alert/20';
      case 'Control':
        return 'bg-charcoal text-charcoal ring-charcoal/20';
      case 'Human Human Capital':
        return 'bg-red-500 text-red-500 ring-red-500/20'; // Using a standard Tailwind color for Human Human Capital
      default:
        return 'bg-gray-500 text-gray-500 ring-gray-500/20';
    }
  };

  const colorClasses = getColor(library.outcome);

  return (
    <div className="flex flex-col rounded-lg bg-white dark:bg-gray-800 shadow-lg overflow-hidden transition duration-300 hover:shadow-xl hover:scale-[1.01]">
      <div className="p-6 flex-grow">
        <div className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ring-1 ring-inset ${colorClasses}`}>
          {library.outcome} Library
        </div>
        <h3 className="mt-4 text-xl font-display font-semibold text-gray-900 dark:text-white">
          {library.title}
        </h3>
        <p className="mt-3 text-base text-gray-500 dark:text-gray-400">
          {library.description}
        </p>
      </div>
      <div className="bg-gray-50 dark:bg-gray-700 px-6 py-4">
        <div className="flex justify-between items-center text-sm font-medium">
          <div className="text-gray-600 dark:text-gray-300">
            {library.artifactCount} Artifacts • {library.trackCount} Tracks
          </div>
          <Link
            to={`/libraries/${library.outcome.toLowerCase().replace(/\s/g, '-')}`}
            className="text-operiva-blue hover:text-operiva-navy flex items-center"
          >
            View Library <span aria-hidden="true">→</span>
            
          </Link>
        </div>
      </div>
    </div>
  );
}