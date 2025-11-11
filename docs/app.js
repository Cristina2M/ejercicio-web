// Validaciones
function validateEmail(email) {
  return typeof email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePhone(phone) {
// solo números y 7-15 dígitos
  return typeof phone === 'string' && /^\d{7,15}$/.test(phone);
}

function validateDate(dateString) {
  return !isNaN(Date.parse(dateString));
}

function handleSubmit(event) {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const surname = document.getElementById('surname').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const address = document.getElementById('address').value.trim();
  const birthdate = document.getElementById('birthdate').value.trim();
  const result = document.getElementById('result');

  if (!name) {
    result.textContent = 'El nombre es obligatorio.';
    return;
  }
  if (!surname) {
    result.textContent = 'Los apellidos son obligatorios.';
    return;
  }
  if (!validateEmail(email)) {
    result.textContent = 'Introduce un email válido.';
    return;
  }
  if (!validatePhone(phone)) {
    result.textContent = 'Introduce un teléfono válido (solo números, 7-15 dígitos).';
    return;
  }
  if (!address) {
    result.textContent = 'La dirección es obligatoria.';
    return;
  }
  if (!validateDate(birthdate)) {
    result.textContent = 'Introduce una fecha de nacimiento válida.';
    return;
  }

  result.textContent = `¡Gracias ${name} ${surname}! Hemos recibido tu email (${email}), teléfono (${phone}), dirección (${address}) y fecha de nacimiento (${birthdate}).`;
}

// Conectar el form en el navegador
if (typeof window !== 'undefined' && document) {
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    if (form) form.addEventListener('submit', handleSubmit);
  });
}

// Exports para test (CommonJS)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { validateEmail, validatePhone, validateDate, handleSubmit };
}
