import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';

// Interfaz para el cuerpo de la petición
interface EmailData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  subject?: string;
}

export async function POST(request: NextRequest) {
  try {
    // Parsear el cuerpo de la petición
    const body: EmailData = await request.json();
    const { name, email, phone, company, message, subject } = body;

    // Validar campos requeridos
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Los campos nombre, email y mensaje son requeridos' },
        { status: 400 }
      );
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'El formato del email no es válido' },
        { status: 400 }
      );
    }

    // Configurar el transportador de nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: process.env.EMAIL_PORT === '465', // true para 465, false para otros puertos
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Verificar la conexión
    await transporter.verify();

    // Configurar el contenido del email
    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: subject || `Nuevo mensaje de contacto de ${name} - Lobito Consulting`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #f4f4f4; padding: 20px; border-radius: 5px; margin-bottom: 20px; }
            .content { padding: 20px 0; }
            .footer { background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 20px; font-size: 12px; color: #666; }
            .field { margin: 10px 0; }
            .label { font-weight: bold; color: #555; }
            .value { margin-top: 5px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>🚀 Nuevo mensaje de contacto - Lobito Consulting</h2>
            </div>
            
            <div class="content">
              <div class="field">
                <div class="label">📧 Nombre:</div>
                <div class="value">${name}</div>
              </div>
              
              <div class="field">
                <div class="label">✉️ Email:</div>
                <div class="value">${email}</div>
              </div>
              
              ${phone ? `
              <div class="field">
                <div class="label">📞 Teléfono:</div>
                <div class="value">${phone}</div>
              </div>
              ` : ''}
              
              ${company ? `
              <div class="field">
                <div class="label">🏢 Empresa:</div>
                <div class="value">${company}</div>
              </div>
              ` : ''}
              
              <div class="field">
                <div class="label">💬 Mensaje:</div>
                <div class="value" style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 10px;">
                  ${message.replace(/\n/g, '<br>')}
                </div>
              </div>
            </div>
            
            <div class="footer">
              <p>Este mensaje fue enviado desde el formulario de contacto de Lobito Consulting.</p>
              <p>Fecha: ${new Date().toLocaleString('es-ES', { timeZone: 'America/Lima' })}</p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
Nuevo mensaje de contacto - Lobito Consulting

Nombre: ${name}
Email: ${email}
${phone ? `Teléfono: ${phone}` : ''}
${company ? `Empresa: ${company}` : ''}

Mensaje:
${message}

---
Este mensaje fue enviado desde el formulario de contacto de Lobito Consulting.
Fecha: ${new Date().toLocaleString('es-ES', { timeZone: 'America/Lima' })}
      `
    };

    // Enviar el email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: 'Email enviado correctamente' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error al enviar email:', error);
    
    return NextResponse.json(
      { 
        error: 'Error interno del servidor al enviar el email',
        details: process.env.NODE_ENV === 'development' ? error : undefined
      },
      { status: 500 }
    );
  }
}