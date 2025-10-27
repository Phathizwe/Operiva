// src/pages/CategoryDetail.tsx
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import type { Artifact } from '../types';
import ArtifactCard from '../components/ArtifactCard';
import { getArtifactsByOutcome } from '../services/firestore';
import { getCategoryMapping } from '../components/pyramid/categoryMapping';

export default function CategoryDetail() {
  const { category } = useParams<{ category: string }>();
  const [artifacts, setArtifacts] = useState<Artifact[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const categoryMapping = category ? getCategoryMapping(category) : undefined;

  useEffect(() => {
    const fetchArtifacts = async () => {
      if (!categoryMapping) {
        setError(`Category "${category}" not found.`);
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        // Fetch artifacts for all outcomes in this category
        const artifactPromises = categoryMapping.outcomes.map(outcome => 
          getArtifactsByOutcome(outcome as any)
        );
        
        const artifactArrays = await Promise.all(artifactPromises);
        const allArtifacts = artifactArrays.flat();
        
        // Remove duplicates (in case an artifact belongs to multiple outcomes)
        const uniqueArtifacts = Array.from(
          new Map(allArtifacts.map(a => [a.id, a])).values()
        );
        
        setArtifacts(uniqueArtifacts);
      } catch (err) {
        console.error(`Failed to fetch artifacts for ${categoryMapping.title}:`, err);
        setError(`Failed to load artifacts for ${categoryMapping.title}.`);
      } finally {
        setLoading(false);
      }
    };

    fetchArtifacts();
  }, [category, categoryMapping]);

  if (loading) {
    return <div className="text-center py-20 text-lg text-gray-500">Loading...</div>;
  }

  if (error || !categoryMapping) {
    return (
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-center py-20">
          <p className="text-lg text-red-500">{error || 'Category not found'}</p>
          <Link to="/libraries" className="mt-4 inline-block text-operiva-blue hover:text-operiva-navy">
            &larr; Back to Libraries
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      {/* Back button */}
      <div className="mb-8">
        <Link to="/libraries" className="text-operiva-blue hover:text-operiva-navy">
          &larr; Back to Building Blocks
        </Link>
      </div>

      {/* Category Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl font-display">
          {categoryMapping.title}
        </h1>
        <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          {categoryMapping.description}
        </p>
      </div>

      {/* Artifacts Grid */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-operiva-navy dark:text-white font-display border-b pb-2 mb-8">
          All Tools & Templates ({artifacts.length})
        </h2>
        
        {artifacts.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {artifacts.map((artifact) => (
              <ArtifactCard key={artifact.id} artifact={artifact} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500 dark:text-gray-400 text-center py-8">
            No artifacts available for {categoryMapping.title} yet.
          </p>
        )}
      </div>
    </div>
  );
}

