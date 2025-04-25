import React from 'react';
import InstructorCard from './InstructorCard';
import Button from './Button';
import { topInstructors } from '../utils/data';

const InstructorsSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Learn from the Best Instructors
            </h2>
            <p className="text-gray-600 max-w-2xl">
              Our instructors are industry experts with years of practical experience who are passionate about sharing their knowledge.
            </p>
          </div>
          
          <div className="mt-4 md:mt-0">
            <Button variant="outline">
              All Instructors
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {topInstructors.map((instructor) => (
            <InstructorCard key={instructor.id} instructor={instructor} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Want to become an instructor?
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Join our growing community of expert instructors and share your knowledge with students around the world.
          </p>
          <Button>Apply to Teach</Button>
        </div>
      </div>
    </section>
  );
};

export default InstructorsSection;