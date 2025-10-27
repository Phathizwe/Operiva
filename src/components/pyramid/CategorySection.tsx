// src/components/pyramid/CategorySection.tsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ToolCard, { type Tool } from './ToolCard';

export interface Category {
  id: string;
  title: string;
  color: string;
  tools: Tool[];
}

interface CategorySectionProps {
  category: Category;
  isExpanded?: boolean;
}

export default function CategorySection({ category, isExpanded = true }: CategorySectionProps) {
  const [expanded, setExpanded] = useState(isExpanded);

  return (
    <div
      className="rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl"
      style={{ backgroundColor: category.color }}
    >
      {/* Category header */}
      <div className="flex items-center">
        <Link 
          to={`/libraries/category/${category.id}`}
          className="flex-1 px-4 py-3 flex items-center gap-2 text-white hover:bg-black/10 transition-colors"
        >
          <h3 className="text-lg font-bold uppercase tracking-wide">{category.title}</h3>
          <span className="text-sm font-medium bg-white/20 px-2 py-0.5 rounded-full">
            {category.tools.length} tools
          </span>
        </Link>
        <button
          onClick={() => setExpanded(!expanded)}
          className="px-4 py-3 text-white hover:bg-black/10 transition-colors"
          aria-label={expanded ? 'Collapse section' : 'Expand section'}
        >
          <svg
            className={`w-5 h-5 transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Tools grid - shown when expanded */}
      {expanded && (
        <div className="p-4 bg-white/95 backdrop-blur-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {category.tools.map((tool) => (
              <ToolCard key={tool.code} tool={tool} categoryColor={category.color} />
            ))}
          </div>
        </div>
      )}

      {/* Collapsed view - show tool count */}
      {!expanded && (
        <div className="px-4 py-2 bg-white/10 text-white text-sm text-center">
          Click to view {category.tools.length} tools
        </div>
      )}
    </div>
  );
}

