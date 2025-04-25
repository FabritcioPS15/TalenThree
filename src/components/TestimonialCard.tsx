import React from 'react';
import { Testimonial } from '../types';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center mb-4">
        <div className="mr-4">
          <img 
            src={testimonial.image} 
            alt={testimonial.name} 
            className="w-14 h-14 rounded-full object-cover border-2 border-purple-200"
          />
        </div>
        
        <div>
          <h4 className="text-lg font-bold text-gray-800">{testimonial.name}</h4>
          <p className="text-sm text-purple-700">{testimonial.role}</p>
        </div>
      </div>
      
      <div className="mb-4">
        <p className="text-gray-600 italic">"{testimonial.comment}"</p>
      </div>
      
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} 
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCard;