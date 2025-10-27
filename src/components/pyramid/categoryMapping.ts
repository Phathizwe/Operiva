// src/components/pyramid/categoryMapping.ts
// Maps pyramid categories to Firestore outcomes for filtering artifacts

export interface CategoryMapping {
  id: string;
  title: string;
  outcomes: string[]; // Firestore outcome values
  description: string;
}

export const categoryMappings: Record<string, CategoryMapping> = {
  'money-funding': {
    id: 'money-funding',
    title: 'Money & Funding',
    outcomes: ['Cash'],
    description: 'Master your cash flow, pricing, budgeting, and funding strategies.'
  },
  'legal-paperwork': {
    id: 'legal-paperwork',
    title: 'Legal & Paperwork',
    outcomes: ['Compliance'],
    description: 'Stay compliant with CIPC, SARS, POPIA, and labour law requirements.'
  },
  'daily-operations': {
    id: 'daily-operations',
    title: 'Daily Operations',
    outcomes: ['Control'],
    description: 'Streamline your day-to-day business operations and processes.'
  },
  'suppliers-stock': {
    id: 'suppliers-stock',
    title: 'Suppliers & Stock',
    outcomes: ['Control'],
    description: 'Manage your inventory, suppliers, and quality control effectively.'
  },
  'customers-sales': {
    id: 'customers-sales',
    title: 'Customers & Sales',
    outcomes: ['Customers'],
    description: 'Grow your customer base and increase sales with proven strategies.'
  },
  'going-digital': {
    id: 'going-digital',
    title: 'Going Digital',
    outcomes: ['Customers', 'Control'],
    description: 'Leverage digital tools and online marketing to expand your reach.'
  },
  'people-leadership': {
    id: 'people-leadership',
    title: 'People & Leadership',
    outcomes: ['Human Capital'],
    description: 'Build and lead high-performing teams with effective HR practices.'
  },
  'planning-business': {
    id: 'planning-business',
    title: 'Planning Your Business',
    outcomes: ['Strategy'],
    description: 'Create winning strategies and plans for sustainable business growth.'
  }
};

// Helper function to get category by ID
export function getCategoryMapping(categoryId: string): CategoryMapping | undefined {
  return categoryMappings[categoryId];
}

// Helper function to get all category IDs
export function getAllCategoryIds(): string[] {
  return Object.keys(categoryMappings);
}

// Helper function to find category by artifact ID
// This checks the pyramidData to see which category contains this artifact
export function getCategoryByArtifactId(artifactId: string): CategoryMapping | undefined {
  // Import pyramidData dynamically to avoid circular dependency
  const { pyramidLayers } = require('./pyramidData');
  
  for (const layer of pyramidLayers) {
    for (const category of layer.categories) {
      const hasArtifact = category.tools.some((tool: any) => tool.artifactId === artifactId);
      if (hasArtifact) {
        return categoryMappings[category.id];
      }
    }
  }
  
  return undefined;
}

