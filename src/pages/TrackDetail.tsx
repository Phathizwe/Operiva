// src/pages/TrackDetail.tsx
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Track } from '../types';
import TrackStep from '../components/TrackStep';
import { ClockIcon, ArrowPathIcon, LockClosedIcon } from '@heroicons/react/24/outline';

// Seed data for a single track (to be replaced by live Firestore data)
const seedTrack: Track = {
  id: 't1',
  title: 'Reduce DSO in 30 Days',
  description: 'A 7-step guided track to implement a robust collections process, improve your Days Sales Outstanding (DSO) metric, and get paid faster.',
  outcome: 'Cash',
  durationMinutes: 90,
  artifactIds: ['a1', 'a2', 'a4', 'a5', 'a6', 'a7', 'a8'], // Example artifact IDs
  isPremium: true,
};

// Mock steps data for the track
const mockSteps = [
  { title: 'Review Current Invoicing Process', description: 'Ensure all invoices are VAT-compliant and include clear payment terms.', artifactId: 'a1', isCompleted: true },
  { title: 'Implement Day 3 Reminder', description: 'Send a friendly reminder email 3 days before the due date.', artifactId: 'a2', isCompleted: false },
  { title: 'Send Overdue Notice (Day 7)', description: 'Escalate the reminder with a formal overdue notice.', artifactId: 'a2', isCompleted: false },
  { title: 'Update Debtor Aging Spreadsheet', description: 'Log the status of all outstanding invoices in your tracking sheet.', artifactId: 'a4', isCompleted: false },
  { title: 'Review Collections SOP', description: 'Familiarize yourself with the full collections procedure for 30+ day debtors.', artifactId: 'a3', isCompleted: false },
  { title: 'Offer Early Payment Incentive', description: 'Use the calculator to determine a viable early payment discount for new clients.', artifactId: 'a4', isCompleted: false },
  { title: 'Final Review and KPI Check', description: 'Calculate your new DSO and set a target for the next 30 days.', isCompleted: false },
];

export default function TrackDetail() {
  const { id } = useParams<{ id: string }>();
  const [track, setTrack] = useState<Track | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTrack = async () => {
      if (!id) return;

      try {
        // In a real app, we would use a firestore function to get the track
        // For now, we use seed data
        setTrack(seedTrack);
      } catch (err) {
        console.error(`Failed to fetch track ${id}:`, err);
        setError(`Failed to load track details.`);
      } finally {
        setLoading(false);
      }
    };

    fetchTrack();
  }, [id]);

  if (loading) {
    return <div className="text-center py-20 text-lg text-gray-500">Loading Track Details...</div>;
  }

  if (error) {
    return <div className="text-center py-20 text-lg text-red-500">{error}</div>;
  }

  if (!track) {
    return <div className="text-center py-20 text-lg text-gray-500">Track not found.</div>;
  }

  // Mock user status - assume not logged in or not Pro
  const isPremium = track.isPremium;
  const isUnlocked = !isPremium; // For demo, we'll assume it's unlocked if not premium

  return (
    <div className="mx-auto max-w-4xl py-10">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl font-display">
          {track.title}
        </h1>
        <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          {track.description}
        </p>
        <div className="mt-4 flex justify-center space-x-6 text-gray-500 dark:text-gray-400">
          <span className="flex items-center">
            <ClockIcon className="h-5 w-5 mr-1 text-operiva-blue" />
            {track.durationMinutes} Minutes
          </span>
          <span className="flex items-center">
            <ArrowPathIcon className="h-5 w-5 mr-1 text-operiva-blue" />
            {mockSteps.length} Steps
          </span>
        </div>
      </div>

      <div className="mt-12">
        {isPremium && !isUnlocked ? (
          <div className="text-center p-10 rounded-lg bg-gray-50 dark:bg-gray-700 border border-amber-alert/50">
            <LockClosedIcon className="h-10 w-10 text-amber-alert mx-auto" />
            <p className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
              Pro Membership Required to Access This Track
            </p>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              This Implementation Track is part of the Pro Library, designed for serious operators.
            </p>
            <Link
              to="/pricing"
              className="mt-6 inline-flex items-center rounded-lg bg-amber-alert px-6 py-3 text-base font-semibold text-white shadow-md hover:bg-amber-alert/90"
            >
              View Pricing & Upgrade
            </Link>
          </div>
        ) : (
          <ol className="space-y-8">
            {mockSteps.map((step, index) => (
              <TrackStep
                key={index}
                stepNumber={index + 1}
                title={step.title}
                description={step.description}
                artifactId={step.artifactId}
                isCompleted={step.isCompleted}
              />
            ))}
          </ol>
        )}
      </div>
    </div>
  );
}
