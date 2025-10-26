// src/components/pyramid/pyramidData.ts
import type { Layer } from './PyramidLayer';

export const pyramidLayers: Layer[] = [
  // LAYER 4: VISION (Top)
  {
    id: 'vision',
    title: 'VISION',
    subtitle: 'Plan Your Future',
    width: 'w-full md:w-4/5 lg:w-3/5',
    categories: [
      {
        id: 'planning-business',
        title: 'Planning Your Business',
        color: '#1E40AF', // Navy blue
        tools: [
          { code: 'PB-01', name: 'Business Model Canvas', isPremium: false, artifactId: 's1' },
          { code: 'PB-02', name: 'CHAT Business Framework', isPremium: false, artifactId: 's6' },
          { code: 'PB-03', name: 'SWOT Analysis Pack', isPremium: false, artifactId: 's2' },
          { code: 'PB-04', name: 'Competitor Analysis', isPremium: true, artifactId: 's4' },
          { code: 'PB-05', name: 'Market Entry Playbook', isPremium: true, artifactId: 's5' },
        ],
      },
    ],
  },

  // LAYER 3: GROWTH
  {
    id: 'growth',
    title: 'GROWTH',
    subtitle: 'Expand Your Reach',
    width: 'w-full md:w-11/12 lg:w-4/5',
    categories: [
      {
        id: 'customers-sales',
        title: 'Customers & Sales',
        color: '#F97316', // Orange
        tools: [
          { code: 'CS-01', name: 'Social Media Content Calendar', isPremium: false, artifactId: 'g1' },
          { code: 'CS-02', name: 'Sales Pitch Deck', isPremium: true, artifactId: 'g4' },
          { code: 'CS-03', name: 'Go-to-Market Strategy', isPremium: false, artifactId: 'gjwSvIBv9R7HMuYMuW5C' },
          { code: 'CS-04', name: 'Customer Journey Map', isPremium: true, artifactId: 'g2' },
          { code: 'CS-05', name: 'Customer Retention Survey', isPremium: false, artifactId: 'g5' },
          { code: 'CS-06', name: 'Google My Business Guide', isPremium: false, artifactId: 'g3' },
        ],
      },
      {
        id: 'going-digital',
        title: 'Going Digital',
        color: '#06B6D4', // Cyan
        tools: [
          { code: 'GD-01', name: 'Digital Tool Integration', isPremium: true, artifactId: 'o4' },
          { code: 'GD-02', name: 'Social Media Calendar', isPremium: false, artifactId: 'g1' },
          { code: 'GD-03', name: 'Google My Business', isPremium: false, artifactId: 'g3' },
          { code: 'GD-04', name: 'Go-to-Market Strategy', isPremium: false, artifactId: 'gjwSvIBv9R7HMuYMuW5C' },
          { code: 'GD-05', name: 'Customer Journey Mapping', isPremium: true, artifactId: 'g2' },
        ],
      },
      {
        id: 'people-leadership',
        title: 'People & Leadership',
        color: '#8B5CF6', // Purple
        tools: [
          { code: 'PL-01', name: 'Employee Onboarding', isPremium: false, artifactId: 'h2' },
          { code: 'PL-02', name: 'Performance Review Template', isPremium: true, artifactId: 'h3' },
          { code: 'PL-03', name: 'Owner Skills Assessment', isPremium: false, artifactId: 'h1' },
          { code: 'PL-04', name: 'Time Management Guide', isPremium: true, artifactId: 'h4' },
          { code: 'PL-05', name: 'Succession Planning', isPremium: true, artifactId: 'h5' },
        ],
      },
    ],
  },

  // LAYER 2: OPERATIONS
  {
    id: 'operations',
    title: 'OPERATIONS',
    subtitle: 'Run Your Business Smoothly',
    width: 'w-full md:w-11/12',
    categories: [
      {
        id: 'daily-operations',
        title: 'Daily Operations',
        color: '#374151', // Dark gray
        tools: [
          { code: 'DO-01', name: 'Load Shedding Plan', isPremium: false, artifactId: 'o1' },
          { code: 'DO-02', name: 'Inventory Management SOP', isPremium: true, artifactId: 'o2' },
          { code: 'DO-03', name: 'Quality Control Checklist', isPremium: false, artifactId: 'o5' },
          { code: 'DO-04', name: 'Supplier Scorecard', isPremium: true, artifactId: 'o3' },
          { code: 'DO-05', name: 'Digital Tool Integration', isPremium: true, artifactId: 'o4' },
        ],
      },
      {
        id: 'suppliers-stock',
        title: 'Suppliers & Stock',
        color: '#F59E0B', // Amber
        tools: [
          { code: 'SS-01', name: 'Supplier Scorecard', isPremium: true, artifactId: 'o3' },
          { code: 'SS-02', name: 'Inventory Management', isPremium: true, artifactId: 'o2' },
          { code: 'SS-03', name: 'Quality Control', isPremium: false, artifactId: 'o5' },
          { code: 'SS-04', name: 'Load Shedding Plan', isPremium: false, artifactId: 'o1' },
        ],
      },
    ],
  },

  // LAYER 1: FOUNDATION (Bottom)
  {
    id: 'foundation',
    title: 'FOUNDATION',
    subtitle: 'Get Your Basics Right',
    width: 'w-full',
    categories: [
      {
        id: 'money-funding',
        title: 'Money & Funding',
        color: '#10B981', // Bright green
        tools: [
          { code: 'MF-01', name: 'Cash Flow Forecasting', isPremium: false, artifactId: 'c1' },
          { code: 'MF-02', name: 'Pricing Strategy Calculator', isPremium: false, artifactId: 'c2' },
          { code: 'MF-03', name: 'Budget vs Actual Tracker', isPremium: true, artifactId: 'c5' },
          { code: 'MF-04', name: 'Breakeven Analysis', isPremium: true, artifactId: 'c3' },
          { code: 'MF-05', name: 'Invoice Template Pack', isPremium: false, artifactId: 'c4' },
        ],
      },
      {
        id: 'legal-paperwork',
        title: 'Legal & Paperwork',
        color: '#2563EB', // Royal blue
        tools: [
          { code: 'LP-01', name: 'POPIA Compliance Toolkit', isPremium: true, artifactId: 'l2' },
          { code: 'LP-02', name: 'CIPC Annual Returns', isPremium: false, artifactId: 'l1' },
          { code: 'LP-03', name: 'SARS Tax Guide', isPremium: false, artifactId: 'l3' },
          { code: 'LP-04', name: 'Employment Contract', isPremium: true, artifactId: 'l4' },
          { code: 'LP-05', name: 'Risk Assessment', isPremium: false, artifactId: 'l5' },
        ],
      },
    ],
  },
];

