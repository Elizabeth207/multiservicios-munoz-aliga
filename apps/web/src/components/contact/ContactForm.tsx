import { useState } from 'react';
import type { ContactFormData } from '../../types/contactForm';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mgavkgbv';

export const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    email: '',
    vehicleType: '',
    service: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone) {
      setErrorMessage('Nombre y teléfono son obligatorios');
      setSubmitStatus('error');
      return;
    }

    setIsLoading(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          phone: '',
          email: '',
          vehicleType: '',
          service: '',
          message: '',
        });
      } else {
        setSubmitStatus('error');
        const errorMsg = data.errors && data.errors.length > 0
          ? data.errors.map((e: { field?: string; message: string }) => e.field ? `${e.field}: ${e.message}` : e.message).join(', ')
          : 'Error al enviar el formulario';
        setErrorMessage(errorMsg);
      }
    } catch (err) {
      console.error(err);
      setSubmitStatus('error');
      setErrorMessage('Error de conexión con el servidor');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-surface border border-border rounded-lg p-6 shadow-sm">
      <h2 className="text-2xl font-bold mb-6 font-heading text-text">Solicitar Cotización</h2>
      
      {submitStatus === 'success' && (
        <div className="bg-green-900/20 border border-green-800 text-green-100 px-4 py-3 rounded mb-4">
          ¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="bg-red-900/20 border border-red-800 text-red-100 px-4 py-3 rounded mb-4">
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1 font-heading text-text">
            Nombre *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-background border border-border rounded px-3 py-2 text-text focus:border-primary focus:outline-none transition-colors font-body"
            required
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-1 font-heading text-text">
            Teléfono *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full bg-background border border-border rounded px-3 py-2 text-text focus:border-primary focus:outline-none transition-colors font-body"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1 font-heading text-text">
            Correo electrónico (opcional)
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email || ''}
            onChange={handleChange}
            className="w-full bg-background border border-border rounded px-3 py-2 text-text focus:border-primary focus:outline-none transition-colors font-body"
            placeholder="tucorreo@ejemplo.com"
          />
        </div>

        <div>
          <label htmlFor="vehicleType" className="block text-sm font-medium mb-1 font-heading text-text">
            Tipo de vehículo
          </label>
          <input
            type="text"
            id="vehicleType"
            name="vehicleType"
            value={formData.vehicleType}
            onChange={handleChange}
            className="w-full bg-background border border-border rounded px-3 py-2 text-text focus:border-primary focus:outline-none transition-colors font-body"
            placeholder="Ej: Toyota Corolla 2020"
          />
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium mb-1 font-heading text-text">
            Servicio de interés
          </label>
          <input
            type="text"
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full bg-background border border-border rounded px-3 py-2 text-text focus:border-primary focus:outline-none transition-colors font-body"
            placeholder="Ej: Instalación de alarma"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1 font-heading text-text">
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full bg-background border border-border rounded px-3 py-2 text-text focus:border-primary focus:outline-none transition-colors font-body"
            placeholder="Describe tu consulta o requerimiento..."
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-primary text-background py-3 rounded hover:bg-primary/90 transition-colors disabled:bg-surface disabled:text-text-secondary disabled:cursor-not-allowed font-semibold font-body shadow-lg shadow-primary/20"
        >
          {isLoading ? 'Enviando...' : 'Solicitar cotización'}
        </button>
      </form>
    </div>
  );
};
