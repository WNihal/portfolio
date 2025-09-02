import React from 'react';
import { GraduationCap, Award, AlignCenterVertical as Certificate, Trophy } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'BVOC in Software Development',
      institution: 'St. Vincent Pallotti College',
      grade: 'CGPA 8.83/10',
      period: '2020 - 2023',
      type: 'Bachelor\'s Degree'
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Maharashtra State Board',
      grade: '82%',
      period: '2019 - 2020',
      type: 'Higher Secondary'
    },
    {
      degree: 'Secondary School Certificate (SSC)',
      institution: 'Maharashtra State Board',
      grade: '68%',
      period: '2017 - 2018',
      type: 'Secondary School'
    },
  ];

  const achievements = [
    'Appathon\'23 Winner',
    'NTLF 2K23 College Representative',
    'Digital Diplomat Award',
  ];

  const certifications = [
    'Google UX Design',
    'TCS iON Career Edge',
    'CodeVita Programming',
    'Future Skill Prime',
    'NASSCOM Gold Certification',
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education & Achievements</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-8">
              <GraduationCap className="text-blue-600 mr-3" size={28} />
              <h3 className="text-2xl font-bold text-gray-900">Education</h3>
            </div>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">{edu.degree}</h4>
                      <p className="text-blue-600 font-semibold">{edu.institution}</p>
                    </div>
                    <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                      {edu.grade}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">{edu.type}</span>
                    <span className="text-gray-500 text-sm">{edu.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Achievements & Certifications */}
          <div className="space-y-8">
            {/* Achievements */}
            <div>
              <div className="flex items-center mb-6">
                <Trophy className="text-yellow-600 mr-3" size={28} />
                <h3 className="text-2xl font-bold text-gray-900">Achievements</h3>
              </div>
              
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400"
                  >
                    <div className="flex items-center">
                      <Award className="text-yellow-600 mr-3" size={20} />
                      <span className="font-semibold text-gray-900">{achievement}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Certifications */}
            <div>
              <div className="flex items-center mb-6">
                <Certificate className="text-green-600 mr-3" size={28} />
                <h3 className="text-2xl font-bold text-gray-900">Certifications</h3>
              </div>
              
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400"
                  >
                    <div className="flex items-center">
                      <Certificate className="text-green-600 mr-3" size={20} />
                      <span className="font-semibold text-gray-900">{cert}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;