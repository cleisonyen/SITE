import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Camera, Eye } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const images = [
    {
      src: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Iguazu Falls - Panoramic View',
      category: 'Waterfalls',
      location: 'Brazilian Side'
    },
    {
      src: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Itaipu Hydroelectric Dam',
      category: 'Engineering',
      location: 'Itaipu'
    },
    {
      src: 'https://images.pexels.com/photos/2166557/pexels-photo-2166557.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Devil\'s Throat',
      category: 'Waterfalls',
      location: 'Argentine Side'
    },
    {
      src: 'https://images.pexels.com/photos/2166555/pexels-photo-2166555.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Three Borders Landmark',
      category: 'Cultural',
      location: 'Foz do Iguaçu'
    },
    {
      src: 'https://images.pexels.com/photos/2166558/pexels-photo-2166558.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Boat Adventure',
      category: 'Adventure',
      location: 'Macuco Safari'
    },
    {
      src: 'https://images.pexels.com/photos/2166556/pexels-photo-2166556.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Nature Trail',
      category: 'Nature',
      location: 'National Park'
    },
    {
      src: 'https://images.pexels.com/photos/2166554/pexels-photo-2166554.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Bird Park',
      category: 'Nature',
      location: 'Bird Park'
    },
    {
      src: 'https://images.pexels.com/photos/2166552/pexels-photo-2166552.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Friendship Bridge',
      category: 'Cultural',
      location: 'Brazil-Paraguay'
    },
    {
      src: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Sunset at Falls',
      category: 'Waterfalls',
      location: 'Golden Hour'
    },
    {
      src: 'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Wildlife Spotting',
      category: 'Nature',
      location: 'National Park'
    },
    {
      src: 'https://images.pexels.com/photos/1450340/pexels-photo-1450340.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Adventure Sports',
      category: 'Adventure',
      location: 'Extreme Sports'
    },
    {
      src: 'https://images.pexels.com/photos/1761280/pexels-photo-1761280.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Local Culture',
      category: 'Cultural',
      location: 'City Center'
    }
  ];

  const categories = ['All', 'Waterfalls', 'Nature', 'Adventure', 'Cultural', 'Engineering'];

  const filteredImages = activeCategory === 'All' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section id="galeria" className="section-padding bg-white">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center bg-primary-100 text-primary-700 rounded-full px-4 py-2 mb-6">
            <Camera className="w-4 h-4 mr-2" />
            <span className="text-sm font-semibold">Visual Journey</span>
          </div>
          
          <h2 className="section-title">
            Capture the <span className="gradient-text">Magic</span>
          </h2>
          <p className="section-subtitle">
            Immerse yourself in the breathtaking beauty of Foz do Iguaçu through our 
            curated collection of stunning photographs from our tours
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
                  : 'bg-gray-100 text-gray-600 hover:bg-primary-50 hover:text-primary-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-square animate-on-scroll card-hover"
              onClick={() => openModal(index)}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="font-semibold text-sm mb-1">{image.alt}</p>
                  <p className="text-xs text-gray-300">{image.location}</p>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Eye className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
              <div className="absolute top-4 left-4">
                <span className="bg-primary-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                  {image.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-6xl max-h-full w-full">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 w-12 h-12 bg-black/50 rounded-full flex items-center justify-center backdrop-blur-sm"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10 w-12 h-12 bg-black/50 rounded-full flex items-center justify-center backdrop-blur-sm"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10 w-12 h-12 bg-black/50 rounded-full flex items-center justify-center backdrop-blur-sm"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image */}
              <div className="flex items-center justify-center h-full">
                <img
                  src={filteredImages[selectedImage].src}
                  alt={filteredImages[selectedImage].alt}
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
              </div>

              {/* Image Info */}
              <div className="absolute bottom-6 left-6 right-6 text-white bg-black/50 backdrop-blur-sm rounded-2xl p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-lg mb-1">{filteredImages[selectedImage].alt}</p>
                    <p className="text-gray-300">{filteredImages[selectedImage].location}</p>
                  </div>
                  <div className="text-right">
                    <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {filteredImages[selectedImage].category}
                    </span>
                    <p className="text-sm text-gray-300 mt-2">
                      {selectedImage + 1} of {filteredImages.length}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center mt-20 animate-on-scroll">
          <div className="bg-gradient-to-r from-gray-50 to-primary-50 rounded-3xl p-12 max-w-4xl mx-auto border border-primary-100">
            <h3 className="text-3xl font-bold text-gray-800 mb-6 font-heading">
              Ready to Create Your Own Memories?
            </h3>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Join thousands of travelers who have experienced the magic of Foz do Iguaçu. 
              Book your tour today and become part of our gallery!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Book Your Adventure
              </button>
              <button className="btn-secondary">
                View All Tours
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;