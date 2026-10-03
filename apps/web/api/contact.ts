import type { IncomingMessage, ServerResponse } from 'http';

interface ContactFormData {
  name: string;
  phone: string;
  vehicleType?: string;
  service?: string;
  message?: string;
}

async function sendContactEmail(data: ContactFormData): Promise<void> {
  const nodemailer = await import('nodemailer');
  
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const emailTo = process.env.EMAIL_TO || process.env.EMAIL_USER;

  const textBody = `
Nueva consulta de contacto

Nombre: ${data.name}
Teléfono: ${data.phone}
Tipo de vehículo: ${data.vehicleType || 'No especificado'}
Servicio: ${data.service || 'No especificado'}
Mensaje: ${data.message || 'Sin mensaje'}
  `.trim();

  const htmlBody = `
<h2>Nueva consulta de contacto</h2>
<p><strong>Nombre:</strong> ${data.name}</p>
<p><strong>Teléfono:</strong> ${data.phone}</p>
<p><strong>Tipo de vehículo:</strong> ${data.vehicleType || 'No especificado'}</p>
<p><strong>Servicio:</strong> ${data.service || 'No especificado'}</p>
<p><strong>Mensaje:</strong> ${data.message || 'Sin mensaje'}</p>
  `.trim();

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: emailTo,
    subject: `Nueva consulta de ${data.name} — Multiservicios Muños y Aliga`,
    text: textBody,
    html: htmlBody,
  });
}

export default async function handler(req: IncomingMessage, res: ServerResponse) {
  // Solo permitir POST
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ ok: false, error: 'Method not allowed' }));
    return;
  }

  // Leer el body
  const body = await new Promise<string>((resolve) => {
    let data = '';
    req.on('data', (chunk) => {
      data += chunk;
    });
    req.on('end', () => {
      resolve(data);
    });
  });

  let parsedBody: ContactFormData;
  try {
    parsedBody = JSON.parse(body);
  } catch {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ ok: false, error: 'Invalid JSON' }));
    return;
  }

  const { name, phone, vehicleType, service, message } = parsedBody;

  // Validación: nombre y teléfono son obligatorios
  if (!name || !phone) {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      ok: false,
      error: 'Nombre y teléfono son obligatorios',
    }));
    return;
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
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ ok: true }));
  } catch (error) {
    console.error('Error al enviar correo:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      ok: false,
      error: 'No se pudo enviar el correo, intenta de nuevo o contáctanos por WhatsApp',
    }));
  }
}
