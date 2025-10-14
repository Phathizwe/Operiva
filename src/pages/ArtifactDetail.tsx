// src/pages/ArtifactDetail.tsx
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Artifact } from '../types';
import { getArtifact } from '../services/firestore';
import { ArrowDownTrayIcon, LockClosedIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import { useAuth } from '../context/AuthContext';

// Seed data removed. Using live data from Firestore.

export default function ArtifactDetail() {
  const { id } = useParams<{ id: string }>();
  const { currentUser, hasMembership } = useAuth();
  const [artifact, setArtifact] = useState<Artifact | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArtifact = async () => {
      if (!id) return;

      try {
        const fetchedArtifact = await getArtifact(id);
        if (fetchedArtifact) {
          // Convert Firestore Timestamp to Date object for consistency
          fetchedArtifact.lastUpdated = fetchedArtifact.lastUpdated.toDate();
        }
        setArtifact(fetchedArtifact);
      } catch (err) {
        console.error(`Failed to fetch artifact ${id}:`, err);
        setError(`Failed to load artifact details.`);
      } finally {
        setLoading(false);
      }
    };

    fetchArtifact();
  }, [id]);

  if (loading) {
    return <div className="text-center py-20 text-lg text-gray-500">Loading Artifact Details...</div>;
  }

  if (error) {
    return <div className="text-center py-20 text-lg text-red-500">{error}</div>;
  }

  if (!artifact) {
    return <div className="text-center py-20 text-lg text-gray-500">Artifact not found.</div>;
  }

  const isFree = !artifact.isPremium;
  const isUnlocked = isFree || hasMembership('Core'); // Core membership unlocks all artifacts in this example
  const lastUpdatedDate = artifact.lastUpdated.toLocaleDateString('en-ZA', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="mx-auto max-w-4xl py-10">
      <div className="bg-white dark:bg-gray-800 shadow-xl rounded-lg overflow-hidden">
        <div className="p-8 sm:p-10">
          <div className="flex items-center justify-between">
            <span className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ring-1 ring-inset ${isFree ? 'bg-progress-green/10 text-progress-green ring-progress-green/20' : 'bg-amber-alert/10 text-amber-alert ring-amber-alert/20'}`}>
              {isFree ? 'Core / Free' : 'Pro Membership Required'}
            </span>
            <Link to={`/libraries/${artifact.outcome.toLowerCase()}`} className="text-sm font-medium text-operiva-blue hover:text-operiva-navy">
              &larr; Back to {artifact.outcome} Library
            </Link>
          </div>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white font-display">
            {artifact.title}
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
            {artifact.description}
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4 border-t border-b border-gray-200 dark:border-gray-700 py-6">
            <div className="flex items-center space-x-3">
              <CheckCircleIcon className="h-6 w-6 text-progress-green" />
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Type</p>
                <p className="text-base font-semibold text-gray-900 dark:text-white">{artifact.type}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircleIcon className="h-6 w-6 text-progress-green" />
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">File Format</p>
                <p className="text-base font-semibold text-gray-900 dark:text-white">{artifact.fileType}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircleIcon className="h-6 w-6 text-progress-green" />
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Version</p>
                <p className="text-base font-semibold text-gray-900 dark:text-white">{artifact.version}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircleIcon className="h-6 w-6 text-progress-green" />
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Last Updated</p>
                <p className="text-base font-semibold text-gray-900 dark:text-white">{lastUpdatedDate}</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            {isUnlocked ? (
              <a
                href={artifact.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center rounded-lg bg-operiva-blue px-6 py-3 text-base font-semibold text-white shadow-md hover:bg-operiva-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-operiva-blue"
              >
                <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
                Download Now ({isFree ? 'Free' : 'Core Access'})
              </a>
            ) : (
              <div className="text-center p-6 rounded-lg bg-gray-50 dark:bg-gray-700 border border-amber-alert/50">
                <LockClosedIcon className="h-8 w-8 text-amber-alert mx-auto" />
                <p className="mt-2 text-lg font-semibold text-gray-900 dark:text-white">
                  Unlock with Core Membership
                </p>
                <p className="mt-1 text-gray-600 dark:text-gray-400">
                  This premium artifact requires a Core Membership or higher.
                </p>
                <Link
                  to="/pricing"
                  className="mt-4 inline-flex items-center rounded-lg bg-amber-alert px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-amber-alert/90"
                >
                  View Pricing & Upgrade
                </Link>
              </div>
            )}
          </div>

          <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-bold text-operiva-navy dark:text-white font-display">
              Trust and Compliance
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              This artifact is aligned with current South African regulations and has been reviewed by a local expert.
            </p>
            {/* Placeholder for Expert Reviewer component */}
            <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                Reviewed by: **[Expert Name Placeholder]** (Tax Practitioner)
              </p>
              <Link to="/expert-council" className="text-sm text-operiva-blue hover:text-operiva-navy">
                View Expert Council &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
