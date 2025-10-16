// src/pages/Tracks.tsx
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import type { Track } from '../types';
import { getAllTracks } from '../services/firestore';
import { ClockIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

// This page will display all tracks, grouped by their Outcome
export default function Tracks() {
  const [tracksByOutcome, setTracksByOutcome] = useState<Record<string, Track[]>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAllTracks = async () => {
      try {
        // Use the getAllTracks function to fetch all tracks in one query
        const allTracks = await getAllTracks();
        
        // Group tracks by outcome
        const groupedTracks = allTracks.reduce<Record<string, Track[]>>((acc, track) => {
          const key = track.outcome;
          if (!acc[key]) {
            acc[key] = [];
          }
          acc[key].push(track);
          return acc;
        }, {});
        
        setTracksByOutcome(groupedTracks);
      } catch (err) {
        console.error("Failed to fetch all tracks:", err);
        setError("Failed to load implementation tracks. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    
    fetchAllTracks();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-10">
        <p className="text-lg text-gray-500 dark:text-gray-400">Loading Implementation Tracks...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10">
        <p className="text-lg text-red-500">{error}</p>
      </div>
    );
  }

  // Sort outcomes alphabetically for consistent display
  const outcomes = Object.keys(tracksByOutcome).sort();

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl font-display">
          All Implementation Tracks
        </h1>
        <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Guided, step-by-step playbooks to help you master a specific business challenge.
        </p>
      </div>

      <div className="mt-12 space-y-16">
        {outcomes.map((outcome) => (
          <div key={outcome}>
            <h2 className="text-3xl font-bold text-operiva-navy dark:text-white font-display border-b pb-2 mb-8">
              {outcome} Tracks ({tracksByOutcome[outcome].length})
            </h2>
            
            {tracksByOutcome[outcome].length > 0 ? (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {tracksByOutcome[outcome].map((track) => (
                  <div key={track.id} className="rounded-lg bg-white dark:bg-gray-800 p-6 shadow-lg border border-gray-100 dark:border-gray-700">
                    <h3 className="text-xl font-semibold text-operiva-blue dark:text-white">{track.title}</h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-300 line-clamp-3">{track.description}</p>
                    <div className="mt-4 flex justify-between items-center border-t border-gray-100 dark:border-gray-700 pt-4">
                      <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                        <span className="flex items-center">
                          <CheckCircleIcon className="h-4 w-4 mr-1 text-progress-green" />
                          {track.artifactIds.length} Steps
                        </span>
                        <span className="flex items-center">
                          <ClockIcon className="h-4 w-4 mr-1" />
                          {track.durationMinutes} min
                        </span>
                      </div>
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
            ) : (
              <p className="text-gray-500 dark:text-gray-400 text-center py-8">
                No tracks available for {outcome} yet.
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}