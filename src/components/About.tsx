import React from 'react';
import { Code, Target, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              I am a dedicated Software Developer with a strong foundation in backend development 
              and fraud risk management systems. Currently working at Informatrix IT Solution Pvt Ltd, 
              I specialize in building robust, scalable solutions that address complex business challenges.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              My journey in software development has been driven by a passion for creating 
              impactful solutions and continuously learning new technologies. I thrive in 
              collaborative environments and enjoy tackling challenging problems that require 
              innovative thinking.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Code className="text-blue-600" size={24} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Clean Code</h3>
                <p className="text-sm text-gray-600">Writing maintainable, efficient code</p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Target className="text-blue-600" size={24} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Problem Solving</h3>
                <p className="text-sm text-gray-600">Analytical approach to challenges</p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Lightbulb className="text-blue-600" size={24} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Innovation</h3>
                <p className="text-sm text-gray-600">Creative solutions for complex problems</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl shadow-xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center text-gray-600 text-4xl font-bold">
                  NW
                </div>
                <p className="text-gray-600 font-medium">Professional Photo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;