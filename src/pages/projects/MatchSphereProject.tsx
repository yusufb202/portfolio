import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

const MatchSphereProject = () => {
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
        <FormattedMessage id="projects.back" />
      </Link>

      <div className="max-w-4xl w-full">
        <h1 className="text-3xl font-bold mb-4">
          <FormattedMessage id="projects.matchsphere.title" />
        </h1>
        
        {/* Project Overview */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 border-b pb-2">
            <FormattedMessage id="projects.overview" />
          </h2>
          <p className="text-base text-gray-700 dark:text-gray-300">
            <FormattedMessage id="projects.matchsphere.description" />
          </p>
        </section>

        {/* Technologies Used */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 border-b pb-2">
            <FormattedMessage id="projects.technologies" />
          </h2>
          <div className="flex flex-wrap gap-2 mb-4">
            {[
              'React Native',
              'Expo',
              'Supabase',
              'React Context API',
              'React Native Reanimated',
              'Expo Router',
              'Expo Location',
              'React Native Animated'
            ].map((tech, index) => (
              <span
                key={index}
                className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
          <p className="text-gray-700 dark:text-gray-300">
            <FormattedMessage id="projects.matchsphere.techStack" />
          </p>
        </section>

        {/* Key Features */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 border-b pb-2">
            <FormattedMessage id="projects.keyFeatures" />
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-indigo-50 dark:bg-indigo-900/30 p-4 rounded-md border border-indigo-100 dark:border-indigo-800">
              <h3 className="text-lg font-medium mb-3 dark:text-white">
                <FormattedMessage id="projects.matchsphere.features.auth.title" />
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li><FormattedMessage id="projects.matchsphere.features.auth.list1" /></li>
                <li><FormattedMessage id="projects.matchsphere.features.auth.list2" /></li>
                <li><FormattedMessage id="projects.matchsphere.features.auth.list3" /></li>
                <li><FormattedMessage id="projects.matchsphere.features.auth.list4" /></li>
                <li><FormattedMessage id="projects.matchsphere.features.auth.list5" /></li>
              </ul>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-md border border-purple-100 dark:border-purple-800">
              <h3 className="text-lg font-medium mb-3 dark:text-white">
                <FormattedMessage id="projects.matchsphere.features.discovery.title" />
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li><FormattedMessage id="projects.matchsphere.features.discovery.list1" /></li>
                <li><FormattedMessage id="projects.matchsphere.features.discovery.list2" /></li>
                <li><FormattedMessage id="projects.matchsphere.features.discovery.list3" /></li>
                <li><FormattedMessage id="projects.matchsphere.features.discovery.list4" /></li>
                <li><FormattedMessage id="projects.matchsphere.features.discovery.list5" /></li>
              </ul>
            </div>

            <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-md border border-green-100 dark:border-green-800">
              <h3 className="text-lg font-medium mb-3 dark:text-white">
                <FormattedMessage id="projects.matchsphere.features.messaging.title" />
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li><FormattedMessage id="projects.matchsphere.features.messaging.list1" /></li>
                <li><FormattedMessage id="projects.matchsphere.features.messaging.list2" /></li>
                <li><FormattedMessage id="projects.matchsphere.features.messaging.list3" /></li>
                <li><FormattedMessage id="projects.matchsphere.features.messaging.list4" /></li>
                <li><FormattedMessage id="projects.matchsphere.features.messaging.list5" /></li>
              </ul>
            </div>

            <div className="bg-amber-50 dark:bg-amber-900/30 p-4 rounded-md border border-amber-100 dark:border-amber-800">
              <h3 className="text-lg font-medium mb-3 dark:text-white">
                <FormattedMessage id="projects.matchsphere.features.ux.title" />
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li><FormattedMessage id="projects.matchsphere.features.ux.list1" /></li>
                <li><FormattedMessage id="projects.matchsphere.features.ux.list2" /></li>
                <li><FormattedMessage id="projects.matchsphere.features.ux.list3" /></li>
                <li><FormattedMessage id="projects.matchsphere.features.ux.list4" /></li>
                <li><FormattedMessage id="projects.matchsphere.features.ux.list5" /></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Technical Implementation */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 border-b pb-2">
            <FormattedMessage id="projects.implementationDetails" />
          </h2>
          <div className="space-y-6">
            <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-md border border-blue-100 dark:border-blue-800">
              <h3 className="text-lg font-medium mb-3 dark:text-white">
                <FormattedMessage id="projects.matchsphere.tech.architecture.title" />
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li><FormattedMessage id="projects.matchsphere.tech.architecture.list1" /></li>
                <li><FormattedMessage id="projects.matchsphere.tech.architecture.list2" /></li>
                <li><FormattedMessage id="projects.matchsphere.tech.architecture.list3" /></li>
                <li><FormattedMessage id="projects.matchsphere.tech.architecture.list4" /></li>
                <li><FormattedMessage id="projects.matchsphere.tech.architecture.list5" /></li>
              </ul>
            </div>

            <div className="bg-red-50 dark:bg-red-900/30 p-4 rounded-md border border-red-100 dark:border-red-800">
              <h3 className="text-lg font-medium mb-3 dark:text-white">
                <FormattedMessage id="projects.matchsphere.tech.features.title" />
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li><FormattedMessage id="projects.matchsphere.tech.features.list1" /></li>
                <li><FormattedMessage id="projects.matchsphere.tech.features.list2" /></li>
                <li><FormattedMessage id="projects.matchsphere.tech.features.list3" /></li>
                <li><FormattedMessage id="projects.matchsphere.tech.features.list4" /></li>
                <li><FormattedMessage id="projects.matchsphere.tech.features.list5" /></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Links */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 border-b pb-2">
            <FormattedMessage id="projects.links" />
          </h2>
          <div className="flex gap-4">
            <span className="text-gray-600 dark:text-gray-400 text-lg font-medium">
              <FormattedMessage id="projects.erp.comingSoon" />
            </span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MatchSphereProject;