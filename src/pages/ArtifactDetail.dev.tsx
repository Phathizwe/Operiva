// src/pages/ArtifactDetail.dev.tsx - Development version with mock data
import { Link } from 'react-router-dom';
import type { Artifact } from '../types';
import { ArrowDownTrayIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

// Mock data for testing
const mockArtifact: Artifact = {
  id: 's1',
  title: 'Business Model Canvas (SA Edition)',
  description: 'The flagship strategic planning tool adapted for South African SMMEs, with local examples and a step-by-step guide to design and validate your business model.',
  outcome: 'Strategy',
  type: 'Template',
  version: 'v1.0',
  lastUpdated: new Date('2025-10-17'),
  downloadUrl: 'https://firebasestorage.googleapis.com/v0/b/operiva.firebasestorage.app/o/artifacts%2Fbusiness-model-canvas%2FBusiness-Model-Canvas-SA-Edition.zip?alt=media&token=91b72ab4-350f-457b-bb83-778bb9e1af25',
  fileType: 'ZIP',
  fileFormat: 'ZIP',
  previewImageUrl: '/images/previews/business-model-canvas.png',
  isPremium: false,
  benefits: [
    'Design and validate your business model with a proven framework',
    'Includes step-by-step guide with South African examples',
    'Excel worksheets for hands-on planning',
    'PowerPoint presentation for stakeholder communication',
    'Comprehensive PDF briefing document'
  ],
  usageInstructions: 'Download the ZIP package and extract all files. Start with the README file (00-README.txt) for an overview. Read the PDF guide (01-Business-Model-Canvas-Guide-SA-Edition.pdf) to understand the framework, then use the Excel worksheet (02-Business-Model-Canvas-Worksheet.xlsx) to design your business model. Use the PowerPoint presentation (03-Business-Model-Canvas-Briefing.pptx) to communicate your strategy to stakeholders.'
};

export default function ArtifactDetailDev() {
  const artifact = mockArtifact;

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
              <a 
                href={artifact.downloadUrl} 
                download
                className="flex items-center px-4 py-2 bg-white text-operiva-navy rounded-md hover:bg-operiva-light"
              >
                <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
                Download
              </a>
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
            <div className="aspect-[16/9] bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center overflow-hidden">
              <img 
                src={artifact.previewImageUrl || '/placeholder-preview.jpg'} 
                alt={`Preview of ${artifact.title}`}
                className="object-contain h-full w-full"
              />
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

