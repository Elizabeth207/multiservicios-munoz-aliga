import express from 'express';
import cors from 'cors';
import { sendContactEmail } from './services/mailer';

const app = express();
const PORT = process.env.PORT || 3001;

// CORS configurado para desarrollo
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));
app.use(express.json());

app.post('/contact', async (req, res) => {
  const { name, phone, vehicleType, service, message } = req.body;

  // Validación: nombre y teléfono son obligatorios
  if (!name || !phone) {
    return res.status(400).json({
      ok: false,
      error: 'Nombre y teléfono son obligatorios',
    });
  }

  // Loguear el contacto recibido
  console.log('=== Nuevo contacto recibido ===');
  console.log('Nombre:', name);
  console.log('Teléfono:', phone);
  console.log('Tipo de vehículo:', vehicleType || 'No especificado');
  console.log('Servicio:', service || 'No especificado');
  console.log('Mensaje:', message || 'Sin mensaje');
  console.log('===============================');

  try {
    await sendContactEmail({ name, phone, vehicleType, service, message });
    res.json({ ok: true });
  } catch (error) {
    console.error('Error al enviar correo:', error);
    res.status(500).json({
      ok: false,
      error: 'No se pudo enviar el correo, intenta de nuevo o contáctanos por WhatsApp',
    });
  }
});

app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}`);
});
