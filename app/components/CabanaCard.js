'use client';

import { useState } from 'react';
import Modal from './Modal';
import { motion } from 'framer-motion';

export default function CabanaCard({ title, description, imageUrl }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const interiorImages = [
    '/zuhauseinte1.jpg',
    '/zuhauseinte2.jpg',
    '/zuhauseinte3.jpg',
    '/zuhauseinte4.jpg'
  ];

  const precios = [
    { personas: 1, valor: 50000 },
    { personas: 2, valor: 60000 },
    { personas: 3, valor: 70000 },
    { personas: 4, valor: 80000 }
  ];

  const amenities = [
    'Sábanas, toallas de mano y jabón',
    'Aire Acondicionado',
    'TV Cable',
    'WiFi',
    'Estacionamiento privado',
    'Cercano a comercios',
    'Extra Limpias e higiénicas'
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % interiorImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + interiorImages.length) % interiorImages.length);
  };

  return (
    <>
      <div className="bg-background rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
        <div className="p-6">
          <h3 className="text-2xl font-bold text-primary mb-4">{title}</h3>
          <div className="text-primary space-y-2">
            {description.split('\n').map((line, index) => (
              <p key={index} className="flex items-start">
                {line.startsWith('✅') ? (
                  <>
                    <span className="mr-2">{line}</span>
                  </>
                ) : (
                  <span>{line}</span>
                )}
              </p>
            ))}
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="mt-6 px-6 py-3 bg-accent text-background rounded-full hover:bg-primary transition duration-300 w-full"
          >
            Ver Detalles
          </button>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="p-6">
          <h2 className="text-3xl font-bold text-primary mb-6">{title}</h2>
          
          {/* Galería de imágenes */}
          <div className="relative mb-8">
            <img 
              src={interiorImages[currentImageIndex]} 
              alt={`Interior ${currentImageIndex + 1}`} 
              className="w-full h-64 object-cover rounded-lg"
            />
            <button 
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
              aria-label="Imagen anterior"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
              aria-label="Siguiente imagen"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Precios */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-primary mb-4">Tarifas</h3>
            <div className="grid grid-cols-2 gap-4">
              {precios.map((precio) => (
                <div key={precio.personas} className="bg-gray-100 p-4 rounded-lg text-center">
                  <p className="text-lg font-semibold">{precio.personas} {precio.personas === 1 ? 'Persona' : 'Personas'}</p>
                  <p className="text-2xl font-bold text-accent">
                    ${precio.valor.toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Amenities */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">Servicios Incluidos</h3>
            <div className="grid grid-cols-2 gap-2">
              {amenities.map((amenity, index) => (
                <div key={index} className="flex items-center">
                  <svg className="w-5 h-5 text-accent mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}