// src/components/ArtifactCard.tsx
import { Link } from 'react-router-dom';
import type { Artifact } from '../types';
import { DocumentTextIcon, CalculatorIcon, CheckBadgeIcon, BookOpenIcon } from '@heroicons/react/24/outline';

interface ArtifactCardProps {
  artifact: Artifact;
}

const getIcon = (type: Artifact['type']) => {
  switch (type) {
    case 'Template':
    case 'SOP':
      return DocumentTextIcon;
    case 'Calculator':
      return CalculatorIcon;
    case 'Checklist':
      return CheckBadgeIcon;
    case 'Guide':
    case 'Research':
      return BookOpenIcon;
    default:
      return DocumentTextIcon;
  }
};

const getBadgeColor = (isPremium: boolean) => {
  return isPremium
    ? 'bg-amber-alert/10 text-amber-alert ring-amber-alert/20'
    : 'bg-progress-green/10 text-progress-green ring-progress-green/20';
};

export default function ArtifactCard({ artifact }: ArtifactCardProps) {
  const Icon = getIcon(artifact.type);
  const badgeClasses = getBadgeColor(artifact.isPremium);

  return (
    <div className="flex flex-col rounded-lg bg-white dark:bg-gray-800 shadow-md overflow-hidden transition duration-300 hover:shadow-lg">
      <div className="p-5 flex-grow">
        <div className="flex items-center justify-between">
          <div className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ring-1 ring-inset ${badgeClasses}`}>
            {artifact.isPremium ? 'Pro / Pack' : 'Core / Free'}
          </div>
          <Icon className="h-6 w-6 text-operiva-blue dark:text-light-gray" aria-hidden="true" />
        </div>
        <h3 className="mt-3 text-lg font-semibold text-gray-900 dark:text-white">
          {artifact.title}
        </h3>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 line-clamp-3">
          {artifact.description}
        </p>
      </div>
      <div className="bg-gray-50 dark:bg-gray-700 px-5 py-3 flex justify-between items-center">
        <div className="text-xs text-gray-600 dark:text-gray-300">
          {artifact.type} • {artifact.fileType}
        </div>
        <Link
          to={`/artifacts/${artifact.id}`}
          className="text-sm font-medium text-operiva-blue hover:text-operiva-navy"
        >
          View Details &rarr;
        </Link>
      </div>
    </div>
  );
}