// src/pages/ArtifactDetail.tsx
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import type { Artifact } from '../types';
import { getArtifact } from '../services/firestore';
import { ArrowDownTrayIcon, LockClosedIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import { useAuth } from '../context/AuthContext';

// Seed data removed. Using live data from Firestore.

export default function ArtifactDetail() {
  const { id } = useParams<{ id: string }>();
  // Remove unused variable
  const { hasMembership } = useAuth();
  const [artifact, setArtifact] = useState<Artifact | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArtifact = async () => {
      if (!id) return;

      try {
        const fetchedArtifact = await getArtifact(id);
        if (fetchedArtifact) {
          // Convert Firestore Timestamp to Date object if needed
          if (fetchedArtifact.lastUpdated && typeof fetchedArtifact.lastUpdated.toDate === 'function') {
            fetchedArtifact.lastUpdated = fetchedArtifact.lastUpdated.toDate();
          }
          setArtifact(fetchedArtifact);
        } else {
          setError(`Artifact with ID ${id} not found.`);
        }
      } catch (err) {
        console.error(`Failed to fetch artifact ${id}:`, err);
        setError('Failed to load the artifact. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchArtifact();
  }, [id]);

  if (loading) {
    return <div className="text-center py-20 text-lg text-gray-500">Loading artifact...</div>;
  }

  if (error) {
    return <div className="text-center py-20 text-lg text-red-500">{error}</div>;
  }

  if (!artifact) {
    return <div className="text-center py-20 text-lg text-gray-500">Artifact not found.</div>;
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8">
        <Link to={`/libraries/${artifact.outcome.toLowerCase()}`} className="text-operiva-blue hover:text-operiva-navy">
          &larr; Back to {artifact.outcome} Library
        </Link>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        {/* Artifact Header */}
        <div className="bg-gradient-to-r from-operiva-blue to-operiva-navy p-6 sm:p-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white">{artifact.title}</h1>
              <p className="mt-2 text-operiva-light">{artifact.description}</p>
            </div>
            <div className="mt-4 md:mt-0">
              {artifact.isPremium && !hasMembership ? (
                <button 
                  disabled
                  className="flex items-center px-4 py-2 bg-gray-300 text-gray-700 rounded-md cursor-not-allowed"
                >
                  <LockClosedIcon className="h-5 w-5 mr-2" />
                  Premium Content
                </button>
              ) : (
                <a 
                  href={artifact.downloadUrl} 
                  download
                  className="flex items-center px-4 py-2 bg-white text-operiva-navy rounded-md hover:bg-operiva-light"
                >
                  <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
                  Download
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Artifact Content */}
        <div className="p-6 sm:p-10">
          {/* Metadata */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-sm border-b border-gray-200 dark:border-gray-700 pb-6">
            <div>
              <p className="text-gray-500 dark:text-gray-400">Type</p>
              <p className="font-medium text-gray-900 dark:text-white">{artifact.type}</p>
            </div>
            <div>
              <p className="text-gray-500 dark:text-gray-400">Last Updated</p>
              <p className="font-medium text-gray-900 dark:text-white">
                {artifact.lastUpdated ? new Date(artifact.lastUpdated).toLocaleDateString() : 'Unknown'}
              </p>
            </div>
            <div>
              <p className="text-gray-500 dark:text-gray-400">Format</p>
              <p className="font-medium text-gray-900 dark:text-white">{artifact.fileFormat || artifact.fileType}</p>
            </div>
          </div>

          {/* Preview Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Preview</h2>
            <div className="aspect-[16/9] bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
              {artifact.isPremium && !hasMembership ? (
                <div className="text-center p-6">
                  <LockClosedIcon className="h-12 w-12 mx-auto text-gray-400" />
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    This premium content requires a membership to view.
                  </p>
                  <Link 
                    to="/pricing" 
                    className="mt-4 inline-block px-4 py-2 bg-operiva-blue text-white rounded-md hover:bg-operiva-navy"
                  >
                    Upgrade to Access
                  </Link>
                </div>
              ) : (
                <img 
                  src={artifact.previewImageUrl || '/placeholder-preview.jpg'} 
                  alt={`Preview of ${artifact.title}`}
                  className="object-contain h-full w-full"
                />
              )}
            </div>
          </div>

          {/* Benefits Section */}
          {artifact.benefits && artifact.benefits.length > 0 && (
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Benefits</h2>
              <ul className="space-y-2">
                {artifact.benefits.map((benefit: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-progress-green mr-2 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Usage Instructions */}
          {artifact.usageInstructions && (
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">How to Use</h2>
              <div className="prose prose-operiva dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300">{artifact.usageInstructions}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}