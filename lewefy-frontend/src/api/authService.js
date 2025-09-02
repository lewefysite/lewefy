import api from './api';

/**
 * Registra um novo usuário no sistema.
 * @param {string} name - Nome do usuário.
 * @param {string} email - Email do usuário.
 * @param {string} password - Senha do usuário.
 * @returns {Promise} A resposta da API com o token e os dados do usuário.
 */
export const register = (name, email, password) => {
  return api.post('/auth/register', { name, email, password });
};

/**
 * Autentica um usuário existente.
 * @param {string} email - Email do usuário.
 * @param {string} password - Senha do usuário.
 * @returns {Promise} A resposta da API com o token e os dados do usuário.
 */
export const login = (email, password) => {
  return api.post('/auth/login', { email, password });
};

/**
 * Inicia o processo de recuperação de senha para um usuário.
 * @param {string} email - Email do usuário para enviar o link de recuperação.
 * @returns {Promise} A resposta da API.
 */
export const forgotPassword = (email) => {
  return api.post('/auth/forgot-password', { email });
};

/**
 * Realiza o logout do usuário (se houver invalidação de token no backend).
 * @returns {Promise} A resposta da API.
 */
export const logout = () => {
  // Se o backend invalidar tokens, uma chamada de API seria feita aqui.
  // Caso contrário, a lógica é apenas local (remover token do storage).
  localStorage.removeItem('lewefy_auth_token');
  return Promise.resolve();
};
