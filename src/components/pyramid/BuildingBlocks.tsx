// src/components/pyramid/BuildingBlocks.tsx
import PyramidLayer from './PyramidLayer';
import PyramidLegend from './PyramidLegend';
import { pyramidLayers } from './pyramidData';

export default function BuildingBlocks() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10" id="top">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl font-display">
          The Operiva SMME Building Blocks
        </h1>
        <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Build Your Business Step-by-Step: 40 Ready-to-Use Tools for South African Small Businesses
        </p>
        <p className="mt-2 text-base text-gray-500 dark:text-gray-500 max-w-2xl mx-auto">
          Start with a strong foundation, grow to the top
        </p>
      </div>

      {/* Visual indicator - Start Here */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex items-center gap-2 bg-operiva-blue/10 dark:bg-operiva-blue/20 px-6 py-3 rounded-full">
          <span className="text-sm font-semibold text-operiva-blue dark:text-white">
            👇 Start at the Foundation
          </span>
        </div>
      </div>

      {/* Pyramid Layers - Render in reverse order (Foundation first) */}
      <div className="space-y-8">
        {[...pyramidLayers].reverse().map((layer, index) => (
          <PyramidLayer key={layer.id} layer={layer} index={index} />
        ))}
      </div>

      {/* Visual indicator - Your Goal */}
      <div className="flex justify-center mt-8 mb-16">
        <div className="inline-flex items-center gap-2 bg-progress-green/10 dark:bg-progress-green/20 px-6 py-3 rounded-full">
          <span className="text-sm font-semibold text-progress-green dark:text-white">
            🎯 Vision: Your Goal
          </span>
        </div>
      </div>

      {/* Legend */}
      <PyramidLegend />

      {/* CTA Section */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-operiva-navy dark:text-white font-display mb-4">
          Ready to Build Your Business?
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
          Get access to all premium tools with our Core or Pro membership
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/pricing"
            className="rounded-lg bg-progress-green px-8 py-3 text-base font-semibold text-white shadow-md hover:bg-operiva-blue transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-progress-green"
          >
            View Pricing
          </a>
          <a
            href="/packs"
            className="rounded-lg px-8 py-3 text-base font-semibold text-operiva-blue ring-1 ring-operiva-blue hover:bg-operiva-blue/10 dark:text-white dark:ring-white dark:hover:bg-white/10 transition-colors"
          >
            Explore Premium Packs
          </a>
        </div>
      </div>
    </div>
  );
}

