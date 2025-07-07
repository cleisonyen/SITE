import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { href: '#inicio', label: 'Início' },
    { href: '#sobre', label: 'Sobre' },
    { href: '#servicos', label: 'Serviços' },
    { href: '#passeios', label: 'Passeios' },
    { href: '#galeria', label: 'Galeria' },
    { href: '#contato', label: 'Contato' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary-800 text-white py-2 px-4 text-sm">
        <div className="container-max flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>(45) 3574-4900</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>contato@ebltours.com.br</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>Especialistas em Turismo em Foz do Iguaçu</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}>
        <div className="container-max">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img 
                src="/EBL_Tour_Logo_4K-removebg-preview-removebg-preview.png" 
                alt="EBL Tours" 
                className="h-12 w-auto"
              />
              <div>
                <h1 className="text-2xl font-bold text-primary-800">EBL Tours</h1>
                <p className="text-sm text-gray-600">Foz do Iguaçu</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
              <button className="btn-primary">
                Reservar Agora
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <nav className="py-4 px-4 space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block text-gray-700 hover:text-primary-600 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <button className="btn-primary w-full mt-4">
                Reservar Agora
              </button>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;