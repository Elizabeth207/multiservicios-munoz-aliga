export const AboutSection = () => {
  return (
    <div className="py-16 px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center font-heading text-text">Sobre Nosotros</h2>
        <div className="bg-surface border border-border rounded-lg p-8 shadow-sm">
          <p className="text-lg text-text-secondary leading-relaxed font-body">
            En Multiservicios Muños y Aliga ofrecemos soluciones integrales para vehículos, 
            combinando productos, instalación, programación y reparación para brindar a nuestros 
            clientes un servicio completo y confiable.
          </p>
          <p className="text-lg text-text-secondary leading-relaxed mt-4 font-body">
            Nuestro compromiso es ofrecer atención personalizada y trabajo de calidad, 
            adaptándonos a las necesidades específicas de cada vehículo y cliente.
          </p>
        </div>
      </div>
    </div>
  );
};
