// src/components/pyramid/PyramidLegend.tsx

export default function PyramidLegend() {
  return (
    <div className="mt-16 bg-gradient-to-r from-operiva-blue/5 to-progress-green/5 dark:from-operiva-blue/10 dark:to-progress-green/10 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-display">
        How to Build Your Business
      </h3>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-operiva-blue text-white flex items-center justify-center font-bold">
            1
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
              Start at the Foundation
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Get your money and legal matters right first. These are the basics every business needs.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-progress-green text-white flex items-center justify-center font-bold">
            2
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Build Upward</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Each layer supports the next. Master operations, then grow your customer base and go digital.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold">
            ⭐
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Premium Tools</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Tools marked with a star are available to Core and Pro members. Upgrade to unlock them.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          💡 <strong>Tip:</strong> Click any section to see all the tools inside. Click a tool to download templates, guides, and worksheets.
        </p>
        <a
          href="#top"
          className="text-sm font-semibold text-operiva-blue hover:text-progress-green dark:text-white dark:hover:text-progress-green transition-colors"
        >
          Back to Top ↑
        </a>
      </div>
    </div>
  );
}

