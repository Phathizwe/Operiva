// src/components/pyramid/ToolCard.tsx
import { Link } from 'react-router-dom';

export interface Tool {
  code: string;
  name: string;
  isPremium?: boolean;
  artifactId?: string; // Link to actual artifact in Firestore
}

interface ToolCardProps {
  tool: Tool;
  categoryColor: string;
}

export default function ToolCard({ tool, categoryColor }: ToolCardProps) {
  const cardContent = (
    <div
      className="relative bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer group border border-gray-100"
      style={{
        borderLeftColor: categoryColor,
        borderLeftWidth: '3px',
      }}
    >
      {/* Premium badge */}
      {tool.isPremium && (
        <div className="absolute -top-2 -right-2 bg-amber-400 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shadow-md">
          ⭐
        </div>
      )}

      {/* Tool code */}
      <div className="text-xs font-bold text-gray-500 mb-1">{tool.code}</div>

      {/* Tool name */}
      <div className="text-sm font-medium text-gray-900 leading-tight group-hover:text-operiva-blue transition-colors">
        {tool.name}
      </div>
    </div>
  );

  // If artifactId exists, make it a link
  if (tool.artifactId) {
    return (
      <Link to={`/artifact/${tool.artifactId}`} className="block">
        {cardContent}
      </Link>
    );
  }

  // Otherwise, just render the card
  return cardContent;
}

