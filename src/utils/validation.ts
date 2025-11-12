export const validatePassword = (password: string) => {
  const hasLetter = /[A-Za-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSymbol = /[^A-Za-z0-9]/.test(password);
  const minLength = password.trim().length >= 8;

  if (!hasLetter || !hasNumber || !hasSymbol || !minLength) {
    console.log(
      "Senha inválida: deve ter pelo menos uma letra, um número, um símbolo e 8 caracteres no mínimo",
    );
    return false;
  }

  return true;
};

export const validationEmail = (email: string) => {
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return isValidEmail.test(email);
};
