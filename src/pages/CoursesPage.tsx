import React from 'react';
import { featuredCourses } from '../utils/data';
import CourseCard from '../components/CourseCard';

const CoursesPage: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Explora Nuestros Cursos
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubre una amplia variedad de cursos diseñados para ayudarte a alcanzar tus metas profesionales.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;