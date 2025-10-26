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
          { code: 'PB-01', name: 'Business Model Canvas', isPremium: false },
          { code: 'PB-02', name: 'CHAT Business Framework', isPremium: false },
          { code: 'PB-03', name: 'Setting Goals', isPremium: false },
          { code: 'PB-04', name: 'Competitor Analysis', isPremium: false },
          { code: 'PB-05', name: 'Starting Your Business', isPremium: false },
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
          { code: 'CS-01', name: 'Marketing Playbook', isPremium: false },
          { code: 'CS-02', name: 'Sales Scripts', isPremium: false },
          { code: 'CS-03', name: 'Social Media Guide', isPremium: false },
          { code: 'CS-04', name: 'Customer Service', isPremium: false },
          { code: 'CS-05', name: 'Keeping Customers', isPremium: false },
          { code: 'CS-06', name: 'Pricing Psychology', isPremium: true },
        ],
      },
      {
        id: 'going-digital',
        title: 'Going Digital',
        color: '#06B6D4', // Cyan
        tools: [
          { code: 'GD-01', name: 'Website Basics', isPremium: false },
          { code: 'GD-02', name: 'Selling Online', isPremium: false },
          { code: 'GD-03', name: 'WhatsApp for Business', isPremium: false },
          { code: 'GD-04', name: 'Facebook & Instagram', isPremium: false },
          { code: 'GD-05', name: 'Google My Business', isPremium: false },
        ],
      },
      {
        id: 'people-leadership',
        title: 'People & Leadership',
        color: '#8B5CF6', // Purple
        tools: [
          { code: 'PL-01', name: 'Hiring the Right People', isPremium: false },
          { code: 'PL-02', name: 'Managing Your Team', isPremium: false },
          { code: 'PL-03', name: 'Performance Reviews', isPremium: false },
          { code: 'PL-04', name: 'Owner Skills Assessment', isPremium: false },
          { code: 'PL-05', name: 'Building Company Culture', isPremium: true },
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
          { code: 'DO-01', name: 'Standard Procedures', isPremium: false },
          { code: 'DO-02', name: 'Load Shedding Solutions', isPremium: false },
          { code: 'DO-03', name: 'Quality Control', isPremium: false },
          { code: 'DO-04', name: 'Safety Checklist', isPremium: false },
          { code: 'DO-05', name: 'Time Management', isPremium: false },
        ],
      },
      {
        id: 'suppliers-stock',
        title: 'Suppliers & Stock',
        color: '#F59E0B', // Amber
        tools: [
          { code: 'SS-01', name: 'Supplier Agreements', isPremium: false },
          { code: 'SS-02', name: 'Stock Management', isPremium: false },
          { code: 'SS-03', name: 'Ordering System', isPremium: false },
          { code: 'SS-04', name: 'Delivery Tracking', isPremium: false },
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
          { code: 'MF-01', name: 'Cash Flow Forecasting', isPremium: false },
          { code: 'MF-02', name: 'Pricing Strategy', isPremium: false },
          { code: 'MF-03', name: 'Cost Control Workbook', isPremium: false },
          { code: 'MF-04', name: 'Getting a Business Loan', isPremium: true },
          { code: 'MF-05', name: 'Invoice Templates', isPremium: false },
        ],
      },
      {
        id: 'legal-paperwork',
        title: 'Legal & Paperwork',
        color: '#2563EB', // Royal blue
        tools: [
          { code: 'LP-01', name: 'POPIA Compliance', isPremium: false },
          { code: 'LP-02', name: 'CIPC Annual Returns', isPremium: false },
          { code: 'LP-03', name: 'SARS Tax Guide', isPremium: false },
          { code: 'LP-04', name: 'Contracts & Agreements', isPremium: true },
          { code: 'LP-05', name: 'Risk Management', isPremium: false },
        ],
      },
    ],
  },
];

