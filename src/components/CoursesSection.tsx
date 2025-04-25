import React from 'react';
import CourseCard from './CourseCard';
import Button from './Button';
import { featuredCourses } from '../utils/data';

const CoursesSection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Featured Courses
            </h2>
            <p className="text-gray-600 max-w-2xl">
              Discover our most popular courses chosen by thousands of students to accelerate their learning journey.
            </p>
          </div>
          
          <div className="mt-4 md:mt-0">
            <Button variant="outline">
              View All Courses
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
        
        <div className="mt-12 bg-purple-100 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 md:mr-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Not sure where to start?
            </h3>
            <p className="text-gray-600">
              Take our quick assessment to get personalized course recommendations.
            </p>
          </div>
          
          <Button size="lg" className="whitespace-nowrap">
            Find Your Path
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;