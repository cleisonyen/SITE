import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Passeios', href: '#passeios' },
    { name: 'Galeria', href: '#galeria' },
    { name: 'Contato', href: '#contato' }
  ];

  const tours = [
    'Cataratas - Lado Brasileiro',
    'Cataratas - Lado Argentino',
    'Usina de Itaipu',
    'City Tour Foz do Iguaçu',
    'Macuco Safari',
    'Combo Completo'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="section-padding">
        <div className="container-max">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src="/EBL_Tour_Logo_4K-removebg-preview-removebg-preview.png" 
                  alt="EBL Tours" 
                  className="h-12 w-auto"
                />
                <div>
                  <h3 className="text-2xl font-bold text-white">EBL Tours</h3>
                  <p className="text-gray-400 text-sm">Foz do Iguaçu</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Especialistas em turismo receptivo em Foz do Iguaçu há mais de 15 anos. 
                Proporcionamos experiências únicas e inesquecíveis.
              </p>

              {/* Social Media */}
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors duration-300">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors duration-300">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors duration-300">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Links Rápidos</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tours */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Nossos Passeios</h4>
              <ul className="space-y-3">
                {tours.map((tour) => (
                  <li key={tour}>
                    <a 
                      href="#passeios"
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                    >
                      {tour}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contato</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">(45) 3574-4900</p>
                    <p className="text-gray-400 text-sm">WhatsApp: (45) 99999-9999</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">contato@ebltours.com.br</p>
                    <p className="text-gray-400 text-sm">reservas@ebltours.com.br</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">Av. das Cataratas, 1234</p>
                    <p className="text-gray-400 text-sm">Foz do Iguaçu - PR</p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="mt-6 p-4 bg-gray-800 rounded-lg">
                <h5 className="font-semibold mb-2 text-primary-400">Horário de Funcionamento</h5>
                <p className="text-gray-300 text-sm">Segunda a Sábado: 8h às 18h</p>
                <p className="text-gray-300 text-sm">Domingo: Plantão WhatsApp</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container-max py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm text-center md:text-left">
              <p>© {currentYear} EBL Tours. Todos os direitos reservados.</p>
              <p className="mt-1">CNPJ: 12.345.678/0001-90 | Cadastur: 12.345678.90.0001-2</p>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Feito com</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>em Foz do Iguaçu</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;