// src/pages/LibraryDetail.tsx
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import type { Artifact, Track, Outcome } from '../types';
import ArtifactCard from '../components/ArtifactCard';
import { getArtifactsByOutcome, getTracksByOutcome } from '../services/firestore';

// Seed data removed. Using live data from Firestore.
export default function LibraryDetail() {
  const { outcome } = useParams<{ outcome: string }>();
  const [artifacts, setArtifacts] = useState<Artifact[]>([]);
  const [tracks, setTracks] = useState<Track[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [artifactsError, setArtifactsError] = useState<string | null>(null);
  const [tracksError, setTracksError] = useState<string | null>(null);

  // Create a display-friendly title from the URL parameter
  const libraryTitle = outcome 
    ? outcome.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')
    : 'Library';

  useEffect(() => {
    const fetchContent = async () => {
      if (!outcome) return;

      // Define valid outcomes for type safety - make sure to include all values from the Outcome type
      const validOutcomes: Outcome[] = ['Cash', 'Compliance', 'Customers', 'Control', 'Human Capital', 'Strategy'];
      
      // Create a mapping between URL-friendly versions and actual Outcome values
      const outcomeMapping: Record<string, Outcome> = {
        'cash': 'Cash',
        'compliance': 'Compliance',
        'customers': 'Customers',
        'control': 'Control',
        'human-capital': 'Human Capital',
        'humancapital': 'Human Capital',
        'human': 'Human Capital', // Handle partial matches
        'strategy': 'Strategy'
      };
      
      // Normalize the outcome parameter to handle hyphenated values
      const normalizedOutcome = outcomeMapping[outcome.toLowerCase()];
      
      if (!normalizedOutcome || !validOutcomes.includes(normalizedOutcome)) {
        setError(`Invalid library: ${outcome}`);
        setLoading(false);
        return;
      }
      
      setLoading(true);
      setError(null);
      setArtifactsError(null);
      setTracksError(null);
      
      // Use the normalized outcome for fetching data
      try {
        const [fetchedArtifacts, fetchedTracks] = await Promise.all([
          getArtifactsByOutcome(normalizedOutcome).catch(err => {
            console.error(`Failed to fetch ${libraryTitle} artifacts:`, err);
            setArtifactsError(`Failed to load artifacts for the ${libraryTitle} Library.`);
            return [];
          }),
          getTracksByOutcome(normalizedOutcome).catch(err => {
            console.error(`Failed to fetch ${libraryTitle} tracks:`, err);
            setTracksError(`Failed to load tracks for the ${libraryTitle} Library.`);
            return [];
          })
        ]);
        
        setArtifacts(fetchedArtifacts);
        setTracks(fetchedTracks);
      } catch (err) {
        console.error(`Failed to fetch ${libraryTitle} content:`, err);
        setError(`Failed to load content for the ${libraryTitle} Library.`);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [outcome, libraryTitle]);

  if (loading) {
    return <div className="text-center py-20 text-lg text-gray-500">Loading {libraryTitle} Library...</div>;
  }

  if (error) {
    return <div className="text-center py-20 text-lg text-red-500">{error}</div>;
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl font-display">
          {libraryTitle} Acceleration Library
        </h1>
        <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          All the templates, SOPs, and playbooks you need to master your {libraryTitle.toLowerCase()} outcomes.
        </p>
      </div>

      {/* Tracks Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-operiva-navy dark:text-white font-display border-b pb-2 mb-8">
          Implementation Tracks ({tracks.length})
        </h2>
        {tracksError && (
          <div className="text-center py-4">
            <p className="text-red-500">{tracksError}</p>
          </div>
        )}
        
        {!tracksError && tracks.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {tracks.map((track) => (
              <div key={track.id} className="rounded-lg bg-gray-50 dark:bg-gray-700 p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-operiva-blue dark:text-white">{track.title}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{track.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {track.artifactIds.length} Steps • {track.durationMinutes} min
                  </span>
                  <Link
                    to={`/tracks/${track.id}`}
                    className="text-sm font-medium text-progress-green hover:text-operiva-navy"
                  >
                    Start Track &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : !tracksError && (
          <p className="text-gray-500 dark:text-gray-400 text-center py-8">
            No implementation tracks available for {libraryTitle} yet.
          </p>
        )}
      </div>
      
      {/* Artifacts Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-operiva-navy dark:text-white font-display border-b pb-2 mb-8">
          All Artifacts ({artifacts.length})
        </h2>
        
        {artifactsError && (
          <div className="text-center py-4">
            <p className="text-red-500">{artifactsError}</p>
          </div>
        )}
        
        {!artifactsError && artifacts.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {artifacts.map((artifact) => (
              <ArtifactCard key={artifact.id} artifact={artifact} />
            ))}
          </div>
        ) : !artifactsError && (
          <p className="text-gray-500 dark:text-gray-400 text-center py-8">
            No artifacts available for {libraryTitle} yet.
          </p>
        )}
      </div>
    </div>
  );
}