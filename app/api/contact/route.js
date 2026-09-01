import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_LENGTH = { name: 100, email: 200, service: 100, message: 5000 };

function sanitize(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

function stripNewlines(str) {
  return str.replace(/[\r\n]/g, '').trim();
}

export async function POST(request) {
  try {
    const body = await request.json();
    const name = (body.name || '').trim();
    const email = (body.email || '').trim().toLowerCase();
    const service = (body.service || '').trim();
    const message = (body.message || '').trim();

    if (!name || !email || !service || !message) {
      return Response.json(
        { error: 'Todos los campos son requeridos' },
        { status: 400 }
      );
    }

    if (!EMAIL_REGEX.test(email)) {
      return Response.json(
        { error: 'El email ingresado no es válido' },
        { status: 400 }
      );
    }

    for (const field of ['name', 'email', 'service', 'message']) {
      if (body[field] && body[field].length > MAX_LENGTH[field]) {
        return Response.json(
          { error: `El campo ${field} excede el límite de caracteres` },
          { status: 400 }
        );
      }
    }

    const safeName = sanitize(name);
    const safeEmail = sanitize(email);
    const safeService = sanitize(service);
    const safeMessage = sanitize(message);
    const safeReplyTo = stripNewlines(email);

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
      subject: `Nuevo mensaje de contacto de ${safeName}`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Servicio:</strong> ${safeService}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${safeMessage.replace(/\n/g, '<br>')}</p>
      `,
      replyTo: safeReplyTo,
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Hemos recibido tu mensaje - ARVTECH Studio',
      html: `
        <h2>¡Gracias por contactarnos!</h2>
        <p>Hola ${safeName},</p>
        <p>Hemos recibido tu mensaje correctamente. Nos pondremos en contacto contigo pronto.</p>
        <p><strong>Detalles de tu mensaje:</strong></p>
        <p><strong>Servicio solicitado:</strong> ${safeService}</p>
        <p><strong>Tu mensaje:</strong></p>
        <p>${safeMessage.replace(/\n/g, '<br>')}</p>
        <hr>
        <p>ARVTECH STUDIO</p>
        <p>Transformamos ideas en experiencias digitales</p>
      `,
    });

    return Response.json({
      success: true,
      message: 'Mensaje enviado correctamente. Recibirás una confirmación en tu email.',
    });
  } catch (error) {
    console.error('Error al enviar email:', error);
    return Response.json(
      { error: 'Error al enviar el mensaje. Intenta de nuevo.' },
      { status: 500 }
    );
  }
}
