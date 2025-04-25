export interface Course {
  id: number;
  title: string;
  instructor: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  rating: number;
  students: number;
  image: string;
}

export interface Instructor {
  id: number;
  name: string;
  role: string;
  expertise: string[];
  students: number;
  courses: number;
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  comment: string;
  rating: number;
  image: string;
}