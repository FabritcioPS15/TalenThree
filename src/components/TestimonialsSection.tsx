import React from 'react';
import TestimonialCard from './TestimonialCard';
import { studentTestimonials } from '../utils/data';

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            What Our Students Say
          </h2>
          <p className="text-purple-200 max-w-2xl mx-auto">
            Hear from our community of learners about how TalentThree has helped them achieve their goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {studentTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
        
        <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center mx-auto max-w-4xl">
          <h3 className="text-2xl font-bold mb-4">
            Join Thousands of Satisfied Learners
          </h3>
          <p className="text-purple-200 mb-6">
            Our students have gone on to land their dream jobs, start successful businesses, and make meaningful career transitions.
          </p>
          <div className="inline-block bg-white text-purple-900 font-bold py-3 px-6 rounded-lg hover:bg-purple-100 transition-colors cursor-pointer">
            Start Your Learning Journey
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;