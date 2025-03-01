import { Link } from 'react-router-dom';
import { FormattedMessage, useIntl } from 'react-intl';

const ECommerceAppProject = () => {
  const intl = useIntl();

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
          <FormattedMessage id="projects.ecommerce-app.title" />
        </h1>
        
        {/* Project Overview */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 border-b pb-2">
            <FormattedMessage id="projects.overview" />
          </h2>
          <p className="text-base text-gray-700 dark:text-gray-300">
            <FormattedMessage id="projects.ecommerce-app.description" />
          </p>
        </section>

        {/* Key Features */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 border-b pb-2">
            <FormattedMessage id="projects.keyFeatures" />
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            <li>
              <strong><FormattedMessage id="projects.ecommerce-app.features.listings.title" /></strong>: 
              <FormattedMessage id="projects.ecommerce-app.features.listings.desc" />
            </li>
            <li>
              <strong><FormattedMessage id="projects.ecommerce-app.features.cart.title" /></strong>: 
              <FormattedMessage id="projects.ecommerce-app.features.cart.desc" />
            </li>
            <li>
              <strong><FormattedMessage id="projects.ecommerce-app.features.checkout.title" /></strong>: 
              <FormattedMessage id="projects.ecommerce-app.features.checkout.desc" />
            </li>
            <li>
              <strong><FormattedMessage id="projects.ecommerce-app.features.auth.title" /></strong>: 
              <FormattedMessage id="projects.ecommerce-app.features.auth.desc" />
            </li>
            <li>
              <strong><FormattedMessage id="projects.ecommerce-app.features.responsive.title" /></strong>: 
              <FormattedMessage id="projects.ecommerce-app.features.responsive.desc" />
            </li>
            <li>
              <strong><FormattedMessage id="projects.ecommerce-app.features.theme.title" /></strong>: 
              <FormattedMessage id="projects.ecommerce-app.features.theme.desc" />
            </li>
          </ul>
        </section>

        {/* Technologies Used */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 border-b pb-2">
            <FormattedMessage id="projects.technologies" />
          </h2>
          <div className="flex flex-wrap gap-2 mb-4">
            {['React', 'TypeScript', 'Tailwind CSS', 'React Router', 'Redux Toolkit', 'React Query', 'Vite', 'Framer Motion'].map((tech, index) => (
              <span
                key={index}
                className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
          <p className="text-gray-700 dark:text-gray-300">
            <FormattedMessage id="projects.ecommerce-app.techStack" />
          </p>
        </section>

        {/* Implementation Details */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 border-b pb-2">
            <FormattedMessage id="projects.implementationDetails" />
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            <FormattedMessage id="projects.ecommerce-app.implementationDetails" />
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            <li><strong><FormattedMessage id="projects.ecommerce-app.implementation.components" /></strong></li>
            <li><strong><FormattedMessage id="projects.ecommerce-app.implementation.pages" /></strong></li>
            <li><strong><FormattedMessage id="projects.ecommerce-app.implementation.hooks" /></strong></li>
            <li><strong><FormattedMessage id="projects.ecommerce-app.implementation.services" /></strong></li>
            <li><strong><FormattedMessage id="projects.ecommerce-app.implementation.store" /></strong></li>
            <li><strong><FormattedMessage id="projects.ecommerce-app.implementation.utils" /></strong></li>
          </ul>
          
          <div className="mt-8">
            <h3 className="text-lg font-medium mb-3 dark:text-white">
              <FormattedMessage id="projects.ecommerce-app.screenshots.title" />
            </h3>
            
            {/* Display all screenshots full-width and stacked for better visibility */}
            <div className="space-y-6">
              {/* Auth page */}
              <div className="border dark:border-gray-700 rounded overflow-hidden">
                <img 
                  src="https://github.com/yusufb202/E-Commerce-React-Web-App/raw/main/src/App%20Images/LoginPage.jpg" 
                  alt={intl.formatMessage({ id: 'projects.ecommerce-app.screenshots.auth.alt' })}
                  className="w-full h-auto object-contain"
                />
                <p className="py-2 px-3 bg-gray-100 dark:bg-gray-800 text-sm text-gray-600 dark:text-gray-400">
                  <FormattedMessage id="projects.ecommerce-app.screenshots.auth.caption" />
                </p>
              </div>
              
              {/* Homepage */}
              <div className="border dark:border-gray-700 rounded overflow-hidden">
                <img 
                  src="https://github.com/yusufb202/E-Commerce-React-Web-App/raw/main/src/App%20Images/Homepage.jpg" 
                  alt={intl.formatMessage({ id: 'projects.ecommerce-app.screenshots.home.alt' })}
                  className="w-full h-auto object-contain"
                />
                <p className="py-2 px-3 bg-gray-100 dark:bg-gray-800 text-sm text-gray-600 dark:text-gray-400">
                  <FormattedMessage id="projects.ecommerce-app.screenshots.home.caption" />
                </p>
              </div>
              
              {/* Shopping Cart & Checkout */}
              <div className="border dark:border-gray-700 rounded overflow-hidden">
                <img 
                  src="https://github.com/yusufb202/E-Commerce-React-Web-App/raw/main/src/App%20Images/ShoppingCart-Checkout.jpg" 
                  alt={intl.formatMessage({ id: 'projects.ecommerce-app.screenshots.cart.alt' })}
                  className="w-full h-auto object-contain"
                />
                <p className="py-2 px-3 bg-gray-100 dark:bg-gray-800 text-sm text-gray-600 dark:text-gray-400">
                  <FormattedMessage id="projects.ecommerce-app.screenshots.cart.caption" />
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Links */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 border-b pb-2">
            <FormattedMessage id="projects.links" />
          </h2>
          <div className="flex gap-4">
            <a 
              href="https://github.com/yusufb202/E-Commerce-React-Web-App" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded inline-flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
              </svg>
              <FormattedMessage id="projects.viewGithub" />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ECommerceAppProject;