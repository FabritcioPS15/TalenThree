import { Course, Instructor, Testimonial } from '../types';

export const featuredCourses: Course[] = [
  {
    id: 1,
    title: 'Introduction to Digital Marketing',
    instructor: 'Emma Rodriguez',
    category: 'Marketing',
    level: 'Beginner',
    duration: '6 weeks',
    rating: 4.8,
    students: 1245,
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 2,
    title: 'Advanced Web Development',
    instructor: 'Michael Chen',
    category: 'Programming',
    level: 'Advanced',
    duration: '10 weeks',
    rating: 4.9,
    students: 983,
    image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 3,
    title: 'Data Science Fundamentals',
    instructor: 'Priya Sharma',
    category: 'Data Science',
    level: 'Intermediate',
    duration: '8 weeks',
    rating: 4.7,
    students: 1567,
    image: 'https://images.pexels.com/photos/577210/pexels-photo-577210.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 4,
    title: 'Leadership & Management Skills',
    instructor: 'David Wilson',
    category: 'Business',
    level: 'Intermediate',
    duration: '5 weeks',
    rating: 4.6,
    students: 892,
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
];

export const topInstructors: Instructor[] = [
  {
    id: 1,
    name: 'Emma Rodriguez',
    role: 'Marketing Specialist',
    expertise: ['Digital Marketing', 'SEO', 'Social Media'],
    students: 3500,
    courses: 7,
    image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Senior Developer',
    expertise: ['Web Development', 'JavaScript', 'React'],
    students: 4200,
    courses: 12,
    image: 'https://images.pexels.com/photos/3772623/pexels-photo-3772623.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 3,
    name: 'Priya Sharma',
    role: 'Data Scientist',
    expertise: ['Machine Learning', 'Python', 'Statistical Analysis'],
    students: 3100,
    courses: 5,
    image: 'https://images.pexels.com/photos/5212339/pexels-photo-5212339.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 4,
    name: 'David Wilson',
    role: 'Business Coach',
    expertise: ['Leadership', 'Management', 'Entrepreneurship'],
    students: 2800,
    courses: 9,
    image: 'https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
];

export const studentTestimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sophia Lee',
    role: 'Marketing Manager',
    comment: 'The digital marketing course completely transformed my career. The instructors were incredible and the content was cutting-edge.',
    rating: 5,
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 2,
    name: 'Alex Johnson',
    role: 'Frontend Developer',
    comment: 'TalentThree helped me transition from a beginner to a professional developer in just a few months. Highly recommend!',
    rating: 5,
    image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 3,
    name: 'Nia Williams',
    role: 'Data Analyst',
    comment: 'The data science program provided practical skills that I use every day in my job. The support from instructors was outstanding.',
    rating: 4,
    image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
];

export const categories = [
  { name: 'Business', count: 142, icon: 'Briefcase' },
  { name: 'Programming', count: 195, icon: 'Code2' },
  { name: 'Design', count: 87, icon: 'Palette' },
  { name: 'Marketing', count: 103, icon: 'TrendingUp' },
  { name: 'Data Science', count: 76, icon: 'BarChart' },
  { name: 'Personal Development', count: 65, icon: 'Award' },
];