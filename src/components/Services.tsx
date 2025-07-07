import React from 'react';
import { Bus, Camera, MapPin, Users, Clock, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Bus,
      title: 'Transporte Executivo',
      description: 'Veículos modernos e confortáveis com ar-condicionado e guias especializados',
      features: ['Veículos novos', 'Ar-condicionado', 'Seguro total', 'Motoristas experientes']
    },
    {
      icon: Camera,
      title: 'Passeios Fotográficos',
      description: 'Roteiros especiais para capturar os melhores momentos e paisagens',
      features: ['Pontos estratégicos', 'Horários ideais', 'Dicas profissionais', 'Tempo para fotos']
    },
    {
      icon: MapPin,
      title: 'Roteiros Personalizados',
      description: 'Criamos itinerários únicos baseados nos seus interesses e preferências',
      features: ['Sob medida', 'Flexível', 'Exclusivo', 'Consultoria gratuita']
    },
    {
      icon: Users,
      title: 'Grupos e Eventos',
      description: 'Atendimento especializado para grupos, empresas e eventos especiais',
      features: ['Grupos grandes', 'Preços especiais', 'Organização completa', 'Suporte total']
    },
    {
      icon: Clock,
      title: 'Horários Flexíveis',
      description: 'Adaptamos nossos horários às suas necessidades e disponibilidade',
      features: ['Manhã ou tarde', 'Fins de semana', 'Feriados', 'Horário personalizado']
    },
    {
      icon: Shield,
      title: 'Seguro e Suporte',
      description: 'Cobertura completa e suporte 24h durante todos os nossos passeios',
      features: ['Seguro incluído', 'Suporte 24h', 'Emergência médica', 'Assistência total']
    }
  ];

  return (
    <section id="servicos" className="section-padding bg-white">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Nossos <span className="text-primary-600">Serviços</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Oferecemos uma gama completa de serviços turísticos para tornar sua visita 
            a Foz do Iguaçu uma experiência única e inesquecível
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors duration-300">
                <service.icon className="w-8 h-8 text-primary-600 group-hover:text-white transition-colors duration-300" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-primary-400 rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <button className="text-primary-600 font-semibold hover:text-primary-700 transition-colors duration-200">
                  Saiba mais →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-primary-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Precisa de algo específico?
            </h3>
            <p className="text-gray-600 mb-6">
              Entre em contato conosco e criaremos um pacote personalizado para você
            </p>
            <button className="btn-primary">
              Solicitar Orçamento
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;