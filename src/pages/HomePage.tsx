import { useNavigate } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

const HomePage = () => {
  const navigate = useNavigate();

  const navigateToPage = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background with parallax effect */}
        <div className="absolute inset-0 transform translate-y-[-5%] scale-110">
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80 dark:from-black/90 dark:via-black/70 dark:to-black/90 z-10"></div>
          <img 
            src={`${process.env.PUBLIC_URL}/3.png`} 
            alt="Hero background" 
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = '/1.png';
            }}
          />
        </div>
        
        {/* Hero Content */}
        <div className="relative h-full flex flex-col justify-center items-center text-center text-white px-4 z-20">
          <span className="text-3xl uppercase tracking-widest mb-2 opacity-80">
            <FormattedMessage id="home.title" />
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-4 tracking-wider text-white">
            <span className="block">Yusuf</span>
            <span className="block mt-2 font-bold text-white">Bayram</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-10 opacity-90 font-light">
            <FormattedMessage id="home.subtitle" />
          </p>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            <button 
              onClick={() => navigateToPage('/projects')}
              className="bg-transparent border-2 border-white px-8 py-4 rounded-sm font-light tracking-wider hover:bg-white hover:text-black transition duration-300"
            >
              <FormattedMessage id="home.viewWork" />
            </button>
            <button 
              onClick={() => navigateToPage('/contact')}
              className="bg-white text-black px-8 py-4 rounded-sm font-light tracking-wider hover:bg-opacity-90 transition duration-300"
            >
              <FormattedMessage id="home.contactMe" />
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce z-20">
          <span className="text-white text-sm mb-2">
            <FormattedMessage id="home.scrollDown" />
          </span>
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* Brief Introduction Section */}
      <section className="py-16 bg-[linear-gradient(135deg,rgba(254,243,199,0.97)_0%,rgba(254,215,170,0.95)_50%,rgba(254,226,226,0.93)_100%)] dark:bg-[linear-gradient(135deg,rgba(7,15,56,0.98)_0%,rgba(16,23,89,0.97)_25%,rgba(11,15,51,0.95)_50%)]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/3">
              <div className="relative w-64 h-64 mx-auto">
                <div className="absolute inset-0 rounded-full bg-blue-600/20 animate-pulse"></div>
                <img 
                  src="/portfolio.png" 
                  alt="Profile Photo" 
                  className="w-full h-full object-cover rounded-full border-4 border-white dark:border-blue-900/30 relative z-10"
                />
              </div>
            </div>
            <div className="md:w-2/3 mt-8 md:mt-0">
              <h2 className="text-3xl font-bold mb-4 dark:text-white">
                <FormattedMessage id="home.hello" />
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                <FormattedMessage id="home.brief" />
              </p>
              <button 
                onClick={() => navigateToPage('/about')}
                className="text-blue-600 dark:text-blue-400 hover:underline font-medium flex items-center bg-transparent border-none cursor-pointer"
              >
                <FormattedMessage id="home.moreAbout" />
                <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Highlight Section */}
      <section className="py-16 bg-[linear-gradient(135deg,rgba(254,215,170,0.95)_0%,rgba(254,226,226,0.93)_50%,rgba(254,243,199,0.97)_100%)] dark:bg-[linear-gradient(135deg,rgba(16,23,89,0.97)_0%,rgba(11,15,51,0.95)_50%,rgba(8,47,112,0.93)_100%)]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-light uppercase tracking-wider mb-2 dark:text-white">
              <FormattedMessage id="home.mySkills" />
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
            {[
              { name: 'React', icon: '⚛️' },
              { name: 'TypeScript', icon: '📘' },
              { name: 'ASP.NET', icon: '🌐' },
              { name: 'SQL', icon: '🗄️' },
              { name: 'React Native', icon: '📱' },
            ].map((skill) => (
              <div key={skill.name} className="flex items-center gap-2 px-4 py-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <span className="text-2xl">{skill.icon}</span>
                <span className="font-medium dark:text-white">{skill.name}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <button 
              onClick={() => navigateToPage('/skills')}
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium inline-flex items-center bg-transparent border-none cursor-pointer"
            >
              <FormattedMessage id="home.viewAllSkills" />
              <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Gallery/Portfolio Preview Section */}
      <section className="py-20 bg-[linear-gradient(135deg,rgba(254,226,226,0.93)_0%,rgba(254,243,199,0.97)_50%,rgba(254,215,170,0.95)_100%)] dark:bg-[linear-gradient(135deg,rgba(11,15,51,0.95)_0%,rgba(8,47,112,0.93)_50%,rgba(12,71,145,0.9)_100%)]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light uppercase tracking-wider mb-2 dark:text-white">
              <FormattedMessage id="home.featuredProjects" />
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Gallery Item 1 */}
            <div className="group relative overflow-hidden">
              <div className="h-80 bg-gray-300 dark:bg-gray-700 overflow-hidden">
                <img 
                  src="https://raw.githubusercontent.com/yusufb202/E-Commerce-React-Web-App/main/src/App%20Images/Homepage.jpg" 
                  alt="E-Commerce Web API Project" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/1.png';
                  }}
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="text-center text-white p-4">
                  <h3 className="text-xl font-semibold mb-2">E-Commerce Web API</h3>
                  <p className="text-sm mb-4">ASP.NET Core, SQL Server</p>
                  <button
                    onClick={() => navigateToPage('/projects/ecommerce')}
                    className="inline-block border border-white text-white px-4 py-2 rounded-sm hover:bg-white hover:text-black transition duration-300"
                  >
                    <FormattedMessage id="projects.viewProject" />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Gallery Item 2 */}
            <div className="group relative overflow-hidden">
              <div className="h-80 bg-gray-300 dark:bg-gray-700 overflow-hidden">
                <img 
                  src="/src/assets/images/projects/ERP/1.jpg" 
                  alt="Orb ERP Project" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/1.png';
                  }}
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="text-center text-white p-4">
                  <h3 className="text-xl font-semibold mb-2">Orb ERP Full Stack Web App</h3>
                  <p className="text-sm mb-4">React, .NET Core, SQL Server</p>
                  <button
                    onClick={() => navigateToPage('/projects/erp-system')}
                    className="inline-block border border-white text-white px-4 py-2 rounded-sm hover:bg-white hover:text-black transition duration-300"
                  >
                    <FormattedMessage id="projects.viewProject" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button
              onClick={() => navigateToPage('/projects')}
              className="inline-block bg-black text-white dark:bg-gray-800 px-8 py-4 rounded-sm font-light tracking-wider hover:bg-gray-800 transition duration-300"
            >
              <FormattedMessage id="home.viewAllProjects" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;