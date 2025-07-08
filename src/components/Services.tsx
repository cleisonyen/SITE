import React from 'react';
import { Bus, Camera, MapPin, Users, Clock, Shield, Plane, Hotel } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Bus,
      title: 'Premium Transportation',
      description: 'Luxury vehicles with air conditioning, WiFi, and professional multilingual drivers',
      features: ['Modern fleet', 'Air conditioning', 'Full insurance', 'Expert drivers'],
      color: 'primary'
    },
    {
      icon: Camera,
      title: 'Photography Tours',
      description: 'Specialized routes designed for capturing the most stunning landscapes and moments',
      features: ['Best viewpoints', 'Golden hour timing', 'Pro photography tips', 'Equipment rental'],
      color: 'secondary'
    },
    {
      icon: MapPin,
      title: 'Custom Itineraries',
      description: 'Tailor-made experiences crafted according to your interests and preferences',
      features: ['Personalized routes', 'Flexible scheduling', 'Private guides', 'Free consultation'],
      color: 'accent'
    },
    {
      icon: Users,
      title: 'Group & Corporate',
      description: 'Specialized services for large groups, companies, and special events',
      features: ['Group discounts', 'Team building', 'Event planning', 'Corporate packages'],
      color: 'primary'
    },
    {
      icon: Plane,
      title: 'Airport Transfers',
      description: 'Comfortable and reliable transportation from/to airports and hotels',
      features: ['Meet & greet', '24/7 availability', 'Flight monitoring', 'Luggage assistance'],
      color: 'secondary'
    },
    {
      icon: Hotel,
      title: 'Accommodation',
      description: 'Carefully selected hotels and lodges that meet international standards',
      features: ['Quality guarantee', 'Best locations', 'Special rates', 'Concierge service'],
      color: 'accent'
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return {
          bg: 'bg-primary-100',
          icon: 'text-primary-600',
          hoverBg: 'group-hover:bg-primary-600',
          hoverIcon: 'group-hover:text-white',
          title: 'group-hover:text-primary-600'
        };
      case 'secondary':
        return {
          bg: 'bg-secondary-100',
          icon: 'text-secondary-600',
          hoverBg: 'group-hover:bg-secondary-600',
          hoverIcon: 'group-hover:text-white',
          title: 'group-hover:text-secondary-600'
        };
      case 'accent':
        return {
          bg: 'bg-accent-100',
          icon: 'text-accent-600',
          hoverBg: 'group-hover:bg-accent-600',
          hoverIcon: 'group-hover:text-white',
          title: 'group-hover:text-accent-600'
        };
      default:
        return {
          bg: 'bg-primary-100',
          icon: 'text-primary-600',
          hoverBg: 'group-hover:bg-primary-600',
          hoverIcon: 'group-hover:text-white',
          title: 'group-hover:text-primary-600'
        };
    }
  };

  return (
    <section id="servicos" className="section-padding bg-white">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center bg-primary-100 text-primary-700 rounded-full px-4 py-2 mb-6">
            <Shield className="w-4 h-4 mr-2" />
            <span className="text-sm font-semibold">Our Premium Services</span>
          </div>
          
          <h2 className="section-title">
            Comprehensive <span className="gradient-text">Travel Solutions</span>
          </h2>
          <p className="section-subtitle">
            We offer a complete range of premium tourism services designed to make your 
            journey to Foz do Iguaçu seamless, comfortable, and unforgettable
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const colors = getColorClasses(service.color);
            return (
              <div 
                key={index}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 card-hover animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center mb-6 ${colors.hoverBg} transition-all duration-300`}>
                  <service.icon className={`w-8 h-8 ${colors.icon} ${colors.hoverIcon} transition-colors duration-300`} />
                </div>

                {/* Content */}
                <h3 className={`text-xl font-bold text-gray-800 mb-4 ${colors.title} transition-colors duration-300 font-heading`}>
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                      <div className={`w-2 h-2 ${colors.bg} rounded-full mr-3 flex-shrink-0`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="pt-6 border-t border-gray-100">
                  <button className={`${colors.icon} font-semibold hover:${colors.title.split(' ')[0]} transition-colors duration-200 flex items-center group`}>
                    Learn More 
                    <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20 animate-on-scroll">
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-3xl p-12 max-w-4xl mx-auto border border-primary-100">
            <h3 className="text-3xl font-bold text-gray-800 mb-6 font-heading">
              Need Something Specific?
            </h3>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Contact our expert team to create a completely customized package 
              tailored to your unique requirements and preferences
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Request Custom Quote
              </button>
              <button className="btn-secondary">
                Speak with Expert
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;