import React from 'react';
import { MapPin, Star, Users, Award, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        <div className="absolute inset-0 bg-hero-pattern"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
        <div className="animate-fade-in">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
            <Award className="w-5 h-5 mr-2 text-secondary-400" />
            <span className="text-sm font-medium">Award-Winning Tour Company</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight font-heading">
            Discover the
            <span className="block bg-gradient-to-r from-secondary-400 to-primary-400 bg-clip-text text-transparent">
              Wonders of
            </span>
            <span className="block text-4xl md:text-6xl lg:text-7xl">Iguazu Falls</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Experience the breathtaking beauty of one of the world's most spectacular waterfalls 
            with our expert-guided tours and premium services
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button className="btn-primary text-lg px-10 py-5 group">
              <span>Explore Our Tours</span>
              <MapPin className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="btn-secondary text-lg px-10 py-5 bg-white/10 border-white text-white hover:bg-white hover:text-primary-600 group">
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              <span>Watch Video</span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center group">
              <div className="flex items-center justify-center mb-3">
                <Users className="w-8 h-8 text-secondary-400 mr-2" />
                <span className="text-4xl font-bold font-heading">25k+</span>
              </div>
              <p className="text-gray-300 font-medium">Happy Travelers</p>
            </div>
            
            <div className="text-center group">
              <div className="flex items-center justify-center mb-3">
                <Star className="w-8 h-8 text-yellow-400 mr-2" />
                <span className="text-4xl font-bold font-heading">4.9</span>
              </div>
              <p className="text-gray-300 font-medium">Average Rating</p>
            </div>
            
            <div className="text-center group">
              <div className="flex items-center justify-center mb-3">
                <MapPin className="w-8 h-8 text-secondary-400 mr-2" />
                <span className="text-4xl font-bold font-heading">50+</span>
              </div>
              <p className="text-gray-300 font-medium">Tour Destinations</p>
            </div>

            <div className="text-center group">
              <div className="flex items-center justify-center mb-3">
                <Award className="w-8 h-8 text-secondary-400 mr-2" />
                <span className="text-4xl font-bold font-heading">20+</span>
              </div>
              <p className="text-gray-300 font-medium">Years Experience</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-bounce-slow hidden lg:block"></div>
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-secondary-400/20 rounded-full animate-bounce-slow hidden lg:block" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-8 w-12 h-12 bg-primary-400/20 rounded-full animate-bounce-slow hidden lg:block" style={{ animationDelay: '2s' }}></div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;