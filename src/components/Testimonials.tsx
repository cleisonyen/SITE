import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Maria Silva',
      location: 'São Paulo, SP',
      rating: 5,
      text: 'Experiência incrível! A EBL Tours superou todas as expectativas. O guia era muito conhecedor e os locais visitados foram espetaculares. Recomendo para todos!',
      tour: 'Cataratas Completas'
    },
    {
      name: 'João Santos',
      location: 'Rio de Janeiro, RJ',
      rating: 5,
      text: 'Passeio muito bem organizado. Pontualidade, conforto e segurança em primeiro lugar. As Cataratas são realmente de tirar o fôlego!',
      tour: 'Lado Brasileiro + Argentino'
    },
    {
      name: 'Ana Costa',
      location: 'Belo Horizonte, MG',
      rating: 5,
      text: 'Atendimento excepcional desde o primeiro contato. A equipe é muito profissional e atenciosa. Voltaremos com certeza!',
      tour: 'City Tour + Itaipu'
    },
    {
      name: 'Carlos Oliveira',
      location: 'Curitiba, PR',
      rating: 5,
      text: 'Melhor agência de turismo de Foz! Preços justos, qualidade excelente e experiência inesquecível. Parabéns pelo trabalho!',
      tour: 'Combo Completo'
    },
    {
      name: 'Fernanda Lima',
      location: 'Porto Alegre, RS',
      rating: 5,
      text: 'Viagem dos sonhos! Tudo perfeito, desde o transporte até os roteiros. A EBL Tours fez nossa lua de mel ser ainda mais especial.',
      tour: 'Roteiro Romântico'
    },
    {
      name: 'Roberto Mendes',
      location: 'Salvador, BA',
      rating: 5,
      text: 'Profissionalismo e dedicação em cada detalhe. Os guias são excelentes e conhecem muito bem a região. Experiência única!',
      tour: 'Aventura Completa'
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            O que nossos <span className="text-primary-600">clientes</span> dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A satisfação dos nossos clientes é nossa maior recompensa. 
            Veja alguns depoimentos de quem já viveu experiências incríveis conosco
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Tour Info */}
              <div className="mb-4">
                <span className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                  {testimonial.tour}
                </span>
              </div>

              {/* Customer Info */}
              <div className="border-t pt-4">
                <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                <p className="text-gray-500 text-sm">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">15k+</div>
              <div className="text-gray-600">Clientes Satisfeitos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">4.9</div>
              <div className="text-gray-600">Avaliação Média</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">98%</div>
              <div className="text-gray-600">Recomendação</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">15+</div>
              <div className="text-gray-600">Anos de Experiência</div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Seja o próximo a viver essa experiência!
            </h3>
            <p className="mb-6 text-primary-100">
              Junte-se aos milhares de clientes satisfeitos e descubra por que somos a melhor escolha em Foz do Iguaçu
            </p>
            <button className="bg-white text-primary-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300">
              Reservar Meu Passeio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;