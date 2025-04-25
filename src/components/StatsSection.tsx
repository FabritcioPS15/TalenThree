import React from 'react';
import { Users, BookOpen, Award, Globe } from 'lucide-react';

const StatsSection: React.FC = () => {
  const stats = [
    {
      icon: <Users className="h-8 w-8 text-purple-600" />,
      value: '25,000+',
      label: 'Students',
    },
    {
      icon: <BookOpen className="h-8 w-8 text-purple-600" />,
      value: '1,000+',
      label: 'Courses',
    },
    {
      icon: <Award className="h-8 w-8 text-purple-600" />,
      value: '500+',
      label: 'Instructors',
    },
    {
      icon: <Globe className="h-8 w-8 text-purple-600" />,
      value: '50+',
      label: 'Countries',
    },
  ];

  return (
    <section className="py-12 border-t border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center bg-purple-100 p-4 rounded-full mb-4">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-1">
                {stat.value}
              </h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;