import axios from 'axios';

/**
 * Cria uma instância do axios com configurações pré-definidas.
 * Usar uma instância é uma boa prática para não afetar o axios global
 * e para centralizar toda a configuração da API em um único lugar.
 */
const api = axios.create({
  /**
   * A baseURL é lida diretamente do nosso arquivo de ambiente (.env.local ou variáveis na Vercel).
   * Isso torna o código flexível para diferentes ambientes.
   * Para rodar localmente, ele vai usar 'http://localhost:3000'.
   * No deploy da Vercel, usará a URL do backend que você configurar lá.
   */
  baseURL: import.meta.env.VITE_API_URL,
});

/**
 * Exportamos a instância configurada para que possamos importá-la
 * em qualquer componente ou página do nosso aplicativo que precise
 * se comunicar com o backend.
 * 
 * Exemplo de uso em outro arquivo:
 * import api from '@/services/api';
 * 
 * async function buscarUsuarios() {
 *   const response = await api.get('/usuarios');
 *   return response.data;
 * }
 */
export default api;
