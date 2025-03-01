import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

const ExchangeSystemProject = () => {
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
          <FormattedMessage id="projects.exchange-system.title" />
        </h1>
        
        {/* Project Overview */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 border-b pb-2">
            <FormattedMessage id="projects.overview" />
          </h2>
          <p className="text-base text-gray-700 dark:text-gray-300">
            <FormattedMessage id="projects.exchange-system.description" />
          </p>
        </section>

        {/* Key Features */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 border-b pb-2">
            <FormattedMessage id="projects.keyFeatures" />
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            <li>
              <strong><FormattedMessage id="projects.exchange-system.features.rates.title" /></strong>: 
              <FormattedMessage id="projects.exchange-system.features.rates.desc" />
            </li>
            <li>
              <strong><FormattedMessage id="projects.exchange-system.features.wallet.title" /></strong>: 
              <FormattedMessage id="projects.exchange-system.features.wallet.desc" />
            </li>
            <li>
              <strong><FormattedMessage id="projects.exchange-system.features.security.title" /></strong>: 
              <FormattedMessage id="projects.exchange-system.features.security.desc" />
            </li>
            <li>
              <strong><FormattedMessage id="projects.exchange-system.features.policy.title" /></strong>: 
              <FormattedMessage id="projects.exchange-system.features.policy.desc" />
            </li>
            <li>
              <strong><FormattedMessage id="projects.exchange-system.features.reports.title" /></strong>: 
              <FormattedMessage id="projects.exchange-system.features.reports.desc" />
            </li>
          </ul>
        </section>

        {/* Project Architecture */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 border-b pb-2">
            <FormattedMessage id="projects.exchange-system.architecture.title" />
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            <FormattedMessage id="projects.exchange-system.architecture.intro" />
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            <li><strong>ExchangeSystemAPI</strong>: <FormattedMessage id="projects.exchange-system.architecture.api" /></li>
            <li><strong>Core</strong>: <FormattedMessage id="projects.exchange-system.architecture.core" /></li>
            <li><strong>Repositories</strong>: <FormattedMessage id="projects.exchange-system.architecture.repositories" /></li>
            <li><strong>Services</strong>: <FormattedMessage id="projects.exchange-system.architecture.services" /></li>
          </ul>
          
          <div className="mt-6 bg-amber-50 dark:bg-gray-800 p-4 rounded-md border border-amber-100 dark:border-gray-700">
            <h3 className="text-lg font-medium mb-3 dark:text-white">
              <FormattedMessage id="projects.exchange-system.benefits.title" />
            </h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300">
              <li><FormattedMessage id="projects.exchange-system.benefits.separation" /></li>
              <li><FormattedMessage id="projects.exchange-system.benefits.injection" /></li>
              <li><FormattedMessage id="projects.exchange-system.benefits.repository" /></li>
              <li><FormattedMessage id="projects.exchange-system.benefits.service" /></li>
              <li><FormattedMessage id="projects.exchange-system.benefits.security" /></li>
            </ul>
          </div>
        </section>

        {/* Technologies Used */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 border-b pb-2">
            <FormattedMessage id="projects.technologies" />
          </h2>
          <div className="flex flex-wrap gap-2 mb-4">
            {[
              '.NET 8', 
              'ASP.NET Core', 
              'Entity Framework Core', 
              'JWT Authentication', 
              'SQL Server', 
              'Repository Pattern',
              'Docker',
              'Swagger/OpenAPI'
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
            <FormattedMessage id="projects.exchange-system.tech.description" />
          </p>
        </section>

        {/* Implementation Details */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 border-b pb-2">
            <FormattedMessage id="projects.exchange-system.implementation.title" />
          </h2>
          
          <div className="space-y-4">
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
              <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                <FormattedMessage id="projects.exchange-system.controller.rates.title" />
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <FormattedMessage id="projects.exchange-system.controller.rates.desc" />
              </p>
              <ul className="list-disc pl-6 mt-2 text-sm text-gray-700 dark:text-gray-300">
                <li><FormattedMessage id="projects.exchange-system.controller.rates.list1" /></li>
                <li><FormattedMessage id="projects.exchange-system.controller.rates.list2" /></li>
                <li><FormattedMessage id="projects.exchange-system.controller.rates.list3" /></li>
                <li><FormattedMessage id="projects.exchange-system.controller.rates.list4" /></li>
                <li><FormattedMessage id="projects.exchange-system.controller.rates.list5" /></li>
              </ul>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
              <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                <FormattedMessage id="projects.exchange-system.controller.wallet.title" />
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <FormattedMessage id="projects.exchange-system.controller.wallet.desc" />
              </p>
              <ul className="list-disc pl-6 mt-2 text-sm text-gray-700 dark:text-gray-300">
                <li><FormattedMessage id="projects.exchange-system.controller.wallet.list1" /></li>
                <li><FormattedMessage id="projects.exchange-system.controller.wallet.list2" /></li>
                <li><FormattedMessage id="projects.exchange-system.controller.wallet.list3" /></li>
                <li><FormattedMessage id="projects.exchange-system.controller.wallet.list4" /></li>
              </ul>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
              <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                <FormattedMessage id="projects.exchange-system.security.title" />
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <FormattedMessage id="projects.exchange-system.security.desc" />
              </p>
              <ul className="list-disc pl-6 mt-2 text-sm text-gray-700 dark:text-gray-300">
                <li><FormattedMessage id="projects.exchange-system.security.list1" /></li>
                <li><FormattedMessage id="projects.exchange-system.security.list2" /></li>
                <li><FormattedMessage id="projects.exchange-system.security.list3" /></li>
                <li><FormattedMessage id="projects.exchange-system.security.list4" /></li>
                <li><FormattedMessage id="projects.exchange-system.security.list5" /></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Technical Diagram */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 border-b pb-2">
            <FormattedMessage id="projects.exchange-system.diagram.title" />
          </h2>
          <div className="border dark:border-gray-700 rounded-md p-4 bg-white dark:bg-gray-800">
            <div className="flex flex-col gap-4">
              <div className="text-center p-2 bg-blue-100 dark:bg-blue-900 rounded border border-blue-200 dark:border-blue-800">
                <p className="font-medium"><FormattedMessage id="projects.exchange-system.diagram.clients" /></p>
              </div>
              
              <div className="flex justify-center">
                <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
              </div>
              
              <div className="text-center p-2 bg-green-100 dark:bg-green-900 rounded border border-green-200 dark:border-green-800">
                <p className="font-medium"><FormattedMessage id="projects.exchange-system.diagram.api" /></p>
                <p className="text-xs mt-1 text-gray-600 dark:text-gray-400">
                  <FormattedMessage id="projects.exchange-system.diagram.api.desc" />
                </p>
              </div>
              
              <div className="flex justify-center">
                <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
              </div>
              
              <div className="text-center p-2 bg-purple-100 dark:bg-purple-900 rounded border border-purple-200 dark:border-purple-800">
                <p className="font-medium"><FormattedMessage id="projects.exchange-system.diagram.service" /></p>
                <p className="text-xs mt-1 text-gray-600 dark:text-gray-400">
                  <FormattedMessage id="projects.exchange-system.diagram.service.desc" />
                </p>
              </div>
              
              <div className="flex justify-center">
                <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
              </div>
              
              <div className="text-center p-2 bg-yellow-100 dark:bg-yellow-900 rounded border border-yellow-200 dark:border-yellow-800">
                <p className="font-medium"><FormattedMessage id="projects.exchange-system.diagram.repository" /></p>
                <p className="text-xs mt-1 text-gray-600 dark:text-gray-400">
                  <FormattedMessage id="projects.exchange-system.diagram.repository.desc" />
                </p>
              </div>
              
              <div className="flex justify-center">
                <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
              </div>
              
              <div className="text-center p-2 bg-red-100 dark:bg-red-900 rounded border border-red-200 dark:border-red-800">
                <p className="font-medium"><FormattedMessage id="projects.exchange-system.diagram.database" /></p>
                <p className="text-xs mt-1 text-gray-600 dark:text-gray-400">
                  <FormattedMessage id="projects.exchange-system.diagram.database.desc" />
                </p>
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-2">
            <FormattedMessage id="projects.exchange-system.diagram.caption" />
          </p>
        </section>

        {/* Links */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 border-b pb-2">
            <FormattedMessage id="projects.links" />
          </h2>
          <div className="flex gap-4">
            <a 
              href="https://github.com/yusufb202/ExchangeSystemAPI" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded inline-flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <FormattedMessage id="projects.viewGithub" />
            </a>
          </div>
        </section>

        {/* Future Extensions */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 border-b pb-2">
            <FormattedMessage id="projects.exchange-system.future.title" />
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            <FormattedMessage id="projects.exchange-system.future.intro" />
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            <li><FormattedMessage id="projects.exchange-system.future.list1" /></li>
            <li><FormattedMessage id="projects.exchange-system.future.list2" /></li>
            <li><FormattedMessage id="projects.exchange-system.future.list3" /></li>
            <li><FormattedMessage id="projects.exchange-system.future.list4" /></li>
            <li><FormattedMessage id="projects.exchange-system.future.list5" /></li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default ExchangeSystemProject;