import api from './api';

/**
 * Registra um novo profissional.
 * @param {object} professionalData - Dados completos do formulário de cadastro.
 * @returns {Promise} Resposta da API.
 */
export const registerProfessional = (professionalData) => {
    // Em uma aplicação real, aqui seria usado FormData para enviar arquivos
    return api.post('/professionals/register', professionalData);
};

/**
 * Autentica um profissional.
 * @param {string} email 
 * @param {string} password 
 * @returns {Promise} Resposta com token e dados do profissional.
 */
export const loginProfessional = (email, password) => {
    return api.post('/professionals/login', { email, password });
};

/**
 * Busca profissionais com base em filtros.
 * @param {object} filters - Objeto com filtros como { search, specialization }.
 * @returns {Promise} Lista de profissionais.
 */
export const getProfessionals = (filters = {}) => {
    const params = new URLSearchParams(filters);
    return api.get(`/professionals?${params.toString()}`);
};

/**
 * Envia uma solicitação de match.
 * @param {object} matchData - Dados como { professionalId, message }.
 * @returns {Promise} Resposta da API.
 */
export const sendMatchRequest = (matchData) => {
    return api.post('/professionals/match', matchData);
};

/**
 * Busca os matches do usuário logado.
 * @returns {Promise} Lista de matches.
 */
export const getMyMatches = () => {
    return api.get('/professionals/my-matches');
};
