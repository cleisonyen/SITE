import React from 'react';
import { Award, Clock, Heart, Shield } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Award,
      title: 'Experiência Comprovada',
      description: 'Mais de 15 anos oferecendo os melhores passeios em Foz do Iguaçu'
    },
    {
      icon: Shield,
      title: 'Segurança Garantida',
      description: 'Todos os nossos passeios seguem rigorosos protocolos de segurança'
    },
    {
      icon: Heart,
      title: 'Atendimento Personalizado',
      description: 'Cada cliente é único e merece uma experiência especial'
    },
    {
      icon: Clock,
      title: 'Pontualidade',
      description: 'Respeitamos seu tempo com horários precisos e planejamento eficiente'
    }
  ];

  return (
    <section id="sobre" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Sobre a <span className="text-primary-600">EBL Tours</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Somos uma empresa especializada em turismo receptivo em Foz do Iguaçu, 
              oferecendo experiências únicas e inesquecíveis para nossos clientes há mais de 15 anos.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Nossa missão é proporcionar momentos especiais através de passeios cuidadosamente 
              planejados, sempre priorizando a segurança, conforto e satisfação de cada visitante.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-primary-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Cataratas do Iguaçu"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border-l-4 border-primary-500">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <p className="font-bold text-2xl text-gray-800">15+</p>
                  <p className="text-gray-600 text-sm">Anos de Experiência</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;