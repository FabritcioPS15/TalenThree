import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';
import Logo from '../components/logo ícono.png';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Inicio' },
    { path: '/courses', label: 'Cursos' },
    { path: '/instructors', label: 'Facilitadores' },
    { path: '/events', label: 'Eventos' },
    { path: '/contact', label: 'Contacto' },
  ];

  // Animation variants
  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const mobileMenuVariants = {
    hidden: { 
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.05
      }
    }
  };

  const navItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const searchVariants = {
    hidden: { opacity: 0, y: 5 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.3
      }
    }
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={headerVariants}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-purple-600/95 backdrop-blur-sm py-2 shadow-lg' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center"
            >
              <motion.img 
                src={Logo} 
                alt="TalenThree Logo" 
                className="h-10 w-10 object-contain"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              />
              <motion.span 
                className="ml-2 text-xl font-bold text-white"
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 }}
              >
                TalenThree
              </motion.span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.path}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={navItemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={link.path}
                  className={`px-3 py-2 text-white hover:text-purple-200 font-medium transition-colors ${
                    location.pathname === link.path ? 'text-purple-200 font-semibold' : ''
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Desktop Actions */}
          <motion.div 
            className="hidden md:flex items-center space-x-4"
            initial="hidden"
            animate="visible"
            variants={searchVariants}
          >
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.02 }}
            >
              <input
                type="text"
                placeholder="Buscar cursos..."
                className="py-2 pl-10 pr-4 w-48 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/70" />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/cart" className="relative text-white hover:text-purple-200">
                <ShoppingCart className="h-6 w-6" />
                <motion.span 
                  className="absolute -top-2 -right-2 bg-purple-300 text-purple-900 text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 500 }}
                >
                  0
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button 
            className="md:hidden text-white hover:text-purple-200 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? (
              <X className="h-7 w-7" />
            ) : (
              <Menu className="h-7 w-7" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="md:hidden bg-white shadow-lg overflow-hidden"
          >
            <div className="container mx-auto px-4 py-3">
              <motion.nav className="flex flex-col space-y-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    variants={navItemVariants}
                    custom={index}
                  >
                    <Link
                      to={link.path}
                      className={`block px-4 py-2 text-gray-800 hover:text-purple-700 font-medium rounded-lg transition-colors ${
                        location.pathname === link.path ? 'bg-purple-100 text-purple-700 font-semibold' : ''
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                  variants={navItemVariants}
                  custom={navLinks.length}
                  className="relative mt-2"
                >
                  <input
                    type="text"
                    placeholder="Buscar cursos..."
                    className="w-full py-2 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                </motion.div>
                
                <motion.div 
                  className="flex flex-col space-y-3 pt-2"
                  variants={navItemVariants}
                  custom={navLinks.length + 1}
                >
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Iniciar sesión
                  </Button>
                  <Button 
                    size="sm" 
                    className="w-full bg-purple-600 hover:bg-purple-700"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Registrarse
                  </Button>
                  <Link 
                    to="/cart" 
                    className="flex items-center justify-center space-x-2 text-gray-700 hover:text-purple-700 px-4 py-2 rounded-lg border border-gray-200 hover:border-purple-300 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <ShoppingCart className="h-5 w-5" />
                    <span>Carrito (0)</span>
                  </Link>
                </motion.div>
              </motion.nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;