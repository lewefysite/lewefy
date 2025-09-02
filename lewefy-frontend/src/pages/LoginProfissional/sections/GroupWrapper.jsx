import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Lógica de formulário reutilizável
const LoginForm = ({ title, userType, onLoginSubmit, onCreateAccountClick }) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onLoginSubmit({ email, password });
    }

    return (
        <div className="flex flex-col gap-4 w-[530px]">
            <h2 className="font-medium text-5xl text-[#522f89]">{title}</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 mt-4">
                <div>
                    <label className="font-medium text-base text-[#00a85a] mb-2 block">{userType}</label>
                    <input 
                        type="email" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="w-full h-12 bg-white rounded-[10px] border border-solid border-[#522f89] px-4"
                    />
                </div>
                 <div>
                    <label className="font-medium text-base text-[#522f89] mb-2 block">Senha</label>
                    <input 
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className="w-full h-12 bg-white rounded-[10px] border border-solid border-[#00a85a] px-4"
                    />
                </div>
                 <Link to="/esqueci-senha-profissional" className="font-medium text-base text-[#522f89] text-left">Esqueci minha senha</Link>
                <div className="flex items-center gap-4 mt-4">
                     <button type="button" onClick={onCreateAccountClick} className="w-[237px] h-[55px] bg-[#522f89] text-white text-base rounded-[5px] border border-primary">
                        Continuar {/* Este botão deveria levar para o cadastro */}
                    </button>
                    <button type="submit" className="w-[237px] h-[55px] bg-[#00a85a] text-white text-base rounded-[5px]">
                        Entrar
                    </button>
                </div>
            </form>
        </div>
    );
};

export const GroupWrapper = () => {
  const navigate = useNavigate();

  const handleUserLogin = (data) => {
    console.log("Login Usuário:", data);
    // Lógica para login de usuário comum
  };

  const handleProfLogin = (data) => {
    console.log("Login Profissional:", data);
    // Lógica para login de profissional
  };


  return (
    <div className="absolute w-auto h-auto top-[98px] left-1/2 -translate-x-1/2">
        <div className="flex gap-16 justify-center">
            <LoginForm 
                title="Quero criar uma conta"
                userType="E-mail"
                onLoginSubmit={handleUserLogin}
                onCreateAccountClick={() => navigate('/cadastro')}
            />
            <LoginForm 
                title="Já sou usuário"
                userType="E-mail"
                onLoginSubmit={handleProfLogin}
                onCreateAccountClick={() => navigate('/login-profissional')} // Redirecionamento já está na página correta
            />
        </div>
    </div>
  );
};
