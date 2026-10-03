import nodemailer from 'nodemailer';

export interface ContactFormData {
  name: string;
  phone: string;
  vehicleType?: string;
  service?: string;
  message?: string;
}

export async function sendContactEmail(data: ContactFormData): Promise<void> {
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
