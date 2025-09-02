import api from './api';

/**
 * Busca uma lista paginada de posts recentes.
 * @param {string | null} lastPostId - O ID do último post da página anterior para paginação.
 * @returns {Promise} A lista de posts.
 */
export const getPosts = (lastPostId = null) => {
  const params = new URLSearchParams();
  if (lastPostId) {
    params.append('startAfter', lastPostId);
  }
  params.append('limit', 10); // Define um limite de 10 posts por página

  return api.get(`/posts?${params.toString()}`);
};

/**
 * Busca a lista de posts pertencentes ao usuário autenticado.
 * @returns {Promise} A lista de posts do usuário.
 */
export const getMyPosts = () => {
  return api.get('/posts/me');
};

/**
 * Cria um novo post (desabafo).
 * @param {object} postData - Os dados do post ({ title, content, isAnonymous, category }).
 * @returns {Promise} O post recém-criado.
 */
export const createPost = (postData) => {
  return api.post('/posts', postData);
};

/**
 * Adiciona ou remove um "like" de um post específico.
 * @param {string} postId - O ID do post a ser curtido/descurtido.
 * @returns {Promise} A nova contagem de likes.
 */
export const likePost = (postId) => {
  return api.post(`/posts/${postId}/like`);
};

/**
 * Exclui um post específico.
 * @param {string} postId - O ID do post a ser excluído.
 * @returns {Promise} Uma resposta vazia em caso de sucesso.
 */
export const deletePost = (postId) => {
  return api.delete(`/posts/${postId}`);
};
