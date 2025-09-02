import React from 'react';
import { ExternalLink, Github, Shield, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Fraud Risk Management System',
      description: 'A comprehensive fraud detection and risk management platform that analyzes transaction patterns, identifies suspicious activities, and provides real-time alerts to prevent financial fraud.',
      role: 'Backend Developer',
      technologies: ['Python', 'Machine Learning', 'PostgreSQL', 'Redis', 'Docker', 'AWS'],
      icon: <Shield className="text-red-600" size={32} />,
      highlights: [
        'Real-time fraud detection algorithms',
        'Risk scoring and assessment models',
        'Automated alert system',
        'Comprehensive reporting dashboard'
      ]
    },
    {
      title: 'WebTekdi.com',
      description: 'A modern web development platform providing comprehensive digital solutions including web design, development, and digital marketing services for businesses.',
      role: 'Full Stack Developer',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Stripe API'],
      icon: <Globe className="text-blue-600" size={32} />,
      highlights: [
        'Responsive web design',
        'Content management system',
        'Payment integration',
        'SEO optimization'
      ]
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{project.title}</h3>
                    <p className="text-blue-600 font-semibold">{project.role}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-6">{project.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors">
                    <ExternalLink size={16} />
                    <span>View Project</span>
                  </button>
                  <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-700 font-semibold transition-colors">
                    <Github size={16} />
                    <span>Source Code</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;