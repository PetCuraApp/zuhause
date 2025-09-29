import CabanaCard from './CabanaCard';

export default function CabanasSection() {
  const descripcionComun = `Capacidad de 1 a 4 personas\n✅ Espacios modernos y full equipados\n✅ Seguridad 24/7 con monitoreo de cámaras del patio\n✅ WiFi y TV Cable\n✅ A pasos del centro y con estacionamiento privado`;

  const cabanas = [
    {
      id: 1,
      title: "Cabaña tipo Apartamento",
      description: descripcionComun,
      imageUrl: "/zuhause1.jpg",
    },
    {
      id: 2,
      title: "Cabaña tipo Refugio",
      description: descripcionComun,
      imageUrl: "/zuhause2.jpg",
    },
    {
      id: 3,
      title: "Bungalow",
      description: descripcionComun,
      imageUrl: "/zuhause3.jpg",
    },
  ];

  return (
    <section id="cabanas" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-primary mb-12">Nuestras Cabañas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cabanas.map((cabana) => (
            <CabanaCard key={cabana.id} title={cabana.title} description={cabana.description} imageUrl={cabana.imageUrl} />
          ))}
        </div>
      </div>
    </section>
  );
}