import React from "react";
import { Calendar, MapPin, Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Backend Developer",
      company: "Informatrix IT Solution Pvt Ltd",
      department: "Fraud Risk Management",
      period: "Nov 2024 – Present",
      location: "Current Position",
      description:
        "Developing and maintaining fraud detection systems and risk management solutions.",
      current: true,
    },
    {
      title: "Software Engineer",
      company: "DronaPay",
      period: "Jul 2024 – Oct 2024",
      location: "4 months",
      description:
        "Worked on payment processing systems and financial technology solutions.",
      current: false,
    },
    {
      title: "Trainee Consultant",
      company: "Informatrix IT Solution Pvt Ltd",
      period: "Jul 2023 – Jun 2024",
      location: "1 year",
      description:
        "Started as a trainee and developed expertise in software consulting and development.",
      current: false,
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-blue-200"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <div className="flex items-center mb-4">
                  <div className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                    <Briefcase className="text-white" size={16} />
                  </div>
                </div>

                <div
                  className={`ml-12 md:ml-0 ${
                    index % 2 === 0
                      ? "md:pr-8 md:text-right"
                      : "md:pl-8 md:ml-1/2"
                  }`}
                >
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900">
                        {exp.title}
                      </h3>
                      {exp.current && (
                        <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
                          Current
                        </span>
                      )}
                    </div>

                    <h4 className="text-lg font-semibold text-blue-600 mb-2">
                      {exp.company}
                      {exp.department && (
                        <span className="text-gray-600">
                          {" "}
                          • {exp.department}
                        </span>
                      )}
                    </h4>

                    <div className="flex items-center text-gray-500 mb-3 space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar size={16} />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin size={16} />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
