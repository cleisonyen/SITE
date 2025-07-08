import React, { useState } from 'react';
import { Clock, Users, Star, MapPin, Calendar, Camera, Zap } from 'lucide-react';

const Tours = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Waterfalls', 'Adventure', 'Cultural', 'Nature', 'Premium'];

  const tours = [
    {
      id: 1,
      title: 'Iguazu Falls - Brazilian Side',
      category: 'Waterfalls',
      image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      duration: '4 hours',
      groupSize: 'Up to 15 people',
      rating: 4.9,
      reviews: 1250,
      price: '$85',
      originalPrice: '$100',
      description: 'Experience the breathtaking panoramic views of Iguazu Falls from the Brazilian side with ecological trails and spectacular viewpoints.',
      highlights: ['Panoramic views', 'Ecological trail', 'Bird Park visit', 'Professional guide'],
      difficulty: 'Easy',
      badge: 'Most Popular'
    },
    {
      id: 2,
      title: 'Itaipu Hydroelectric Dam',
      category: 'Cultural',
      image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      duration: '3 hours',
      groupSize: 'Up to 20 people',
      rating: 4.8,
      reviews: 890,
      price: '$65',
      originalPrice: '$75',
      description: 'Discover one of the world\'s largest hydroelectric power plants with technical visits and interactive exhibitions.',
      highlights: ['Technical tour', 'Visitor center', 'Documentary film', 'Engineering marvel'],
      difficulty: 'Easy',
      badge: 'Educational'
    },
    {
      id: 3,
      title: 'Iguazu Falls - Argentine Side',
      category: 'Waterfalls',
      image: 'https://images.pexels.com/photos/2166557/pexels-photo-2166557.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      duration: '6 hours',
      groupSize: 'Up to 12 people',
      rating: 4.9,
      reviews: 1580,
      price: '$120',
      originalPrice: '$140',
      description: 'Complete experience on the Argentine side featuring multiple trails and the famous Devil\'s Throat viewpoint.',
      highlights: ['Devil\'s Throat', 'Upper trail', 'Lower trail', 'Ecological train'],
      difficulty: 'Moderate',
      badge: 'Premium'
    },
    {
      id: 4,
      title: 'Foz do Iguaçu City Tour',
      category: 'Cultural',
      image: 'https://images.pexels.com/photos/2166555/pexels-photo-2166555.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      duration: '4 hours',
      groupSize: 'Up to 18 people',
      rating: 4.7,
      reviews: 650,
      price: '$55',
      originalPrice: '$65',
      description: 'Explore the main attractions of the city including the Three Borders Landmark and Omar Ibn Al-Khattab Mosque.',
      highlights: ['Three Borders', 'Mosque visit', 'City center', 'Duty-free shopping'],
      difficulty: 'Easy',
      badge: 'Cultural'
    },
    {
      id: 5,
      title: 'Macuco Safari Boat Adventure',
      category: 'Adventure',
      image: 'https://images.pexels.com/photos/2166558/pexels-photo-2166558.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      duration: '2.5 hours',
      groupSize: 'Up to 25 people',
      rating: 4.8,
      reviews: 920,
      price: '$95',
      originalPrice: '$110',
      description: 'Thrilling boat adventure to the base of the waterfalls with natural shower and guaranteed adrenaline.',
      highlights: ['Waterfall shower', 'Jungle trail', 'Boat adventure', 'Safety equipment'],
      difficulty: 'Moderate',
      badge: 'Adventure'
    },
    {
      id: 6,
      title: 'Complete Package - 2 Days',
      category: 'Premium',
      image: 'https://images.pexels.com/photos/2166556/pexels-photo-2166556.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      duration: '2 days',
      groupSize: 'Up to 15 people',
      rating: 4.9,
      reviews: 450,
      price: '$280',
      originalPrice: '$350',
      description: 'Complete package featuring all main attractions: Iguazu Falls (both sides), Itaipu Dam, and City Tour.',
      highlights: ['Both sides of falls', 'Itaipu Dam', 'City tour', 'Special discount'],
      difficulty: 'Easy to Moderate',
      badge: 'Best Value'
    }
  ];

  const filteredTours = activeCategory === 'All' 
    ? tours 
    : tours.filter(tour => tour.category === activeCategory);

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'Most Popular': return 'bg-red-500';
      case 'Premium': return 'bg-purple-500';
      case 'Adventure': return 'bg-orange-500';
      case 'Educational': return 'bg-blue-500';
      case 'Cultural': return 'bg-green-500';
      case 'Best Value': return 'bg-yellow-500';
      default: return 'bg-primary-500';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-600 bg-green-100';
      case 'Moderate': return 'text-yellow-600 bg-yellow-100';
      case 'Hard': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <section id="passeios" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center bg-primary-100 text-primary-700 rounded-full px-4 py-2 mb-6">
            <MapPin className="w-4 h-4 mr-2" />
            <span className="text-sm font-semibold">Discover Our Tours</span>
          </div>
          
          <h2 className="section-title">
            Unforgettable <span className="gradient-text">Experiences</span> Await
          </h2>
          <p className="section-subtitle">
            Choose from our carefully curated selection of tours designed to showcase 
            the best of Foz do Iguaçu and create memories that will last a lifetime
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-on-scroll">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-600 hover:bg-primary-50 hover:text-primary-600 shadow-md'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Tours Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTours.map((tour, index) => (
            <div 
              key={tour.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                
                {/* Badge */}
                <div className={`absolute top-4 left-4 ${getBadgeColor(tour.badge)} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                  {tour.badge}
                </div>
                
                {/* Rating */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-semibold">{tour.rating}</span>
                    <span className="text-xs text-gray-500">({tour.reviews})</span>
                  </div>
                </div>
                
                {/* Price */}
                <div className="absolute bottom-4 right-4 bg-white rounded-full px-4 py-2">
                  <div className="text-right">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-500 line-through">{tour.originalPrice}</span>
                      <span className="text-lg font-bold text-primary-600">{tour.price}</span>
                    </div>
                  </div>
                </div>

                {/* Difficulty */}
                <div className="absolute bottom-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(tour.difficulty)}`}>
                    {tour.difficulty}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary-600 transition-colors duration-300 font-heading">
                  {tour.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
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
                  <h4 className="font-semibold text-gray-800 mb-3 text-sm">Tour Highlights:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {tour.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center text-xs text-gray-600">
                        <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-2 flex-shrink-0"></div>
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex space-x-3">
                  <button className="flex-1 btn-primary text-sm py-3 px-4">
                    Book Now
                  </button>
                  <button className="flex-1 btn-secondary text-sm py-3 px-4">
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20 animate-on-scroll">
          <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-3xl p-12 text-white max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6 font-heading">
                Can't Find Your Perfect Tour?
              </h3>
              <p className="mb-8 text-primary-100 text-lg leading-relaxed">
                Our expert team specializes in creating custom itineraries tailored to your 
                interests, schedule, and budget. Let us design your dream experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-primary-600 font-semibold py-4 px-8 rounded-full hover:bg-gray-100 transition-colors duration-300">
                  Create Custom Tour
                </button>
                <button className="border-2 border-white text-white font-semibold py-4 px-8 rounded-full hover:bg-white hover:text-primary-600 transition-colors duration-300">
                  Speak with Expert
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tours;