import React from 'react';
import { Calendar, MapPin, Clock, Users } from 'lucide-react';
import Button from '../components/Button';

const events = [
  {
    id: 1,
    title: 'Workshop de Desarrollo Web',
    date: '15 de Abril, 2025',
    time: '10:00 AM - 2:00 PM',
    location: 'Online',
    instructor: 'Michael Chen',
    capacity: 50,
    image: 'https://images.pexels.com/photos/7092613/pexels-photo-7092613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 2,
    title: 'Masterclass de Marketing Digital',
    date: '20 de Abril, 2025',
    time: '3:00 PM - 6:00 PM',
    location: 'Online',
    instructor: 'Emma Rodriguez',
    capacity: 100,
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 3,
    title: 'Data Science Summit',
    date: '25 de Abril, 2025',
    time: '9:00 AM - 5:00 PM',
    location: 'Online',
    instructor: 'Priya Sharma',
    capacity: 200,
    image: 'https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

const EventsPage: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Próximos Eventos
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Participa en nuestros eventos exclusivos y workshops dirigidos por expertos de la industria.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="relative h-48">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {event.title}
                </h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-5 w-5 mr-2 text-purple-600" />
                    <span>{event.date}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-5 w-5 mr-2 text-purple-600" />
                    <span>{event.time}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-5 w-5 mr-2 text-purple-600" />
                    <span>{event.location}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600">
                    <Users className="h-5 w-5 mr-2 text-purple-600" />
                    <span>Capacidad: {event.capacity} personas</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-purple-700 font-medium">
                    Por {event.instructor}
                  </span>
                  <Button>Inscribirse</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsPage;