export default function ProximitySection() {
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
            {[
              { title: "Centro de Valdivia", desc: "A solo 10 minutos en auto." },
              { title: "Supermercados", desc: "Encuentra un supermercado a 5 minutos." },
              { title: "Parque Oncol", desc: "Disfruta de la naturaleza a 30 minutos." },
              { title: "Cervecería Kunstmann", desc: "Visita la famosa cervecería a 15 minutos." },
              { title: "Niebla y Costa Valdiviana", desc: "Explora la costa a 25 minutos." },
              { title: "Aeropuerto Pichoy", desc: "A 40 minutos del aeropuerto." },
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg p-8 text-center 
                           transform transition-all duration-300 ease-out 
                           hover:-translate-y-2 hover:scale-[1.02] 
                           hover:shadow-2xl relative overflow-hidden"
              >
                {/* Efecto decorativo de fondo */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br from-primary to-purple-500 transition-opacity duration-500"></div>

                <h3 className="relative text-xl md:text-2xl font-bold text-primary mb-3">
                  {item.title}
                </h3>
                <p className="relative text-gray-600 text-base md:text-lg leading-relaxed">
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
