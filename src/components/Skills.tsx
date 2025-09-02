import React from 'react';
import { 
  Code, 
  Database, 
  Wrench, 
  Brain, 
  Users, 
  Globe,
  Server,
  Layers
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code className="text-blue-600" size={24} />,
      skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'SQL'],
    },
    {
      title: 'Frameworks',
      icon: <Layers className="text-green-600" size={24} />,
      skills: ['React', 'Node.js', 'Express.js', 'Next.js', 'Spring Boot', 'Django'],
    },
    {
      title: 'Databases',
      icon: <Database className="text-purple-600" size={24} />,
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'SQLite'],
    },
    {
      title: 'Tools',
      icon: <Wrench className="text-orange-600" size={24} />,
      skills: ['Git', 'Docker', 'AWS', 'Postman', 'VS Code', 'Linux'],
    },
    {
      title: 'Concepts',
      icon: <Brain className="text-red-600" size={24} />,
      skills: ['REST APIs', 'Microservices', 'Agile', 'CI/CD', 'Testing', 'Security'],
    },
    {
      title: 'Soft Skills',
      icon: <Users className="text-indigo-600" size={24} />,
      skills: ['Team Collaboration', 'Problem Solving', 'Communication', 'Leadership', 'Adaptability'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-white text-gray-700 px-3 py-1 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;