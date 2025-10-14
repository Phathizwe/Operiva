// src/components/TrackStep.tsx
import { Link } from 'react-router-dom';
import { CheckCircleIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

interface TrackStepProps {
  stepNumber: number;
  title: string;
  description: string;
  artifactId?: string;
  isCompleted: boolean;
}

export default function TrackStep({ stepNumber, title, description, artifactId, isCompleted }: TrackStepProps) {
  return (
    <li className="relative flex gap-x-4">
      <div className="absolute left-0 top-0 flex w-6 justify-center">
        <div className="h-full w-px bg-gray-200 dark:bg-gray-700" />
      </div>
      <div className="relative flex h-6 w-6 flex-none items-center justify-center">
        <div className={`h-6 w-6 rounded-full ${isCompleted ? 'bg-progress-green' : 'bg-operiva-blue'}`}>
          {isCompleted ? (
            <CheckCircleIcon className="h-6 w-6 text-white" />
          ) : (
            <span className="text-white text-sm font-semibold flex items-center justify-center">{stepNumber}</span>
          )}
        </div>
      </div>
      <div className="flex-auto py-0.5 text-sm leading-6">
        <h3 className="font-semibold text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
        {artifactId && (
          <div className="mt-2">
            <Link
              to={`/artifacts/${artifactId}`}
              className="inline-flex items-center text-xs font-medium text-operiva-blue hover:text-operiva-navy"
            >
              <DocumentTextIcon className="h-4 w-4 mr-1" />
              View Required Artifact
            </Link>
          </div>
        )}
      </div>
    </li>
  );
}
