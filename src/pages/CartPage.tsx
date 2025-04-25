import React from 'react';
import { Trash2, CreditCard } from 'lucide-react';
import Button from '../components/Button';

const CartPage: React.FC = () => {
  const cartItems = [
    {
      id: 1,
      title: 'Introduction to Digital Marketing',
      instructor: 'Emma Rodriguez',
      price: 49.99,
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 2,
      title: 'Advanced Web Development',
      instructor: 'Michael Chen',
      price: 79.99,
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + tax;

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">
            Carrito de Compras
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  
                  <div className="flex-grow">
                    <h3 className="font-medium text-gray-800">{item.title}</h3>
                    <p className="text-gray-600 text-sm">Por {item.instructor}</p>
                    <p className="text-purple-700 font-medium mt-1">${item.price}</p>
                  </div>
                  
                  <button className="text-red-500 hover:text-red-700">
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg h-fit">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Resumen de Compra
              </h2>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Impuestos</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-200 pt-2 mt-2">
                  <div className="flex justify-between font-bold text-gray-800">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              
              <Button className="w-full">
                <CreditCard className="h-5 w-5 mr-2" />
                Proceder al Pago
              </Button>
              
              <p className="text-xs text-gray-500 text-center mt-4">
                Pago seguro con SSL. Los precios incluyen impuestos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;