import React from 'react';
import { Course } from '../types';
import { Star } from 'lucide-react';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={course.image} 
          alt={course.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-3 right-3 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded">
          {course.level}
        </div>
      </div>
      
      <div className="p-5 flex-grow flex flex-col">
        <div className="flex items-center text-sm text-purple-700 font-medium mb-2">
          <span>{course.category}</span>
          <span className="mx-2">•</span>
          <span>{course.duration}</span>
        </div>
        
        <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2 hover:text-purple-700 transition-colors">
          {course.title}
        </h3>
        
        <p className="text-sm text-gray-600 mb-3">
          Instructor: <span className="font-medium">{course.instructor}</span>
        </p>
        
        <div className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-between">
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="ml-1 text-sm font-medium text-gray-700">{course.rating}</span>
            <span className="text-xs text-gray-500 ml-1">({course.students})</span>
          </div>
          
          <button className="text-sm font-medium text-purple-700 hover:text-purple-900 transition-colors">
            View Course
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;