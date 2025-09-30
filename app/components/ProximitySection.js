export default function ProximitySection() {
  const locations = [
    { 
      title: "Centro de Valdivia", 
      desc: "A solo 10 minutos en auto.",
      image: "/centro.jpg"
    },
    { 
      title: "Supermercados", 
      desc: "Encuentra un supermercado a 5 minutos.",
      image: "/supermercado.jpg"
    },
    { 
      title: "Parque Oncol", 
      desc: "Disfruta de la naturaleza a 30 minutos.",
      image: "/oncol.jpg"
    },
    { 
      title: "Cervecería Kunstmann", 
      desc: "Visita la famosa cervecería a 15 minutos.",
      image: "/kutsman.jpg"
    },
    { 
      title: "Niebla y Costa Valdiviana", 
      desc: "Explora la costa a 25 minutos.",
      image: "/playaniebla.jpg"
    },
    { 
      title: "Fuerte Corral, Niebla Mancera", 
      desc: "Explora los fuertes históricos a 25 minutos.",
      image: "/fuerte.png"
    },
    { 
      title: "Costanera de Valdivia", 
      desc: "recorre la costanera a 10 minutos.",
      image: "/costanera.jpg"
    },

    { 
      title: "Aeropuerto Pichoy", 
      desc: "A 40 minutos del aeropuerto.",
      image: "/aeropuerto.jpg"
    },
  ];

  return (
    <section id="cercanias" className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-100">
      <div className="container mx-auto px-4">
        {/* Título */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-primary mb-12 tracking-tight">
          Cercanías y Puntos de Interés
        </h2>

        <div className="max-w-5xl mx-auto">
          <p className="text-lg md:text-xl text-center text-gray-700 mb-14 leading-relaxed">
            Nuestras cabañas tienen una ubicación privilegiada que te permite acceder fácilmente 
            a los principales atractivos de la zona.
          </p>

          {/* Grid de cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden
                           transform transition-all duration-300 ease-out 
                           hover:-translate-y-2 hover:scale-[1.02] 
                           hover:shadow-2xl relative cursor-pointer"
              >
                {/* Imagen */}
                <div className="h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                {/* Contenido de texto */}
                <div className="p-6 text-center">
                  <h3 className="text-xl md:text-2xl font-bold text-primary mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    {item.desc.split(/(\d+ minutos)/).map((part, i) =>
                      /\d+ minutos/.test(part) ? (
                        <span key={i} className="font-semibold text-primary">
                          {part}
                        </span>
                      ) : (
                        part
                      )
                    )}
                  </p>
                </div>

                {/* Efecto decorativo de fondo */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-5 bg-gradient-to-br from-primary to-purple-500 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>

          {/* Video Section */}
          <div className="mt-16 flex justify-center">
            <video
              src="/zuhause2.mp4"
              controls
              autoPlay
              loop
              muted
              playsInline
              className="rounded-2xl shadow-xl max-w-3xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}