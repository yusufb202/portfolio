import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

const GelirGiderProject = () => {
  return (
    <div className="py-8 px-4 md:px-8 flex flex-col items-center bg-[linear-gradient(135deg,rgba(254,249,195,0.97)_0%,rgba(254,226,226,0.95)_50%,rgba(254,215,170,0.93)_100%)]
      dark:bg-[linear-gradient(135deg,rgba(7,15,56,0.98)_0%,rgba(16,23,89,0.97)_25%,rgba(11,15,51,0.95)_50%,rgba(8,47,112,0.93)_75%,rgba(12,71,145,0.9)_100%)]">
      {/* Back to Projects Link */}
      <Link 
        to="/projects" 
        className="self-start mb-6 text-blue-700 dark:text-blue-400 hover:underline flex items-center"
      >
        <svg 
          className="w-4 h-4 mr-1" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M15 19l-7-7 7-7"
          />
        </svg>
        <FormattedMessage id="projects.gelirgider.back" />
      </Link>

      <div className="max-w-4xl w-full">
        <h1 className="text-3xl font-bold mb-4">
          <FormattedMessage id="projects.gelirgider.title" />
        </h1>
        
        {/* Project Overview */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 border-b pb-2">
            <FormattedMessage id="projects.gelirgider.overview" />
          </h2>
          <p className="text-base text-gray-700 dark:text-gray-300">
            <FormattedMessage id="projects.gelirgider.overview.description" />
          </p>
        </section>

        {/* Technologies Used */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 border-b pb-2">
            <FormattedMessage id="projects.gelirgider.technologies" />
          </h2>
          <div className="flex flex-wrap gap-2 mb-4">
            {[
              'React Native',
              'Expo',
              'TypeScript',
              'React Native Paper',
              'AsyncStorage',
              'Expo Router',
              'Expo Notifications',
              'React Native Reanimated'
            ].map((tech, index) => (
              <span
                key={index}
                className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 border-b pb-2">
            <FormattedMessage id="projects.gelirgider.keyFeatures" />
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-indigo-50 dark:bg-indigo-900/30 p-4 rounded-md border border-indigo-100 dark:border-indigo-800">
              <h3 className="text-lg font-medium mb-3 dark:text-white">
                <FormattedMessage id="projects.gelirgider.dashboard.title" />
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li><FormattedMessage id="projects.gelirgider.dashboard.features.summary" /></li>
                <li><FormattedMessage id="projects.gelirgider.dashboard.features.trends" /></li>
                <li><FormattedMessage id="projects.gelirgider.dashboard.features.actions" /></li>
                <li><FormattedMessage id="projects.gelirgider.dashboard.features.theme" /></li>
              </ul>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-md border border-purple-100 dark:border-purple-800">
              <h3 className="text-lg font-medium mb-3 dark:text-white">
                <FormattedMessage id="projects.gelirgider.expense.title" />
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li><FormattedMessage id="projects.gelirgider.expense.features.category" /></li>
                <li><FormattedMessage id="projects.gelirgider.expense.features.history" /></li>
                <li><FormattedMessage id="projects.gelirgider.expense.features.filter" /></li>
                <li><FormattedMessage id="projects.gelirgider.expense.features.updates" /></li>
              </ul>
            </div>

            <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-md border border-green-100 dark:border-green-800">
              <h3 className="text-lg font-medium mb-3 dark:text-white">
                <FormattedMessage id="projects.gelirgider.budget.title" />
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li><FormattedMessage id="projects.gelirgider.budget.features.category" /></li>
                <li><FormattedMessage id="projects.gelirgider.budget.features.tracking" /></li>
                <li><FormattedMessage id="projects.gelirgider.budget.features.notifications" /></li>
                <li><FormattedMessage id="projects.gelirgider.budget.features.overview" /></li>
              </ul>
            </div>

            <div className="bg-amber-50 dark:bg-amber-900/30 p-4 rounded-md border border-amber-100 dark:border-amber-800">
              <h3 className="text-lg font-medium mb-3 dark:text-white">
                <FormattedMessage id="projects.gelirgider.savings.title" />
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li><FormattedMessage id="projects.gelirgider.savings.features.creation" /></li>
                <li><FormattedMessage id="projects.gelirgider.savings.features.tracking" /></li>
                <li><FormattedMessage id="projects.gelirgider.savings.features.contribution" /></li>
                <li><FormattedMessage id="projects.gelirgider.savings.features.dashboard" /></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Technical Implementation */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 border-b pb-2">
            <FormattedMessage id="projects.gelirgider.technical.title" />
          </h2>
          <div className="space-y-6">
            <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-md border border-blue-100 dark:border-blue-800">
              <h3 className="text-lg font-medium mb-3 dark:text-white">
                <FormattedMessage id="projects.gelirgider.architecture.title" />
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li><FormattedMessage id="projects.gelirgider.architecture.features.routing" /></li>
                <li><FormattedMessage id="projects.gelirgider.architecture.features.storage" /></li>
                <li><FormattedMessage id="projects.gelirgider.architecture.features.models" /></li>
                <li><FormattedMessage id="projects.gelirgider.architecture.features.state" /></li>
                <li><FormattedMessage id="projects.gelirgider.architecture.features.hooks" /></li>
              </ul>
            </div>

            <div className="bg-red-50 dark:bg-red-900/30 p-4 rounded-md border border-red-100 dark:border-red-800">
              <h3 className="text-lg font-medium mb-3 dark:text-white">
                <FormattedMessage id="projects.gelirgider.ux.title" />
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li><FormattedMessage id="projects.gelirgider.ux.features.material" /></li>
                <li><FormattedMessage id="projects.gelirgider.ux.features.theme" /></li>
                <li><FormattedMessage id="projects.gelirgider.ux.features.responsive" /></li>
                <li><FormattedMessage id="projects.gelirgider.ux.features.haptic" /></li>
                <li><FormattedMessage id="projects.gelirgider.ux.features.i18n" /></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Additional Features */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 border-b pb-2">
            <FormattedMessage id="projects.gelirgider.additional.title" />
          </h2>
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-6 rounded-lg">
            <ul className="list-disc pl-6 space-y-3 text-gray-700 dark:text-gray-300">
              <li><FormattedMessage id="projects.gelirgider.additional.features.alerts" /></li>
              <li><FormattedMessage id="projects.gelirgider.additional.features.charts" /></li>
              <li><FormattedMessage id="projects.gelirgider.additional.features.language" /></li>
              <li><FormattedMessage id="projects.gelirgider.additional.features.preferences" /></li>
              <li><FormattedMessage id="projects.gelirgider.additional.features.export" /></li>
              <li><FormattedMessage id="projects.gelirgider.additional.features.platform" /></li>
            </ul>
          </div>
        </section>

        {/* Links */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 border-b pb-2">
            <FormattedMessage id="projects.gelirgider.links" />
          </h2>
          <div className="flex gap-4">
            <span className="text-gray-600 dark:text-gray-400 text-lg font-medium">
              <FormattedMessage id="projects.gelirgider.comingSoon" />
            </span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default GelirGiderProject;