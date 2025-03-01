import { FormattedMessage } from 'react-intl';

const SkillsPage = () => {
  const skills = {
    frontend: ["React.js", "React Native", "TypeScript", "JavaScript", "Tailwind CSS", "Expo", "Vite"],
    backend: ["ASP.NET Core 8+ Web API", "Entity Framework Core", "MS SQL", "RESTful APIs", "Redis", "RabbitMQ", "Microservices"],
    tools: ["Git", "VS Code", "VS Code Insiders", "xUnit", "GitHub Copilot", "Supabase", "ChatGPT", "Claude Sonnet", "Deepseek", "Cursor", "Windsurf"]
  };

  return (
    <div className="py-12 bg-[linear-gradient(135deg,rgba(254,226,226,0.97)_0%,rgba(254,215,170,0.95)_50%,rgba(254,249,195,0.93)_100%)] dark:bg-[linear-gradient(135deg,rgba(7,15,56,0.98)_0%,rgba(16,23,89,0.97)_25%,rgba(11,15,51,0.95)_50%,rgba(8,47,112,0.93)_75%,rgba(12,71,145,0.9)_100%)]">
      <div className="container mx-auto px-6 max-w-5xl">
        <h1 className="text-3xl font-bold mb-12 text-center dark:text-white">
          <FormattedMessage id="skills.title" />
        </h1>
        
        <div className="space-y-10">
          <div>
            <h2 className="text-xl font-semibold mb-6 text-center dark:text-white">
              <FormattedMessage id="skills.frontend" />
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {skills.frontend.map((skill, index) => (
                <span key={index} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-6 py-2.5 rounded-full text-base">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-6 text-center dark:text-white">
              <FormattedMessage id="skills.backend" />
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {skills.backend.map((skill, index) => (
                <span key={index} className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 px-6 py-2.5 rounded-full text-base">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-6 text-center dark:text-white">
              <FormattedMessage id="skills.tools" />
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {skills.tools.map((skill, index) => (
                <span key={index} className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 px-6 py-2.5 rounded-full text-base">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;