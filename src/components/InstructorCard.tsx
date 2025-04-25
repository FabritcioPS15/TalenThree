import React from 'react';
import { Instructor } from '../types';
import { Users, BookOpen } from 'lucide-react';

interface InstructorCardProps {
  instructor: Instructor;
}

const InstructorCard: React.FC<InstructorCardProps> = ({ instructor }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex flex-col sm:flex-row">
        <div className="w-full sm:w-1/3 h-48 sm:h-auto">
          <img 
            src={instructor.image} 
            alt={instructor.name} 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="w-full sm:w-2/3 p-5">
          <h3 className="text-xl font-bold text-gray-800 mb-1">
            {instructor.name}
          </h3>
          
          <p className="text-purple-700 font-medium mb-3">{instructor.role}</p>
          
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {instructor.expertise.map((skill, index) => (
                <span 
                  key={index} 
                  className="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-1 text-purple-600" />
              <span>{instructor.students.toLocaleString()} Students</span>
            </div>
            
            <div className="flex items-center">
              <BookOpen className="w-4 h-4 mr-1 text-purple-600" />
              <span>{instructor.courses} Courses</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;