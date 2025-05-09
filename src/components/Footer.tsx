import React from 'react';
import { BarChart2, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <BarChart2 className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">SoftSell</span>
            </div>
            <p className="text-slate-300 mb-4">
              The leading marketplace for legal software license resale.
            </p>
            <div className="flex space-x-4">
              {['twitter', 'facebook', 'linkedin', 'instagram'].map((social) => (
                <a 
                  key={social}
                  href={`#${social}`}
                  className="text-slate-300 hover:text-blue-400 transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <div className="h-6 w-6 border border-slate-600 rounded-full flex items-center justify-center hover:border-blue-400">
                    <svg className="h-3 w-3" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'How It Works', 'Why Choose Us', 'Testimonials', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-slate-300 hover:text-blue-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {['License Guide', 'FAQ', 'Pricing', 'Blog', 'Legal'].map((resource) => (
                <li key={resource}>
                  <a 
                    href="#"
                    className="text-slate-300 hover:text-blue-400 transition-colors"
                  >
                    {resource}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-400 mr-3 mt-0.5" />
                <span className="text-slate-300">
                  123 Business Ave, Suite 500<br />
                  San Francisco, CA 94107
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-3" />
                <a href="tel:+18005555555" className="text-slate-300 hover:text-blue-400 transition-colors">
                  (800) 555-5555
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-3" />
                <a href="mailto:info@softsell.com" className="text-slate-300 hover:text-blue-400 transition-colors">
                  info@softsell.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-700 text-slate-400 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {currentYear} SoftSell. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;