import React from 'react';
import Button from './Button';
import { PlayCircle } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Unlock Your Potential With <span className="text-purple-300">Expert-Led</span> Learning
            </h1>
            
            <p className="text-lg md:text-xl mb-8 text-purple-100 max-w-lg">
              Join thousands of students mastering new skills and advancing their careers with our cutting-edge courses.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="shadow-lg">
                Browse Courses
              </Button>
              
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <PlayCircle className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>
            
            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((item) => (
                  <img 
                    key={item}
                    src={`https://i.pravatar.cc/150?img=${item + 10}`} 
                    alt="Student" 
                    className="w-10 h-10 rounded-full border-2 border-purple-800 object-cover"
                  />
                ))}
              </div>
              <div className="ml-4">
                <p className="font-semibold">Join 25,000+ students</p>
                <div className="flex items-center text-yellow-400 text-sm">
                  ★★★★★ <span className="text-purple-200 ml-1">4.9 (2,500+ reviews)</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 lg:pl-10">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Students learning" 
                className="rounded-lg shadow-2xl max-w-full h-auto"
              />
              
              <div className="absolute -bottom-5 -left-5 bg-white p-4 rounded-lg shadow-lg text-gray-800 max-w-xs">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                  <p className="font-bold text-sm">Live Courses Available</p>
                </div>
                <p className="text-xs text-gray-600">Join our live sessions with real-time instructor interaction</p>
              </div>
              
              <div className="absolute -top-5 -right-5 bg-white p-4 rounded-lg shadow-lg text-gray-800 max-w-xs">
                <p className="font-bold text-sm mb-1">Learning that fits your schedule</p>
                <p className="text-xs text-gray-600">24/7 access to all courses and materials</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;