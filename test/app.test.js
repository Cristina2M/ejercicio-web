const { validateEmail } = require('../src/app');

describe('validateEmail', () => {
  test('valida emails correctos', () => {
    expect(validateEmail('user@example.com')).toBe(true);
    expect(validateEmail('u.ser+tag@sub.domain.co')).toBe(true);
  });

  test('rechaza valores inválidos', () => {
    expect(validateEmail('sin-arroba')).toBe(false);
    expect(validateEmail('')).toBe(false);
    expect(validateEmail(null)).toBe(false);
    expect(validateEmail(undefined)).toBe(false);
  });
});
