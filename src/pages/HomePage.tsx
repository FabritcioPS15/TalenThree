import React from 'react';
import { CheckCircle, ArrowRight, Award, Users, Clock, BookOpen, Send, BadgeCheck, ShieldCheck, Zap, Play } from 'lucide-react';
import Button from '../components/Button';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="pt-28 pb-20 bg-gradient-to-br from-purple-900 via-purple-700 to-indigo-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-indigo-500 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-violet-500 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <div className="animate-fadeInUp">
                <span className="inline-block bg-purple-600/80 text-white text-sm px-4 py-2 rounded-full mb-6 font-medium shadow-lg">
                  Transformación Profesional
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  <span className="text-purple-300">IMPULSA TU TALENTO</span> , CRECE{" "}
                  <span className="text-purple-300">, TRANSFORMA</span> Y DESTACA TU ORGANIZACIÓN
                </h1>
              </div>
              
              <p className="text-lg md:text-xl mb-8 text-purple-100 max-w-lg animate-fadeInUp delay-100">
              Elige el curso que fortalecerá tu desarrollo profesional y haz que tu empresa alcance su máximo potencial.              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp delay-200">
                <Button size="lg" className="bg-purple-500 hover:bg-purple-600 hover:scale-[1.02] transition-transform shadow-lg shadow-purple-500/30">
                  ¡Quiero inscribirme ahora!
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 hover:scale-[1.02] transition-transform">
                  <Play className="w-5 h-5 mr-2" />
                  Ver video institucional
                </Button>
              </div>

              <div className="mt-12 flex flex-wrap gap-6 animate-fadeInUp delay-300">
                <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <BadgeCheck className="w-5 h-5 text-purple-300 mr-2" />
                  <span className="text-purple-100">Certificación internacional</span>
                </div>
                <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <ShieldCheck className="w-5 h-5 text-purple-300 mr-2" />
                  <span className="text-purple-100">Garantía de satisfacción</span>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 lg:pl-12 relative animate-fadeIn">
              <div className="relative group">
                <div className="absolute -inset-4 bg-purple-500/20 rounded-2xl blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img 
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80" 
                  alt="Profesionales aprendiendo" 
                  className="relative z-10 rounded-xl shadow-2xl border-4 border-white/20 transform transition-all duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

    {/* Benefits Section */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-6">
    <div className="text-center mb-16 animate-fadeIn">
      <span className="inline-block bg-purple-100 text-purple-800 text-sm px-4 py-2 rounded-full mb-4 font-medium shadow-md">
        ¿Por qué elegirnos?
      </span>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        Más que <span className="text-purple-600">cursos</span>, una{" "}
        <span className="text-purple-600">experiencia transformadora</span>
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Diseñamos cada detalle para que tu aprendizaje sea efectivo, práctico y aplicable inmediatamente en tu trabajo.
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-gradient-to-b from-white to-purple-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fadeInUp delay-100 border-l-4 border-purple-500">
        <div className="flex items-start mb-6">
          <div className="bg-purple-100 p-3 rounded-lg shadow-md">
            <BadgeCheck className="h-8 w-8 text-purple-600" />
          </div>
          <div className="ml-6">
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Certificación de valor
            </h3>
            <p className="text-gray-600">
              Reconocimiento que respalda tu crecimiento y mejora tu empleabilidad.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-white to-purple-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fadeInUp delay-200 border-l-4 border-indigo-500">
        <div className="flex items-start mb-6">
          <div className="bg-indigo-100 p-3 rounded-lg shadow-md">
            <Users className="h-8 w-8 text-indigo-600" />
          </div>
          <div className="ml-6">
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Acompañamiento personalizado
            </h3>
            <p className="text-gray-600">
              Seguimiento y asesoría para aplicar lo aprendido en tu entorno laboral.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-white to-purple-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fadeInUp delay-300 border-l-4 border-violet-500">
        <div className="flex items-start mb-6">
          <div className="bg-violet-100 p-3 rounded-lg shadow-md">
            <BookOpen className="h-8 w-8 text-violet-600" />
          </div>
          <div className="ml-6">
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Inglés para el trabajo
            </h3>
            <p className="text-gray-600">
              Aprenderás técnicas de negociación, mejorando tu empleabilidad y proyección profesional.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Courses Section */}
      <section className="py-20 bg-purple-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 animate-fadeIn">
            <div className="mb-6 md:mb-0">
              <span className="inline-block bg-purple-100 text-purple-800 text-sm px-4 py-2 rounded-full mb-4 font-medium shadow-md">
                Nuestros programas estrella
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Transforma tu carrera con{" "}
                <span className="text-purple-600">nuestros cursos disponibles</span>
              </h2>
            </div>
            <Button variant="outline" className="border-purple-500 text-purple-600 hover:bg-purple-50 hover:scale-[1.02] transition-transform">
              Ver todos los cursos
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Course 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fadeInUp delay-100 group">
              <div className="relative overflow-hidden h-48">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Liderazgo" 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 to-transparent"></div>
                <span className="absolute top-4 right-4 bg-purple-600 text-white text-xs px-3 py-1 rounded-full shadow-md">
                  MÁS POPULAR
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded shadow-sm">
                    LIDERAZGO
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Liderazgo Transformacional
                </h3>
                <p className="text-gray-600 mb-6">
                  Domina las estrategias para inspirar equipos y generar cambios organizacionales significativos.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-gray-900">S/1,200</span>
                  <Button size="sm" className="bg-purple-600 hover:bg-purple-700 hover:scale-[1.03] transition-transform">
                    Más información
                  </Button>
                </div>
              </div>
            </div>

            {/* Course 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fadeInUp delay-150 group">
              <div className="relative overflow-hidden h-48">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" 
                  alt="Gestión de talento" 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 to-transparent"></div>
                <span className="absolute top-4 right-4 bg-pink-600 text-white text-xs px-3 py-1 rounded-full shadow-md">
                  30% DSCTO
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="bg-pink-100 text-pink-800 text-xs px-2 py-1 rounded shadow-sm">
                    RRHH
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Gestión Estratégica del Talento
                </h3>
                <p className="text-gray-600 mb-6">
                  Atrae, desarrolla y retiene al mejor talento para tu organización con estrategias modernas.
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-sm text-gray-500 line-through">S/900</span>
                    <span className="text-2xl font-bold text-gray-900 ml-2">S/630</span>
                  </div>
                  <Button size="sm" className="bg-purple-600 hover:bg-purple-700 hover:scale-[1.03] transition-transform">
                    Más información
                  </Button>
                </div>
              </div>
            </div>

            {/* Course 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fadeInUp delay-200 group">
              <div className="relative overflow-hidden h-48">
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Productividad" 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 to-transparent"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded shadow-sm">
                    PRODUCTIVIDAD
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Máxima Productividad Ejecutiva
                </h3>
                <p className="text-gray-600 mb-6">
                  Sistemas comprobados para lograr más en menos tiempo sin sacrificar calidad de vida.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-gray-900">S/850</span>
                  <Button size="sm" className="bg-purple-600 hover:bg-purple-700 hover:scale-[1.03] transition-transform">
                    Más información
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment Benefits */}
      <section className="py-20 bg-gradient-to-br from-purple-900 to-indigo-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-purple-300">Beneficios exclusivos</span> al inscribirte hoy
            </h2>
            <p className="text-lg text-purple-100 max-w-2xl mx-auto">
              No pierdas esta oportunidad única de potenciar tu carrera con estos regalos especiales.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fadeInUp delay-100">
              <div className="flex items-center mb-6">
                <div className="bg-purple-500 p-3 rounded-full mr-4">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Material exclusivo</h3>
              </div>
              <p className="text-purple-100">
                Acceso inmediato a nuestras guías prácticas y plantillas descargables valoradas en $200.
              </p>
            </div>

            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fadeInUp delay-200">
              <div className="flex items-center mb-6">
                <div className="bg-purple-500 p-3 rounded-full mr-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Sesión de mentoría</h3>
              </div>
              <p className="text-purple-100">
                30 minutos de asesoría personalizada con uno de nuestros expertos para resolver tus dudas específicas.
              </p>
            </div>

            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fadeInUp delay-300">
              <div className="flex items-center mb-6">
                <div className="bg-purple-500 p-3 rounded-full mr-4">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Certificación digital</h3>
              </div>
              <p className="text-purple-100">
                Obtén tu certificado verificable online para compartir en LinkedIn y destacar tu perfil profesional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-12 shadow-xl overflow-hidden relative">
            <div className="absolute -right-20 -top-20 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
            <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
            
            <div className="flex flex-col lg:flex-row gap-12 relative z-10">
              <div className="lg:w-1/2 animate-fadeIn">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  ¿Listo para dar el siguiente paso en tu carrera?
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Completa este formulario y uno de nuestros asesores se pondrá en contacto contigo para guiarte en la elección del programa ideal.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                    <CheckCircle className="w-6 h-6 text-purple-600 mr-4" />
                    <span className="text-gray-700">Asesoría personalizada sin costo</span>
                  </div>
                  <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                    <CheckCircle className="w-6 h-6 text-purple-600 mr-4" />
                    <span className="text-gray-700">Flexibilidad de horarios</span>
                  </div>
                  <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                    <CheckCircle className="w-6 h-6 text-purple-600 mr-4" />
                    <span className="text-gray-700">Garantía de satisfacción</span>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2 animate-fadeIn delay-100">
                <form className="bg-white p-8 rounded-xl shadow-lg">
                  <div className="mb-6">
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nombre completo</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                      placeholder="Ingresa tu nombre"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Correo electrónico</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                      placeholder="tucorreo@ejemplo.com"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Teléfono</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                      placeholder="+51 XXX XXX XXX"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="course" className="block text-gray-700 font-medium mb-2">Programa de interés</label>
                    <select 
                      id="course" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                    >
                      <option value="">Selecciona un programa</option>
                      <option value="liderazgo">Liderazgo Transformacional</option>
                      <option value="talento">Gestión Estratégica del Talento</option>
                      <option value="productividad">Máxima Productividad Ejecutiva</option>
                      <option value="otros">Otro (especificar en comentarios)</option>
                    </select>
                  </div>
                  
                  <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 hover:scale-[1.01] transition-transform text-white font-medium py-3 rounded-lg flex items-center justify-center">
                    Enviar solicitud
                    <Send className="w-5 h-5 ml-2" />
                  </button>
                  
                  <p className="text-sm text-gray-500 mt-4">
                    Al enviar este formulario, aceptas nuestra política de privacidad. Nos comprometemos a no compartir tu información.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;