import React from 'react';
import { Award, Clock, Heart, Shield, Globe, Users } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Award,
      title: 'Award-Winning Excellence',
      description: 'Recognized as the leading tour operator in Foz do Iguaçu for over 20 years'
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'All our tours follow strict safety protocols and international standards'
    },
    {
      icon: Heart,
      title: 'Personalized Service',
      description: 'Every guest receives individual attention and customized experiences'
    },
    {
      icon: Clock,
      title: 'Punctuality Guaranteed',
      description: 'We respect your time with precise scheduling and efficient planning'
    },
    {
      icon: Globe,
      title: 'International Standards',
      description: 'Multilingual guides and services meeting global tourism standards'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Professional guides with deep knowledge of local culture and nature'
    }
  ];

  return (
    <section id="sobre" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-on-scroll">
            <div className="inline-flex items-center bg-primary-100 text-primary-700 rounded-full px-4 py-2 mb-6">
              <Award className="w-4 h-4 mr-2" />
              <span className="text-sm font-semibold">About EBL Tours International</span>
            </div>
            
            <h2 className="section-title">
              Your Gateway to <span className="gradient-text">Unforgettable</span> Adventures
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              For over two decades, EBL Tours International has been the premier choice for travelers 
              seeking authentic and extraordinary experiences in Foz do Iguaçu and the tri-border region.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We specialize in creating personalized journeys that showcase the natural wonders, 
              cultural richness, and hidden gems of this magnificent destination, ensuring every 
              moment becomes a cherished memory.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center group-hover:bg-primary-600 transition-colors duration-300">
                      <feature.icon className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-primary-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary">
                Learn More About Us
              </button>
              <button className="btn-secondary">
                View Our Certifications
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative animate-on-scroll">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Iguazu Falls Experience"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            
            {/* Floating Stats Cards */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border-l-4 border-primary-500">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center">
                  <Award className="w-7 h-7 text-primary-600" />
                </div>
                <div>
                  <p className="font-bold text-3xl text-gray-800">20+</p>
                  <p className="text-gray-600 text-sm font-medium">Years of Excellence</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-8 -right-8 bg-white p-6 rounded-2xl shadow-xl border-l-4 border-secondary-500">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-secondary-100 rounded-full flex items-center justify-center">
                  <Users className="w-7 h-7 text-secondary-600" />
                </div>
                <div>
                  <p className="font-bold text-3xl text-gray-800">25k+</p>
                  <p className="text-gray-600 text-sm font-medium">Happy Travelers</p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-4 left-4 w-20 h-20 bg-primary-400/20 rounded-full animate-pulse"></div>
            <div className="absolute bottom-16 right-4 w-16 h-16 bg-secondary-400/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;