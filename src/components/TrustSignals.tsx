// src/components/TrustSignals.tsx
import { CheckBadgeIcon, ShieldCheckIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

const signals = [
  {
    name: 'SA-Compliant',
    description: 'All templates are verified against CIPC, SARS, and POPIA regulations.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Expert-Vetted',
    description: 'Content is reviewed by our Expert Council of local accountants and lawyers.',
    icon: AcademicCapIcon,
  },
  {
    name: 'Proven Playbooks',
    description: 'Built on 10+ years of operational experience in the South African SMME sector.',
    icon: CheckBadgeIcon,
  },
];

export default function TrustSignals() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {signals.map((signal) => (
          <div key={signal.name} className="flex flex-col items-center text-center">
            <signal.icon className="h-10 w-10 text-progress-green" aria-hidden="true" />
            <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">{signal.name}</h3>
            <p className="mt-2 text-base text-gray-600 dark:text-gray-400">{signal.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
