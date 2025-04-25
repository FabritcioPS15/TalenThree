import React from 'react';
import { BookOpen, Clock, Award, Globe, Users, Monitor } from 'lucide-react';

const FeatureSection: React.FC = () => {
  const features = [
    {
      icon: <BookOpen className="h-7 w-7 text-purple-600" />,
      title: 'Expert-Led Courses',
      description: 'Learn from industry professionals with real-world experience'
    },
    {
      icon: <Clock className="h-7 w-7 text-purple-600" />,
      title: 'Flexible Learning',
      description: 'Study at your own pace with lifetime access to course materials'
    },
    {
      icon: <Award className="h-7 w-7 text-purple-600" />,
      title: 'Certificates',
      description: 'Earn recognized certificates to showcase your new skills'
    },
    {
      icon: <Globe className="h-7 w-7 text-purple-600" />,
      title: 'Global Community',
      description: 'Join a worldwide network of students and professionals'
    },
    {
      icon: <Users className="h-7 w-7 text-purple-600" />,
      title: 'Interactive Learning',
      description: 'Engage with instructors and peers through forums and live sessions'
    },
    {
      icon: <Monitor className="h-7 w-7 text-purple-600" />,
      title: 'Updated Content',
      description: 'Stay current with regularly updated course materials'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Why Choose <span className="text-purple-700">TalentThree</span>
          </h2>
          <p className="text-gray-600">
            Our platform offers a unique learning experience with features designed to help you succeed in your educational journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4 bg-purple-100 p-3 inline-block rounded-lg">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;