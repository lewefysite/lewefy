import React, { useState, useCallback } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

export default function RegisterForm() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState('');
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      if (!executeRecaptcha) {
        console.log('Execute recaptcha não está disponível ainda');
        return;
      }

      const recaptchaToken = await executeRecaptcha('register');

      const body = {
        ...formData,
        recaptchaToken,
      };

      try {
        const response = await fetch('/api/auth/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        });

        const result = await response.json();

        if (response.ok) {
          setMessage('Cadastro realizado com sucesso!');
        } else {
          setMessage(result.error || 'Erro ao cadastrar.');
        }
      } catch (error) {
        console.error('Erro na requisição:', error);
        setMessage('Erro inesperado. Tente novamente.');
      }
    },
    [formData, executeRecaptcha]
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Nome"
        value={formData.name}
        onChange={handleInputChange}
        className="border p-2 w-full"
      />
      <input
        type="email"
        name="email"
        placeholder="E-mail"
        value={formData.email}
        onChange={handleInputChange}
        className="border p-2 w-full"
      />
      <input
        type="password"
        name="password"
        placeholder="Senha"
        value={formData.password}
        onChange={handleInputChange}
        className="border p-2 w-full"
      />
      <button type="submit" className="bg-brandprimary text-white px-4 py-2 rounded">
        Cadastrar
      </button>
      {message && <p className="text-sm text-red-500 mt-2">{message}</p>}
    </form>
  );
}
