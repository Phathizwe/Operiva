// src/pages/Packs.tsx
import { useState, useEffect } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../config/firebase';
import { Link } from 'react-router-dom';

interface Artifact {
  id: string;
  title: string;
  description: string;
  outcome: string;
  type: string;
  fileType: string;
  isPremium: boolean;
  previewImageUrl?: string;
  downloadUrl: string;
}

interface Pack {
  id: string;
  name: string;
  description: string;
  price: number;
  artifacts: string[];
  outcome: string;
  savings: number;
}

const Packs = () => {
  const [premiumArtifacts, setPremiumArtifacts] = useState<Artifact[]>([]);
  const [loading, setLoading] = useState(true);

  // Curated packs (can be moved to Firestore later)
  const packs: Pack[] = [
    {
      id: 'strategy-essentials',
      name: 'Strategy Essentials Pack',
      description: 'Everything you need to plan and execute your business strategy',
      price: 499,
      artifacts: ['s3', 's4', 's5'],
      outcome: 'Strategy',
      savings: 150
    },
    {
      id: 'cash-mastery',
      name: 'Cash Flow Mastery Pack',
      description: 'Master your cash flow with forecasting, credit control, and cost management',
      price: 399,
      artifacts: ['a1', 'a2', 'a3', 'a4', 'a5'],
      outcome: 'Cash',
      savings: 200
    },
    {
      id: 'people-leadership',
      name: 'People & Leadership Pack',
      description: 'Build a high-performing team with delegation, performance reviews, and succession planning',
      price: 449,
      artifacts: ['h3', 'h4', 'h5'],
      outcome: 'Human Capital',
      savings: 100
    },
    {
      id: 'compliance-bundle',
      name: 'Compliance Bundle',
      description: 'Stay compliant with POPIA, B-BBEE, and other SA regulations',
      price: 349,
      artifacts: ['c1', 'c2', 'c3'],
      outcome: 'Compliance',
      savings: 80
    }
  ];

  useEffect(() => {
    const fetchPremiumArtifacts = async () => {
      try {
        const q = query(collection(db, 'artifacts'), where('isPremium', '==', true));
        const querySnapshot = await getDocs(q);
        const artifacts: Artifact[] = [];
        querySnapshot.forEach((doc) => {
          artifacts.push({ id: doc.id, ...doc.data() } as Artifact);
        });
        setPremiumArtifacts(artifacts);
      } catch (error) {
        console.error('Error fetching premium artifacts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPremiumArtifacts();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-operiva-blue"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-operiva-blue to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Premium Packs</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Curated bundles of premium artifacts to accelerate your business growth. Save up to 30% compared to individual purchases.
          </p>
        </div>
      </div>

      {/* Packs Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Packs</h2>
          <p className="text-lg text-gray-600">
            Each pack includes multiple premium artifacts, expert guidance, and actionable templates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {packs.map((pack) => (
            <div key={pack.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{pack.name}</h3>
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                      {pack.outcome}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-operiva-blue">R{pack.price}</div>
                    <div className="text-sm text-green-600 font-medium">Save R{pack.savings}</div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6">{pack.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Includes {pack.artifacts.length} Premium Artifacts:</h4>
                  <ul className="space-y-2">
                    {pack.artifacts.map((artifactId) => {
                      const artifact = premiumArtifacts.find(a => a.id === artifactId);
                      return artifact ? (
                        <li key={artifactId} className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm text-gray-700">{artifact.title}</span>
                        </li>
                      ) : null;
                    })}
                  </ul>
                </div>
                
                <button className="w-full bg-operiva-blue text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
                  Buy Pack - R{pack.price}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Individual Premium Artifacts */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Individual Premium Artifacts</h2>
          <p className="text-lg text-gray-600 mb-8">
            Or purchase individual premium artifacts à la carte.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {premiumArtifacts.map((artifact) => (
              <Link
                key={artifact.id}
                to={`/artifacts/${artifact.id}`}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                {artifact.previewImageUrl && (
                  <div className="h-48 bg-gray-200 overflow-hidden">
                    <img 
                      src={artifact.previewImageUrl} 
                      alt={artifact.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <span className="inline-block px-2 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded">
                      PREMIUM
                    </span>
                    <span className="text-sm text-gray-500">{artifact.fileType}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{artifact.title}</h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">{artifact.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{artifact.outcome}</span>
                    <span className="text-operiva-blue font-semibold">View Details →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-operiva-blue to-blue-700 rounded-lg p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help Choosing?</h2>
          <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
            Not sure which pack is right for you? Take our 2-minute assessment to get personalized recommendations.
          </p>
          <button className="bg-white text-operiva-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
            Take Assessment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Packs;

