import React from 'react';
import { Code2, Briefcase, Palette, TrendingUp, BarChart, Award } from 'lucide-react';
import { categories } from '../utils/data';

const CategorySection: React.FC = () => {
  // Map category names to their respective icons
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="h-5 w-5 text-purple-700" />;
      case 'Briefcase':
        return <Briefcase className="h-5 w-5 text-purple-700" />;
      case 'Palette':
        return <Palette className="h-5 w-5 text-purple-700" />;
      case 'TrendingUp':
        return <TrendingUp className="h-5 w-5 text-purple-700" />;
      case 'BarChart':
        return <BarChart className="h-5 w-5 text-purple-700" />;
      case 'Award':
        return <Award className="h-5 w-5 text-purple-700" />;
      default:
        return <Briefcase className="h-5 w-5 text-purple-700" />;
    }
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Explore Top Categories
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our diverse range of courses across popular categories to find the perfect learning path for your goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="flex items-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-purple-200 transition-all duration-300 cursor-pointer"
            >
              <div className="mr-4 bg-purple-100 p-3 rounded-lg">
                {getIcon(category.icon)}
              </div>
              
              <div>
                <h3 className="font-bold text-gray-800 text-lg">{category.name}</h3>
                <p className="text-gray-500 text-sm">{category.count} courses</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;