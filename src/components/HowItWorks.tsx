import React from 'react';
import { Upload, BarChart, CreditCard } from 'lucide-react';

const steps = [
  {
    icon: <Upload className="w-10 h-10 text-blue-600" />,
    title: 'Upload Licenses',
    description: 'Provide details about your unused software licenses through our secure portal.'
  },
  {
    icon: <BarChart className="w-10 h-10 text-blue-600" />,
    title: 'Get Valuation',
    description: 'Our experts analyze market demand and provide a competitive valuation within 24 hours.'
  },
  {
    icon: <CreditCard className="w-10 h-10 text-blue-600" />,
    title: 'Get Paid',
    description: 'Accept our offer and receive payment promptly through your preferred method.'
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">How It Works</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our streamlined process makes selling your unused software licenses simple and efficient.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-start gap-8 md:gap-4">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="flex-1 flex flex-col items-center text-center p-6 bg-slate-50 rounded-lg shadow-md transition-transform hover:transform hover:-translate-y-1"
            >
              <div className="mb-4 p-4 bg-blue-100 rounded-full">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">{step.title}</h3>
              <p className="text-slate-600">{step.description}</p>
              
              {/* Arrow between steps (except the last one) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2">
                  <div className="h-0.5 w-8 bg-blue-200 relative"></div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#contact" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            Ready to get started? Contact us today
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

// Import ArrowRight
import { ArrowRight } from 'lucide-react';

export default HowItWorks;