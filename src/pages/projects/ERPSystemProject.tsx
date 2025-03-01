import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

const ERPSystemProject = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const intl = useIntl();
  
  const projectImages = [
    "/portfolio/assets/images/projects/ERP/1.jpg",
    "/portfolio/assets/images/projects/ERP/2.jpg",
    "/portfolio/assets/images/projects/ERP/3.jpg",
    "/portfolio/assets/images/projects/ERP/4.jpg",
    "/portfolio/assets/images/projects/ERP/5.jpg",
    "/portfolio/assets/images/projects/ERP/6.jpg",
    "/portfolio/assets/images/projects/ERP/7.jpg"
  ];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % projectImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + projectImages.length) % projectImages.length);
  };

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
          <FormattedMessage id="projects.erp.title" />
        </h1>
        
        {/* Project Overview */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 border-b pb-2">
            <FormattedMessage id="projects.overview" />
          </h2>
          <p className="text-base text-gray-700 dark:text-gray-300">
            <FormattedMessage id="projects.erp-system.description" />
          </p>
        </section>

        {/* Project Screenshots */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 border-b pb-2">
            <FormattedMessage id="projects.erp.screenshots" />
          </h2>
          <div className="relative w-full border dark:border-gray-700 rounded-lg overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <img 
                src={projectImages[currentImageIndex]} 
                alt={intl.formatMessage(
                  { id: 'projects.erp.imageAlt' },
                  { index: currentImageIndex + 1 }
                )}
                className="w-full h-auto object-contain bg-gray-50 dark:bg-gray-800"
              />
              
              {/* Navigation Buttons */}
              <button 
                onClick={prevImage}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-r focus:outline-none"
                aria-label={intl.formatMessage({ id: 'projects.previous' })}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>
              
              <button 
                onClick={nextImage}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-l focus:outline-none"
                aria-label={intl.formatMessage({ id: 'projects.next' })}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
            
            {/* Image Indicators */}
            <div className="flex justify-center gap-2 py-2 bg-gray-100 dark:bg-gray-800">
              {projectImages.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full focus:outline-none ${
                    index === currentImageIndex ? 'bg-blue-600' : 'bg-gray-400'
                  }`}
                  aria-label={intl.formatMessage(
                    { id: 'projects.goToImage' },
                    { index: index + 1 }
                  )}
                />
              ))}
            </div>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-2">
            <FormattedMessage
              id="projects.erp.imageCaption"
              values={{
                current: currentImageIndex + 1,
                total: projectImages.length
              }}
            />
          </p>
        </section>

        {/* Key Features */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 border-b pb-2">
            <FormattedMessage id="projects.keyFeatures" />
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
              <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                <FormattedMessage id="projects.erp.frontendFeatures" />
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li><FormattedMessage id="projects.erp.features.frontend.modern" /></li>
                <li><FormattedMessage id="projects.erp.features.frontend.dashboard" /></li>
                <li><FormattedMessage id="projects.erp.features.frontend.tracking" /></li>
                <li><FormattedMessage id="projects.erp.features.frontend.desktop" /></li>
                <li><FormattedMessage id="projects.erp.features.frontend.validation" /></li>
                <li><FormattedMessage id="projects.erp.features.frontend.darkMode" /></li>
                <li><FormattedMessage id="projects.erp.features.frontend.multilang" /></li>
                <li><FormattedMessage id="projects.erp.features.frontend.filtering" /></li>
                <li><FormattedMessage id="projects.erp.features.frontend.excel" /></li>
                <li><FormattedMessage id="projects.erp.features.frontend.notifications" /></li>
              </ul>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
              <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                <FormattedMessage id="projects.erp.backendCapabilities" />
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li><FormattedMessage id="projects.erp.features.backend.auth" /></li>
                <li><FormattedMessage id="projects.erp.features.backend.crud" /></li>
                <li><FormattedMessage id="projects.erp.features.backend.ef" /></li>
                <li><FormattedMessage id="projects.erp.features.backend.clean" /></li>
                <li><FormattedMessage id="projects.erp.features.backend.swagger" /></li>
                <li><FormattedMessage id="projects.erp.features.backend.cache" /></li>
                <li><FormattedMessage id="projects.erp.features.backend.migrations" /></li>
                <li><FormattedMessage id="projects.erp.features.backend.error" /></li>
                <li><FormattedMessage id="projects.erp.features.backend.files" /></li>
                <li><FormattedMessage id="projects.erp.features.backend.jobs" /></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Architecture & Technical Implementation */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 border-b pb-2">
            <FormattedMessage id="projects.erp.technicalArchitecture" />
          </h2>
          <div className="space-y-6">
            <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-md border border-blue-100 dark:border-blue-800">
              <h3 className="text-lg font-medium mb-3 dark:text-white">
                <FormattedMessage id="projects.erp.frontendArchitecture" />
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li><FormattedMessage id="projects.erp.arch.frontend.components" /></li>
                <li><FormattedMessage id="projects.erp.arch.frontend.state" /></li>
                <li><FormattedMessage id="projects.erp.arch.frontend.service" /></li>
                <li><FormattedMessage id="projects.erp.arch.frontend.routing" /></li>
                <li><FormattedMessage id="projects.erp.arch.frontend.responsive" /></li>
              </ul>
            </div>

            <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-md border border-green-100 dark:border-green-800">
              <h3 className="text-lg font-medium mb-3 dark:text-white">
                <FormattedMessage id="projects.erp.backendArchitecture" />
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li><FormattedMessage id="projects.erp.arch.backend.layers" /></li>
                <li><FormattedMessage id="projects.erp.arch.backend.identity" /></li>
                <li><FormattedMessage id="projects.erp.arch.backend.ef" /></li>
                <li><FormattedMessage id="projects.erp.arch.backend.repository" /></li>
                <li><FormattedMessage id="projects.erp.arch.backend.di" /></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Module Details */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 border-b pb-2">
            <FormattedMessage id="projects.erp.coreModules" />
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-indigo-50 dark:bg-indigo-900/30 p-4 rounded-md border border-indigo-100 dark:border-indigo-800">
              <h3 className="text-lg font-medium mb-3 dark:text-white">
                <FormattedMessage id="projects.erp.productManagement" />
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li><FormattedMessage id="projects.erp.modules.product.catalog" /></li>
                <li><FormattedMessage id="projects.erp.modules.product.inventory" /></li>
                <li><FormattedMessage id="projects.erp.modules.product.price" /></li>
                <li><FormattedMessage id="projects.erp.modules.product.gallery" /></li>
                <li><FormattedMessage id="projects.erp.modules.product.barcode" /></li>
              </ul>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-md border border-purple-100 dark:border-purple-800">
              <h3 className="text-lg font-medium mb-3 dark:text-white">
                <FormattedMessage id="projects.erp.orderProcessing" />
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li><FormattedMessage id="projects.erp.modules.order.workflow" /></li>
                <li><FormattedMessage id="projects.erp.modules.order.tracking" /></li>
                <li><FormattedMessage id="projects.erp.modules.order.invoice" /></li>
                <li><FormattedMessage id="projects.erp.modules.order.shipping" /></li>
                <li><FormattedMessage id="projects.erp.modules.order.returns" /></li>
              </ul>
            </div>

            <div className="bg-emerald-50 dark:bg-emerald-900/30 p-4 rounded-md border border-emerald-100 dark:border-emerald-800">
              <h3 className="text-lg font-medium mb-3 dark:text-white">
                <FormattedMessage id="projects.erp.analyticsReporting" />
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li><FormattedMessage id="projects.erp.modules.analytics.dashboard" /></li>
                <li><FormattedMessage id="projects.erp.modules.analytics.reports" /></li>
                <li><FormattedMessage id="projects.erp.modules.analytics.sales" /></li>
                <li><FormattedMessage id="projects.erp.modules.analytics.forecast" /></li>
                <li><FormattedMessage id="projects.erp.modules.analytics.metrics" /></li>
              </ul>
            </div>

            <div className="bg-amber-50 dark:bg-amber-900/30 p-4 rounded-md border border-amber-100 dark:border-amber-800">
              <h3 className="text-lg font-medium mb-3 dark:text-white">
                <FormattedMessage id="projects.erp.userManagement" />
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li><FormattedMessage id="projects.erp.modules.user.rbac" /></li>
                <li><FormattedMessage id="projects.erp.modules.user.activity" /></li>
                <li><FormattedMessage id="projects.erp.modules.user.password" /></li>
                <li><FormattedMessage id="projects.erp.modules.user.mfa" /></li>
                <li><FormattedMessage id="projects.erp.modules.user.session" /></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Technologies Used */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 border-b pb-2">
            <FormattedMessage id="projects.technologies" />
          </h2>
          <div className="flex flex-wrap gap-2 mb-4">
            {[
              'React 18', 
              'ASP.NET Core 8', 
              'TypeScript',
              'Entity Framework',
              'SQL Server',
              'JWT Auth',
              'Electron',
              'Recharts',
              'Axios',
              'Identity Framework'
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

export default ERPSystemProject;