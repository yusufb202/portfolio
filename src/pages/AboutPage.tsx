import { FormattedMessage, useIntl } from 'react-intl';

interface Experience {
  company: string;
  position: string;
  period: string;
  descriptions: string[];
}

interface Education {
  degree: string;
  institution: string;
  description: string;
}

const AboutPage = () => {
  const intl = useIntl();
  
  const experiences: Experience[] = [
    {
      company: intl.formatMessage({ id: 'about.personalProjects' }),
      position: intl.formatMessage({ id: 'about.position' }),
      period: intl.formatMessage({ id: 'about.period' }),
      descriptions: [
        intl.formatMessage({ id: 'about.project1' }),
        intl.formatMessage({ id: 'about.project2' }),
        intl.formatMessage({ id: 'about.project3' }),
        intl.formatMessage({ id: 'about.project4' }),
        intl.formatMessage({ id: 'about.project5' })
      ]
    }
  ];

  const education: Education[] = [
    {
      degree: intl.formatMessage({ id: 'about.education.degree' }),
      institution: intl.formatMessage({ id: 'about.education.institution' }),
      description: intl.formatMessage({ id: 'about.education.description' })
    }
  ];

  return (
    <div className="py-12 bg-[linear-gradient(135deg,rgba(254,226,226,0.97)_0%,rgba(254,249,195,0.95)_50%,rgba(254,215,170,0.93)_100%)]
      dark:bg-[linear-gradient(135deg,rgba(7,15,56,0.98)_0%,rgba(16,23,89,0.97)_25%,rgba(11,15,51,0.95)_50%,rgba(8,47,112,0.93)_75%,rgba(12,71,145,0.9)_100%)]">
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* Profile Photo - Centered on top */}
        <div className="flex justify-center mb-12">
          <div className="w-64 h-64 rounded-xl overflow-hidden">
            <img 
              src="/portfolio/portfolio.png" 
              alt="Profile Photo" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Who I Am Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-4 dark:text-white text-center">
            <FormattedMessage id="about.whoIAm" />
          </h2>
          <div className="space-y-4 text-gray-600 dark:text-gray-300">
            <p><FormattedMessage id="about.expertise.backend" /></p>
            <p><FormattedMessage id="about.expertise.development" /></p>
            <p><FormattedMessage id="about.expertise.frontend" /></p>
            <ul className="list-disc list-inside pl-4">
              <li>{intl.formatMessage({ id: "about.expertise.frontendSkills.skill1" })}</li>
              <li>{intl.formatMessage({ id: "about.expertise.frontendSkills.skill2" })}</li>
            </ul>
            <p><FormattedMessage id="about.expertise.fullstack" /></p>
            
            <p><FormattedMessage id="about.workflow" /></p>
            <ul className="list-disc list-inside pl-4">
              <li>{intl.formatMessage({ id: "about.workflow.tools.tool1" })}</li>
              <li>{intl.formatMessage({ id: "about.workflow.tools.tool2" })}</li>
              <li>{intl.formatMessage({ id: "about.workflow.tools.tool3" })}</li>
            </ul>

            <p><FormattedMessage id="about.solutions" /></p>
            
            <div className="mt-4">
              <h3 className="text-xl font-medium dark:text-white">
                <FormattedMessage id="about.webSystems" />
              </h3>
              <ul className="list-disc list-inside pl-4">
                <li>{intl.formatMessage({ id: "about.webSystems.list.item1" })}</li>
                <li>{intl.formatMessage({ id: "about.webSystems.list.item2" })}</li>
                <li>
                  {intl.formatMessage({ id: "about.webSystems.list.item3" })}
                  <ul className="list-disc list-inside ml-8">
                    <li>{intl.formatMessage({ id: "about.webSystems.list.features.feature1" })}</li>
                    <li>{intl.formatMessage({ id: "about.webSystems.list.features.feature2" })}</li>
                    <li>{intl.formatMessage({ id: "about.webSystems.list.features.feature3" })}</li>
                    <li>{intl.formatMessage({ id: "about.webSystems.list.features.feature4" })}</li>
                    <li>{intl.formatMessage({ id: "about.webSystems.list.features.feature5" })}</li>
                    <li>{intl.formatMessage({ id: "about.webSystems.list.features.feature6" })}</li>
                    <li>{intl.formatMessage({ id: "about.webSystems.list.features.feature7" })}</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="mt-4">
              <h3 className="text-xl font-medium dark:text-white">
                <FormattedMessage id="about.mobileSolutions" />
              </h3>
              <ul className="list-disc list-inside pl-4">
                <li>{intl.formatMessage({ id: "about.mobileSolutions.list.item1" })}</li>
                <li>{intl.formatMessage({ id: "about.mobileSolutions.list.item2" })}</li>
                <li>
                  {intl.formatMessage({ id: "about.mobileSolutions.list.item3" })}
                  <ul className="list-disc list-inside ml-8">
                    <li>{intl.formatMessage({ id: "about.mobileSolutions.list.features.feature1" })}</li>
                    <li>{intl.formatMessage({ id: "about.mobileSolutions.list.features.feature2" })}</li>
                    <li>{intl.formatMessage({ id: "about.mobileSolutions.list.features.feature3" })}</li>
                    <li>{intl.formatMessage({ id: "about.mobileSolutions.list.features.feature4" })}</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 dark:text-white text-center">
            <FormattedMessage id="about.experience" />
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-xl font-semibold dark:text-white">{exp.position}</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-2">{exp.company}</p>
                <p className="text-gray-500 dark:text-gray-400 mb-4">{exp.period}</p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  {exp.descriptions.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center dark:text-white">
            <FormattedMessage id="about.education" />
          </h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-gradient-to-br from-red-100/60 via-yellow-100/60 to-orange-100/60 dark:from-[rgba(7,15,56,0.6)] dark:via-[rgba(11,15,51,0.6)] dark:to-[rgba(12,71,145,0.6)] p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-1 dark:text-white">{edu.degree}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">{edu.institution}</p>
                <p className="text-gray-700 dark:text-gray-300">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;