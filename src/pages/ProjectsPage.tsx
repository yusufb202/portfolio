import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage, useIntl } from 'react-intl';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link: string;
  category: string;
  type: 'web' | 'mobile';
  path?: string; // Added path property for navigation
}

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const intl = useIntl();

  const projects: Project[] = [
    {
      id: 1,
      title: intl.formatMessage({ id: 'projects.ecommerce-api.title' }),
      description: intl.formatMessage({ id: 'projects.ecommerce-api.description' }),
      technologies: ['.NET 8', 'Entity Framework Core', 'SQL Server', 'JWT', 'Redis', 'RabbitMQ', 'xUnit'],
      link: 'https://github.com/yourusername/ecommerce-api',
      category: 'backend',
      type: 'web',
      path: '/projects/ecommerce' // Path for navigation to detail page
    },
    {
      id: 2,
      title: intl.formatMessage({ id: 'projects.ecommerce-app.title' }),
      description: intl.formatMessage({ id: 'projects.ecommerce-app.description' }),
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'React Router', 'Redux Toolkit', 'React Query'],
      link: 'https://github.com/yusufb202/E-Commerce-React-Web-App',
      category: 'frontend',
      type: 'web',
      path: '/projects/ecommerce-app'
    },
    {
      id: 3,
      title: intl.formatMessage({ id: 'projects.exchange-system.title' }),
      description: intl.formatMessage({ id: 'projects.exchange-system.description' }),
      technologies: ['.NET 8', 'ASP.NET Core', 'Entity Framework Core', 'JWT Authentication', 'SQL Server', 'Repository Pattern'],
      link: 'https://github.com/yusufb202/ExchangeSystemAPI',
      category: 'backend',
      type: 'web',
      path: '/projects/exchange-system'
    },
    {
      id: 4,
      title: intl.formatMessage({ id: 'projects.erp-system.title' }),
      description: intl.formatMessage({ id: 'projects.erp-system.description' }),
      technologies: ['React 18', 'ASP.NET Core 8', 'TypeScript', 'Entity Framework', 'SQL Server', 'JWT Auth', 'Electron', 'Recharts'],
      link: 'https://github.com/yusufb202/OrbERPSystem',
      category: 'fullstack',
      type: 'web',
      path: '/projects/erp-system'
    },
    {
      id: 5,
      title: intl.formatMessage({ id: 'projects.subportfolio.title' }),
      description: intl.formatMessage({ id: 'projects.subportfolio.description' }),
      technologies: ['React 19', 'TypeScript', 'Tailwind CSS', 'React Router', 'React Intl', 'Context API', 'Vite'],
      link: 'https://github.com/yusufb202/Portfolio',
      category: 'frontend',
      type: 'web',
      path: '/projects/portfolio'
    },
    {
      id: 6,
      title: intl.formatMessage({ id: 'projects.submatchsphere.title' }),
      description: intl.formatMessage({ id: 'projects.submatchsphere.description' }),
      technologies: ['React Native', 'Expo', 'Supabase', 'React Context API', 'React Native Reanimated', 'Expo Router'],
      link: '#',
      category: 'frontend',
      type: 'mobile',
      path: '/projects/matchsphere'
    },
    {
      id: 7,
      title: intl.formatMessage({ id: 'projects.subgelirgider.title' }),
      description: intl.formatMessage({ id: 'projects.subgelirgider.description' }),
      technologies: ['React Native', 'Expo', 'TypeScript', 'React Native Paper', 'AsyncStorage', 'Expo Router', 'Expo Notifications'],
      link: '#',
      category: 'frontend',
      type: 'mobile',
      path: '/projects/gelirgider'
    },
    {
      id: 8,
      title: intl.formatMessage({ id: 'projects.subtakaskosesi.title' }),
      description: intl.formatMessage({ id: 'projects.subtakaskosesi.description' }),
      technologies: ['React Native', 'Expo', 'TypeScript', 'Supabase', 'React Navigation v7', 'React Native Elements', 'Expo Image Picker'],
      link: '#',
      category: 'frontend',
      type: 'mobile',
      path: '/projects/takaskosesi'
    }
  ];

  // Top level types (web/mobile)
  const projectTypes = ['all', 'web', 'mobile'].map(type => ({
    value: type,
    label: intl.formatMessage({ id: `projects.${type}` })
  }));

  // Subcategories
  const categories = ['all', 'fullstack', 'frontend', 'backend'].map(category => ({
    value: category,
    label: intl.formatMessage({ id: `projects.${category}` })
  }));

  // Filter projects by type and category
  const filteredProjects = projects.filter(project => {
    if (selectedType !== 'all' && project.type !== selectedType) {
      return false;
    }
    
    // Only apply category filtering for web projects
    if (selectedType === 'web' && selectedCategory !== 'all' && project.category !== selectedCategory) {
      return false;
    }
    
    return true;
  });

  // Reset category filter when type changes
  const handleTypeChange = (type: string) => {
    setSelectedType(type);
    setSelectedCategory('all');
  };

  return (
    <div className="py-8 px-4 md:px-8 flex flex-col items-center bg-[linear-gradient(135deg,rgba(254,249,195,0.97)_0%,rgba(254,215,170,0.95)_50%,rgba(254,226,226,0.93)_100%)] 
      dark:bg-[linear-gradient(135deg,rgba(7,15,56,0.98)_0%,rgba(16,23,89,0.97)_25%,rgba(11,15,51,0.95)_50%,rgba(8,47,112,0.93)_75%,rgba(12,71,145,0.9)_100%)]">
      {/* Top Level Filter: Web vs Mobile */}
      <div className="flex flex-wrap justify-center gap-4 mb-6 w-full">
        {projectTypes.map(({ value, label }) => (
          <button
            key={value}
            onClick={() => handleTypeChange(value)}
            className={`px-6 py-3 text-lg font-medium rounded-lg transition-colors ${
              selectedType === value
                ? 'bg-gray-800 text-white dark:bg-gray-700 dark:text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Subcategory Filter - Only shown if the selected type is web */}
      {selectedType === 'web' && (
        <div className="flex flex-wrap justify-center gap-3 mb-8 w-full">
          {categories.map(({ value, label }) => (
            <button
              key={value}
              onClick={() => setSelectedCategory(value)}
              className={`px-4 py-2 text-base font-medium rounded transition-colors ${
                selectedCategory === value
                  ? 'bg-blue-600 text-white dark:bg-blue-700'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      )}

      {/* Projects List */}
      <div className="max-w-4xl space-y-6 w-full">
        {filteredProjects.map((project) => (
          <div 
            key={project.id} 
            className="border-l-4 border-gray-800 dark:border-gray-300 pl-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold">{project.title}</h3>
              {project.path ? (
                <Link
                  to={project.path}
                  className="text-base font-medium text-blue-700 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline"
                >
                  <FormattedMessage id="projects.viewProject" /> →
                </Link>
              ) : (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-medium text-blue-700 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline"
                >
                  <FormattedMessage id="projects.viewProject" /> →
                </a>
              )}
            </div>
            <p className="text-base text-gray-700 dark:text-gray-300 mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm px-3 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* No Projects Found Message */}
      {filteredProjects.length === 0 && (
        <div className="py-6 text-center w-full">
          <h3 className="text-lg font-medium text-gray-500 dark:text-gray-400">
            <FormattedMessage id="projects.noProjects" />
          </h3>
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;