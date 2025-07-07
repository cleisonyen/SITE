import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      src: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Cataratas do Iguaçu - Vista Panorâmica',
      category: 'Cataratas'
    },
    {
      src: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Usina de Itaipu',
      category: 'Itaipu'
    },
    {
      src: 'https://images.pexels.com/photos/2166557/pexels-photo-2166557.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Garganta do Diabo',
      category: 'Cataratas'
    },
    {
      src: 'https://images.pexels.com/photos/2166555/pexels-photo-2166555.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Marco das Três Fronteiras',
      category: 'City Tour'
    },
    {
      src: 'https://images.pexels.com/photos/2166558/pexels-photo-2166558.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Passeio de Barco',
      category: 'Aventura'
    },
    {
      src: 'https://images.pexels.com/photos/2166556/pexels-photo-2166556.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Trilha nas Cataratas',
      category: 'Cataratas'
    },
    {
      src: 'https://images.pexels.com/photos/2166554/pexels-photo-2166554.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Parque das Aves',
      category: 'Natureza'
    },
    {
      src: 'https://images.pexels.com/photos/2166552/pexels-photo-2166552.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Ponte da Amizade',
      category: 'City Tour'
    }
  ];

  const categories = ['Todos', 'Cataratas', 'Itaipu', 'City Tour', 'Aventura', 'Natureza'];
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filteredImages = activeCategory === 'Todos' 
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
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Nossa <span className="text-primary-600">Galeria</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Veja alguns dos momentos mais especiais capturados durante nossos passeios 
            e inspire-se para sua próxima aventura
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl cursor-pointer aspect-square"
              onClick={() => openModal(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                  <p className="font-semibold">{image.alt}</p>
                  <p className="text-sm text-gray-200">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
              >
                <ChevronRight className="w-8 h-8" />
              </button>

              {/* Image */}
              <img
                src={filteredImages[selectedImage].src}
                alt={filteredImages[selectedImage].alt}
                className="max-w-full max-h-full object-contain rounded-lg"
              />

              {/* Image Info */}
              <div className="absolute bottom-4 left-4 text-white">
                <p className="font-semibold text-lg">{filteredImages[selectedImage].alt}</p>
                <p className="text-gray-300">{filteredImages[selectedImage].category}</p>
              </div>
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Quer fazer parte da nossa galeria?
            </h3>
            <p className="text-gray-600 mb-6">
              Reserve seu passeio e crie memórias inesquecíveis em Foz do Iguaçu
            </p>
            <button className="btn-primary">
              Reservar Agora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;