import { submitContactMessage } from '@/infrastructure/api/contactClient';

export async function executeSendContactMessage(formData) {
  if (!formData.name || !formData.email || !formData.message) {
    throw new Error('Por favor completa los campos requeridos');
  }

  return await submitContactMessage(formData);
}
