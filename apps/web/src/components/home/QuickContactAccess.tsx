import { Link } from 'react-router-dom';
import { buildWhatsAppLink } from '../../lib/whatsapp';

export const QuickContactAccess = () => {
  const handleWhatsAppClick = () => {
    window.open(buildWhatsAppLink(), '_blank');
  };

  return (
    <div className="py-16 px-8 bg-background border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 font-heading text-text">¿Necesitas ayuda?</h2>
        <p className="text-xl mb-8 text-text-secondary font-body">Contáctanos ahora y te atenderemos con gusto.</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button
            onClick={handleWhatsAppClick}
            className="bg-whatsapp text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors font-semibold font-body shadow-lg shadow-whatsapp/30"
          >
            Contactar por WhatsApp
          </button>
          <Link
            to="/contacto"
            className="border-2 border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-background transition-colors font-semibold font-body shadow-lg shadow-primary/20"
          >
            Formulario de contacto
          </Link>
        </div>
      </div>
    </div>
  );
};
