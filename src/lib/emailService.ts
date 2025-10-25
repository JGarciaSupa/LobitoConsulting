interface EmailData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  subject?: string;
}

interface EmailResponse {
  success: boolean;
  message?: string;
  error?: string;
}

export class EmailService {
  private static readonly API_ENDPOINT = '/api/send-email';

  /**
   * Envía un email usando el endpoint de la API
   */
  static async sendContactEmail(data: EmailData): Promise<EmailResponse> {
    try {
      const response = await fetch(this.API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        return {
          success: true,
          message: result.message || 'Email enviado correctamente'
        };
      } else {
        return {
          success: false,
          error: result.error || 'Error al enviar el email'
        };
      }
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Error inesperado'
      };
    }
  }

  /**
   * Valida los datos del formulario antes de enviar
   */
  static validateEmailData(data: EmailData): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];

    if (!data.name?.trim()) {
      errors.push('El nombre es requerido');
    }

    if (!data.email?.trim()) {
      errors.push('El email es requerido');
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        errors.push('El formato del email no es válido');
      }
    }

    if (!data.message?.trim()) {
      errors.push('El mensaje es requerido');
    }

    if (data.phone && data.phone.trim()) {
      // Validación básica de teléfono (opcional)
      const phoneRegex = /^[\+]?[\d\s\-\(\)]{8,}$/;
      if (!phoneRegex.test(data.phone.replace(/\s/g, ''))) {
        errors.push('El formato del teléfono no es válido');
      }
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }

  /**
   * Sanitiza los datos de entrada
   */
  static sanitizeEmailData(data: EmailData): EmailData {
    return {
      name: data.name?.trim() || '',
      email: data.email?.trim().toLowerCase() || '',
      phone: data.phone?.trim() || '',
      company: data.company?.trim() || '',
      message: data.message?.trim() || '',
      subject: data.subject?.trim() || ''
    };
  }
}

// Exportar también las interfaces para uso en otros archivos
export type { EmailData, EmailResponse };