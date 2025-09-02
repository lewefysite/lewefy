import React, { createContext, useState, useEffect } from 'react';
import { login as loginService } from '../api/authService';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('lewefy_auth_token'));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Esta função poderia ser expandida para verificar a validade do token com o backend
    // e carregar os dados do usuário ao iniciar a aplicação.
    const storedToken = localStorage.getItem('lewefy_auth_token');
    if (storedToken) {
        // Simulando a recuperação de dados do usuário
        // Em um caso real, você faria uma chamada a /profile/me
        const storedUser = JSON.parse(localStorage.getItem('lewefy_user'));
        setUser(storedUser);
        setToken(storedToken);
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    const response = await loginService(email, password);
    const { token, user } = response.data;
    localStorage.setItem('lewefy_auth_token', token);
    localStorage.setItem('lewefy_user', JSON.stringify(user));
    setUser(user);
    setToken(token);
  };

  const logout = () => {
    localStorage.removeItem('lewefy_auth_token');
    localStorage.removeItem('lewefy_user');
    setUser(null);
    setToken(null);
  };
  
  const isAuthenticated = !!token;

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
