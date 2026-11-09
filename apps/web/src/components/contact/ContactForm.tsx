import { useState } from 'react';
import type { ContactFormData } from '../../types/contactForm';
import { PrimaryButton } from '../ui/PrimaryButton';

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
          Accept: 'application/json',
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
        const errorMsg =
          data.errors && data.errors.length > 0
            ? data.errors
                .map((err: { field?: string; message: string }) =>
                  err.field ? `${err.field}: ${err.message}` : err.message
                )
                .join(', ')
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

  const inputClass =
    'w-full bg-surface-light border border-border-light rounded-lg px-3 py-2.5 text-ink focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none font-body text-sm';

  return (
    <div className="card-light p-6 md:p-8">
      <h2 className="text-2xl font-bold mb-2 font-heading text-ink">Solicitar cotización</h2>
      <p className="text-sm text-muted font-body mb-6">Completa el formulario y te contactaremos.</p>

      {submitStatus === 'success' && (
        <div className="bg-whatsapp/10 border border-whatsapp/30 text-ink px-4 py-3 rounded-lg mb-4 font-body text-sm" role="status">
          ¡Mensaje enviado! Nos pondremos en contacto contigo pronto.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="bg-red-50 border border-red-200 text-red-900 px-4 py-3 rounded-lg mb-4 font-body text-sm" role="alert">
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1 font-body text-ink">
            Nombre *
          </label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className={inputClass} required />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-1 font-body text-ink">
            Teléfono *
          </label>
          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className={inputClass} required />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1 font-body text-ink">
            Correo (opcional)
          </label>
          <input type="email" id="email" name="email" value={formData.email || ''} onChange={handleChange} className={inputClass} />
        </div>
        <div>
          <label htmlFor="vehicleType" className="block text-sm font-medium mb-1 font-body text-ink">
            Tipo de vehículo
          </label>
          <input type="text" id="vehicleType" name="vehicleType" value={formData.vehicleType} onChange={handleChange} className={inputClass} placeholder="Ej: Toyota Corolla 2020" />
        </div>
        <div>
          <label htmlFor="service" className="block text-sm font-medium mb-1 font-body text-ink">
            Servicio de interés
          </label>
          <input type="text" id="service" name="service" value={formData.service} onChange={handleChange} className={inputClass} />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1 font-body text-ink">
            Mensaje
          </label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4} className={inputClass} />
        </div>
        <PrimaryButton type="submit" disabled={isLoading} className="w-full">
          {isLoading ? 'Enviando…' : 'Enviar solicitud'}
        </PrimaryButton>
      </form>
    </div>
  );
};
