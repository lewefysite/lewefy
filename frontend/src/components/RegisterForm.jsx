import React, { useState, useCallback } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

export default function RegisterForm() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Envolvemos a função em useCallback para otimização
  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      if (!executeRecaptcha) {
        console.log('Execute recaptcha não está disponível ainda');
        return;
      }

      // 1. Obter o token do reCAPTCHA para a ação 'register'
      const recaptchaToken = await executeRecaptcha('register');

      // 2. Montar o corpo da requisição com os dados do formulário E o token
      const body = {
        ...formData,
        recaptchaToken, // <-- ENVIANDO O TOKEN PARA O BACKEND
      };
      
      try {
        // 3. Enviar para a API
        const response = await fetch('/api/auth/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        });

        const result = await response.json();

        if (!response.ok) {
          // Tratar erros vindos do backend (ex: e-mail já existe, reCAPTCHA falhou)
          alert(`Erro: ${result.message}`);
        } else {
          // Sucesso!
          alert(result.message);
        }
      } catch (error) {
        console.error('Falha ao registrar:', error);
        alert('Ocorreu um erro. Tente novamente.');
      }
    },
    [executeRecaptcha, formData]
  );

  return (
    <form onSubmit={handleSubmit}>
      {/* Seus inputs para nome, email, senha */}
      <input type="text" name="name" placeholder="Nome" onChange={handleInputChange} required />
      <input type="email" name="email" placeholder="E-mail" onChange={handleInputChange} required />
      <input type="password" name="password" placeholder="Senha" onChange={handleInputChange} required />
      <button type="submit">Registrar</button>
    </form>
  );
}