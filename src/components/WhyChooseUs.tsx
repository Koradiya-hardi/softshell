import React from 'react';
import { Shield, Clock, DollarSign, Award } from 'lucide-react';

const features = [
  {
    icon: <Shield className="w-8 h-8 text-blue-600" />,
    title: 'Legally Compliant',
    description: 'All transactions adhere to licensing agreements and legal requirements for software resale.'
  },
  {
    icon: <Clock className="w-8 h-8 text-blue-600" />,
    title: 'Fast Process',
    description: 'Get valuations within 24 hours and complete transactions in as little as 3 business days.'
  },
  {
    icon: <DollarSign className="w-8 h-8 text-blue-600" />,
    title: 'Maximum Value',
    description: 'Our market expertise ensures you get the best possible price for your unused licenses.'
  },
  {
    icon: <Award className="w-8 h-8 text-blue-600" />,
    title: 'Trusted Network',
    description: 'Connect with verified buyers through our established marketplace of enterprise clients.'
  }
];

const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Why Choose SoftSell</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We've helped hundreds of companies recover millions in software costs. Here's why businesses trust us.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="mb-4 p-3 bg-blue-100 rounded-full inline-block">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;