import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

/**
 * Hook customizado para acessar o contexto de autenticação de forma simples.
 * Em vez de importar useContext e AuthContext em todos os componentes,
 * basta importar e usar useAuth().
 * @returns O valor do AuthContext (user, isAuthenticated, login, logout, etc).
 */
export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider.');
  }

  return context;
};
