// src/pages/Libraries.tsx
import { useEffect, useState } from 'react';
import { Library } from '../types';
import { getLibraries } from '../services/firestore';
import LibraryCard from '../components/LibraryCard';

// Seed data for the Libraries page until Firestore is fully populated
const initialLibraries: Library[] = [
  { id: '1', outcome: 'Cash', title: 'Cash Acceleration', description: 'Ready-to-use templates for invoicing, collections, debtor management, and cash flow optimization.', artifactCount: 12, trackCount: 3 },
  { id: '2', outcome: 'Compliance', title: 'Compliance & Governance', description: 'Step-by-step packs for CIPC, SARS, POPIA, and COIDA, plus policy bundles and filing calendars.', artifactCount: 18, trackCount: 4 },
  { id: '3', outcome: 'Customers', title: 'Customers & Growth', description: 'Go-to-market playbooks, campaign briefs, content calendars, and proposal decks to win and retain customers.', artifactCount: 10, trackCount: 2 },
  { id: '4', outcome: 'Control', title: 'Operations & Control', description: 'SOP templates, inventory spreadsheets, reorder point calculators, and supplier scorecards for efficient operations.', artifactCount: 15, trackCount: 3 },
  { id: '5', outcome: 'Capital', title: 'Capital Readiness', description: 'Pitch deck and data room templates, KPI dashboards, and funding application checklists to secure investment.', artifactCount: 8, trackCount: 1 },
];

export default function Libraries() {
  const [libraries, setLibraries] = useState<Library[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLibraries = async () => {
      try {
        // In a real app, we would use getLibraries() from firestore.ts
        // const data = await getLibraries();
        // For now, we use seed data until the database is populated
        setLibraries(initialLibraries);
      } catch (err) {
        console.error("Failed to fetch libraries:", err);
        setError("Failed to load libraries. Please try again later.");
        setLibraries(initialLibraries); // Fallback to seed data
      } finally {
        setLoading(false);
      }
    };

    fetchLibraries();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-10">
        <p className="text-lg text-gray-500 dark:text-gray-400">Loading Libraries...</p>
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

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl font-display">
          The Operiva Libraries
        </h1>
        <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Browse our ready-to-use digital products, grouped by the five core outcomes that drive every successful South African SMME.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {libraries.map((library) => (
          <LibraryCard key={library.id} library={library} />
        ))}
      </div>

      <div className="mt-20 text-center">
        <h2 className="text-2xl font-bold text-operiva-navy dark:text-white font-display">
          Looking for something specific?
        </h2>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
          Use our powerful search or check out our premium Packs marketplace.
        </p>
        <div className="mt-6 flex justify-center space-x-4">
          <Link
            to="/packs"
            className="rounded-lg bg-progress-green px-6 py-3 text-base font-semibold text-white shadow-md hover:bg-operiva-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-progress-green"
          >
            Explore Premium Packs
          </Link>
          <Link
            to="/pricing"
            className="rounded-lg px-6 py-3 text-base font-semibold text-operiva-blue ring-1 ring-operiva-blue hover:bg-operiva-blue/10 dark:text-white dark:ring-white dark:hover:bg-white/10"
          >
            View Membership Tiers
          </Link>
        </div>
      </div>
    </div>
  );
}
