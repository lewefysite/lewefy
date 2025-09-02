import axios from 'axios';

const api = axios.create({
  // A URL base da sua API do backend. Ela deve ser movida para uma variável de ambiente.
  // Durante o desenvolvimento, pode apontar para o emulador local.
  // Em produção, para a URL da Cloud Function.
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:5001/lewefy-dev/us-central1/api/v1',
});

// Interceptor de Requisição: Adiciona o token de autenticação em todas as chamadas.
api.interceptors.request.use(
  (config) => {
    // Busca o token (ex: do localStorage). Em um projeto real, isso viria de um context state.
    const token = localStorage.getItem('lewefy_auth_token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
