import React from 'react';
import { topInstructors } from '../utils/data';
import InstructorCard from '../components/InstructorCard';

const InstructorsPage: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Nuestros Facilitadores
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conoce a nuestro equipo de expertos instructores que te guiarán en tu viaje de aprendizaje.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {topInstructors.map((instructor) => (
            <InstructorCard key={instructor.id} instructor={instructor} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstructorsPage;