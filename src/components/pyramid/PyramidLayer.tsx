// src/components/pyramid/PyramidLayer.tsx
import CategorySection, { type Category } from './CategorySection';

export interface Layer {
  id: string;
  title: string;
  subtitle: string;
  categories: Category[];
  width: string; // Tailwind width class (e.g., 'w-full', 'w-11/12')
}

interface PyramidLayerProps {
  layer: Layer;
  index: number;
}

export default function PyramidLayer({ layer, index }: PyramidLayerProps) {
  return (
    <div className="flex flex-col items-center mb-6">
      {/* Layer label */}
      <div className="mb-3 text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-display">
          {layer.title}
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{layer.subtitle}</p>
      </div>

      {/* Layer content - responsive width based on layer */}
      <div className={`${layer.width} mx-auto`}>
        <div
          className={`grid gap-4 ${
            layer.categories.length === 1
              ? 'grid-cols-1'
              : layer.categories.length === 2
              ? 'grid-cols-1 md:grid-cols-2'
              : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
          }`}
        >
          {layer.categories.map((category) => (
            <CategorySection key={category.id} category={category} />
          ))}
        </div>
      </div>

      {/* Visual connector to next layer (except for last layer) */}
      {index < 3 && (
        <div className="mt-6 mb-2 flex flex-col items-center">
          <div className="w-0.5 h-8 bg-gradient-to-b from-gray-300 to-transparent dark:from-gray-600"></div>
          <svg
            className="w-6 h-6 text-gray-300 dark:text-gray-600"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      )}
    </div>
  );
}

