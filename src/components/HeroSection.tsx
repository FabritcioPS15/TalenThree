import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import { PlayCircle } from 'lucide-react';

const HeroSection: React.FC = () => {
  // Variantes de animación
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const badgeVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.8
      }
    }
  };

  return (
    <section className="pt-32 pb-16 bg-gradient-to-br from-purple-700 via-purple-900 to-indigo-900 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col lg:flex-row items-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Contenido de texto */}
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              variants={itemVariants}
            >
              Unlock Your Potential With <span className="text-purple-300">Expert-Led</span> Learning
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl mb-8 text-purple-100 max-w-lg"
              variants={itemVariants}
            >
              Join thousands of students mastering new skills and advancing their careers with our cutting-edge courses.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <Button size="lg" className="shadow-lg hover:scale-[1.02] transition-transform">
                Browse Courses
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white/10 hover:scale-[1.02] transition-transform"
              >
                <PlayCircle className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </motion.div>
            
            <motion.div 
              className="mt-8 flex items-center"
              variants={itemVariants}
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((item) => (
                  <motion.img 
                    key={item}
                    src={`https://i.pravatar.cc/150?img=${item + 10}`} 
                    alt="Student" 
                    className="w-10 h-10 rounded-full border-2 border-purple-800 object-cover"
                    initial={{ x: -20 * item, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 * item, duration: 0.5 }}
                  />
                ))}
              </div>
              <div className="ml-4">
                <p className="font-semibold">Join 25,000+ students</p>
                <div className="flex items-center text-yellow-400 text-sm">
                  ★★★★★ <span className="text-purple-200 ml-1">4.9 (2,500+ reviews)</span>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Imagen y badges */}
          <div className="lg:w-1/2 lg:pl-10">
            <motion.div 
              className="relative"
              variants={imageVariants}
            >
              <motion.img 
                src="https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Students learning" 
                className="rounded-lg shadow-2xl max-w-full h-auto"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
              
              <motion.div 
                className="absolute -bottom-5 -left-5 bg-white p-4 rounded-lg shadow-lg text-gray-800 max-w-xs"
                variants={badgeVariants}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-2 animate-pulse"></div>
                  <p className="font-bold text-sm">Live Courses Available</p>
                </div>
                <p className="text-xs text-gray-600">Join our live sessions with real-time instructor interaction</p>
              </motion.div>
              
              <motion.div 
                className="absolute -top-5 -right-5 bg-white p-4 rounded-lg shadow-lg text-gray-800 max-w-xs"
                variants={badgeVariants}
                whileHover={{ y: -5 }}
                transition={{ delay: 0.2 }}
              >
                <p className="font-bold text-sm mb-1">Learning that fits your schedule</p>
                <p className="text-xs text-gray-600">24/7 access to all courses and materials</p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;