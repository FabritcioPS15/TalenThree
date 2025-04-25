import React from 'react';
import Button from './Button';
import { ArrowRight, CheckCircle } from 'lucide-react';

const CTASection: React.FC = () => {
  const benefits = [
    'Access to 1,000+ courses across all categories',
    'Learn from industry experts with real-world experience',
    'Flexible learning schedule with lifetime access',
    'Earn certificates to showcase your skills'
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="bg-purple-100 rounded-2xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 p-8 lg:p-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Ready to Take the Next Step in Your Learning Journey?
              </h2>
              
              <p className="text-gray-600 mb-6">
                Join thousands of students already learning on TalentThree and transform your skills today.
              </p>
              
              <ul className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-700 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg">
                  Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 bg-purple-700 p-8 lg:p-12 flex items-center justify-center">
              <div className="bg-white rounded-xl p-6 shadow-lg max-w-md">
                <h3 className="text-2xl font-bold text-purple-800 mb-4">
                  Sign Up Today
                </h3>
                
                <form>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                  
                  <Button className="w-full">
                    Create Free Account
                  </Button>
                  
                  <p className="text-center text-gray-500 text-sm mt-4">
                    By signing up, you agree to our Terms of Service and Privacy Policy
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;