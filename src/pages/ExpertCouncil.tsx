// src/pages/ExpertCouncil.tsx
import { Link } from 'react-router-dom';
import { BriefcaseIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

// Seed data for Expert Council
const experts = [
  {
    id: 'e1',
    name: 'Nomusa Dlamini',
    role: 'Chartered Accountant (SA)',
    focus: 'Tax, Cash Flow, and Capital Readiness',
    bio: 'Nomusa is a seasoned CA with over 15 years of experience advising SMMEs on financial compliance and growth strategies. She validates all our Cash and Capital readiness artifacts.',
    imageUrl: 'https://via.placeholder.com/150/1F5EFF/FFFFFF?text=ND', // Placeholder image
  },
  {
    id: 'e2',
    name: 'Thabo Mokoena',
    role: 'POPIA & Compliance Specialist',
    focus: 'POPIA, CIPC, and Governance',
    bio: 'Thabo is a leading expert in South African data privacy and corporate governance. He ensures all our Compliance artifacts are up-to-date with the latest regulations.',
    imageUrl: 'https://via.placeholder.com/150/12C48B/FFFFFF?text=TM', // Placeholder image
  },
  {
    id: 'e3',
    name: 'Lindiwe Zulu',
    role: 'Sector Veteran (Retail & Spaza)',
    focus: 'Operations and Customer Growth',
    bio: 'Lindiwe has successfully run multiple retail businesses and provides practical, on-the-ground validation for our Operations and Customer Growth SOPs.',
    imageUrl: 'https://via.placeholder.com/150/F4A100/FFFFFF?text=LZ', // Placeholder image
  },
];

export default function ExpertCouncil() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl font-display">
          The Operiva Expert Council
        </h1>
        <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Our content is validated by local South African professionals to ensure accuracy, compliance, and real-world practicality.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
        {experts.map((expert) => (
          <div key={expert.id} className="flex flex-col items-center text-center">
            <img
              className="h-32 w-32 rounded-full object-cover shadow-lg ring-4 ring-operiva-blue/50"
              src={expert.imageUrl}
              alt={expert.name}
            />
            <h3 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white font-display">
              {expert.name}
            </h3>
            <p className="text-operiva-blue font-medium mt-1 flex items-center">
              <AcademicCapIcon className="h-5 w-5 mr-1" />
              {expert.role}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 flex items-center">
              <BriefcaseIcon className="h-4 w-4 mr-1" />
              Focus: {expert.focus}
            </p>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-400 max-w-xs">
              {expert.bio}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-20 text-center border-t border-gray-200 dark:border-gray-700 pt-12">
        <h2 className="text-3xl font-bold text-operiva-navy dark:text-white font-display">
          Want to join the council?
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          We are always looking for sector veterans and compliance experts to co-create and validate our content.
        </p>
        <Link
          to="/contact"
          className="mt-6 inline-flex items-center rounded-lg bg-progress-green px-6 py-3 text-base font-semibold text-white shadow-md hover:bg-operiva-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-progress-green"
        >
          Apply to be an Expert
        </Link>
      </div>
    </div>
  );
}
