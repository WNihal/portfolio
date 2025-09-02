import React from 'react';
import { Download, ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-48 h-48 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center shadow-lg">
              <div className="w-44 h-44 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 text-6xl font-bold">
                NW
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 animate-fade-in">
            Nihal Wanjari
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-blue-600 font-semibold mb-6 animate-fade-in-delay">
            Software Developer
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-delay-2">
            Passionate about solving complex challenges with impactful solutions
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-3">
            <a
              href="/Nihal_Wanjari_Resume.pdf"
              download
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Download size={20} />
              <span className="font-semibold">Download Resume</span>
            </a>
            
            <button
              onClick={scrollToAbout}
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center space-x-2"
            >
              <span className="font-semibold">Learn More</span>
              <ArrowDown size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;