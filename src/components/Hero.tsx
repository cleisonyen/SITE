import React from 'react';
import { MapPin, Star, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Descubra as Maravilhas de
          <span className="text-primary-400 block">Foz do Iguaçu</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
          Viva experiências inesquecíveis nas Cataratas do Iguaçu, Usina de Itaipu e muito mais com a EBL Tours
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="btn-primary text-lg px-8 py-4">
            Ver Nossos Passeios
          </button>
          <button className="btn-secondary text-lg px-8 py-4 bg-white/10 border-white text-white hover:bg-white hover:text-primary-600">
            Fale Conosco
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Users className="w-8 h-8 text-primary-400 mr-2" />
              <span className="text-3xl font-bold">15k+</span>
            </div>
            <p className="text-gray-300">Turistas Atendidos</p>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Star className="w-8 h-8 text-yellow-400 mr-2" />
              <span className="text-3xl font-bold">4.9</span>
            </div>
            <p className="text-gray-300">Avaliação Média</p>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <MapPin className="w-8 h-8 text-primary-400 mr-2" />
              <span className="text-3xl font-bold">20+</span>
            </div>
            <p className="text-gray-300">Destinos Únicos</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;