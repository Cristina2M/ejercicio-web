// Formulario sencillo con validación básica
function validateEmail(email) {
  // regex simple para validación básica
  return typeof email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function handleSubmit(event) {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const result = document.getElementById('result');

  if (!name) {
    result.textContent = 'El nombre es obligatorio.';
    return;
  }
  if (!validateEmail(email)) {
    result.textContent = 'Introduce un email válido.';
    return;
  }

  result.textContent = `¡Gracias ${name}! Hemos recibido tu email (${email}).`;
  // aquí podrías enviar a un servidor con fetch si fuese necesario
}

// Si se carga en navegador, conectar el form
if (typeof window !== 'undefined' && document) {
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    if (form) form.addEventListener('submit', handleSubmit);
  });
}

// Exports para test (CommonJS compatible)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { validateEmail, handleSubmit };
}
