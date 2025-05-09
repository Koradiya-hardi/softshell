import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "SoftSell helped us recover over $50,000 from unused enterprise software licenses. Their process was efficient and the valuation exceeded our expectations.",
    name: "Sarah Johnson",
    role: "CTO",
    company: "Datastream Technologies",
    image: "https://images.pexels.com/photos/3199036/pexels-photo-3199036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    quote: "As a growing startup, we needed to optimize our software expenses. SoftSell made it easy to legally sell licenses we no longer needed, funding our transition to new tools.",
    name: "Michael Chen",
    role: "IT Director",
    company: "Novus Innovations",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">What Our Clients Say</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from companies that have successfully recovered costs with SoftSell.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-slate-50 rounded-xl p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow relative"
            >
              <Quote className="absolute text-blue-100 w-16 h-16 -top-6 -left-6 transform -rotate-12" />
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-16 h-16 rounded-full object-cover border-2 border-blue-100" 
                  />
                </div>
                <div>
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-600 italic mb-4">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold text-slate-800">{testimonial.name}</p>
                    <p className="text-sm text-slate-500">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;