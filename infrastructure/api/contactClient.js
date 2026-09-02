export async function submitContactMessage(formData) {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error('Error enviando mensaje de contacto');
  }

  return await response.json();
}
