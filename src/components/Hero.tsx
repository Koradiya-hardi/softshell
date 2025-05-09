import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-slate-800 mb-4">
              Unlock the Value of Your Unused Software
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-2xl">
              SoftSell helps businesses recover costs by reselling unused software licenses legally and efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-lg text-base font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Sell Your Licenses
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="#how-it-works" 
                className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 rounded-lg text-base font-medium text-slate-700 bg-white hover:bg-slate-50 transition-colors shadow-md hover:shadow-lg"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur-lg opacity-40 animate-pulse"></div>
              <div className="relative bg-white p-6 rounded-lg shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Software license management" 
                  className="w-full h-auto rounded-md" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;