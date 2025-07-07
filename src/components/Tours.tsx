import React from 'react';
import { Clock, Users, Star, MapPin } from 'lucide-react';

const Tours = () => {
  const tours = [
    {
      id: 1,
      title: 'Cataratas do Iguaçu - Lado Brasileiro',
      image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      duration: '4 horas',
      groupSize: 'Até 15 pessoas',
      rating: 4.9,
      price: 'R$ 85',
      description: 'Vista panorâmica das majestosas Cataratas do Iguaçu pelo lado brasileiro, com trilha ecológica e mirantes espetaculares.',
      highlights: ['Vista panorâmica', 'Trilha ecológica', 'Parque das Aves', 'Transporte incluído']
    },
    {
      id: 2,
      title: 'Usina Hidrelétrica de Itaipu',
      image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      duration: '3 horas',
      groupSize: 'Até 20 pessoas',
      rating: 4.8,
      price: 'R$ 65',
      description: 'Conheça uma das maiores usinas hidrelétricas do mundo, com visita técnica e centro de visitantes.',
      highlights: ['Visita técnica', 'Centro de visitantes', 'Documentário', 'Guia especializado']
    },
    {
      id: 3,
      title: 'Cataratas - Lado Argentino',
      image: 'https://images.pexels.com/photos/2166557/pexels-photo-2166557.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      duration: '6 horas',
      groupSize: 'Até 12 pessoas',
      rating: 4.9,
      price: 'R$ 120',
      description: 'Experiência completa pelo lado argentino com trilhas, mirantes e a famosa Garganta do Diabo.',
      highlights: ['Garganta do Diabo', 'Trilha superior', 'Trilha inferior', 'Trem ecológico']
    },
    {
      id: 4,
      title: 'City Tour Foz do Iguaçu',
      image: 'https://images.pexels.com/photos/2166555/pexels-photo-2166555.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      duration: '4 horas',
      groupSize: 'Até 18 pessoas',
      rating: 4.7,
      price: 'R$ 55',
      description: 'Conheça os principais pontos turísticos da cidade, incluindo Marco das Três Fronteiras e Mesquita Omar Ibn Al-Khattab.',
      highlights: ['Marco das Três Fronteiras', 'Mesquita', 'Centro da cidade', 'Compras duty-free']
    },
    {
      id: 5,
      title: 'Passeio de Barco Macuco Safari',
      image: 'https://images.pexels.com/photos/2166558/pexels-photo-2166558.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      duration: '2 horas',
      groupSize: 'Até 25 pessoas',
      rating: 4.8,
      price: 'R$ 95',
      description: 'Aventura emocionante de barco até a base das cataratas, com banho natural e adrenalina garantida.',
      highlights: ['Banho nas cataratas', 'Aventura radical', 'Trilha na mata', 'Equipamentos incluídos']
    },
    {
      id: 6,
      title: 'Combo Completo - 2 Dias',
      image: 'https://images.pexels.com/photos/2166556/pexels-photo-2166556.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      duration: '2 dias',
      groupSize: 'Até 15 pessoas',
      rating: 4.9,
      price: 'R$ 280',
      description: 'Pacote completo com os principais atrativos: Cataratas (ambos os lados), Itaipu e City Tour.',
      highlights: ['Cataratas completas', 'Usina de Itaipu', 'City Tour', 'Desconto especial']
    }
  ];

  return (
    <section id="passeios" className="section-padding bg-gray-50">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Nossos <span className="text-primary-600">Passeios</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Descubra as maravilhas de Foz do Iguaçu com nossos passeios cuidadosamente 
            planejados para proporcionar experiências inesquecíveis
          </p>
        </div>

        {/* Tours Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <div 
              key={tour.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-semibold">{tour.rating}</span>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 bg-primary-600 text-white px-4 py-2 rounded-full font-bold">
                  {tour.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                  {tour.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {tour.description}
                </p>

                {/* Tour Info */}
                <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{tour.groupSize}</span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2">Destaques:</h4>
                  <div className="grid grid-cols-2 gap-1">
                    {tour.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-primary-400 rounded-full mr-2 flex-shrink-0"></div>
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex space-x-3">
                  <button className="flex-1 btn-primary text-sm py-2">
                    Reservar
                  </button>
                  <button className="flex-1 btn-secondary text-sm py-2">
                    Detalhes
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Não encontrou o passeio ideal?
            </h3>
            <p className="mb-6 text-primary-100">
              Criamos roteiros personalizados de acordo com seus interesses e disponibilidade
            </p>
            <button className="bg-white text-primary-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300">
              Criar Roteiro Personalizado
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tours;