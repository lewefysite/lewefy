import React from "react";
import { Link, useNavigate, useLocation } from 'react-router-dom';

export const Frame = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const getLinkClass = (path) => {
    return currentPath === path 
      ? 'font-body-medium-body-2 font-medium text-[#f7902b]' 
      : 'font-body-regular-body-2 font-normal text-[#f7902b]';
  };

  return (
    <header className="absolute w-[1440px] h-[84px] top-0 left-0 bg-neutralsilver">
      <Link to="/">
        <img
          className="absolute w-[81px] h-[81px] top-0.5 left-[167px] object-cover block"
          alt="Logo Lewefy"
          src="/img/logo-lewefy-1.png"
        />
      </Link>
      
      <nav className="absolute w-auto h-6 top-[30px] left-1/2 -translate-x-1/2">
        <div className="inline-flex items-center justify-center gap-[50px] relative">
          <Link to="/" className="inline-flex items-center gap-2.5">
            <div className={getLinkClass('/')}>Home</div>
          </Link>
          <Link to="/oprojeto" className="inline-flex items-center gap-2.5">
            <div className={getLinkClass('/oprojeto')}>O Projeto</div>
          </Link>
          <Link to="/recursos" className="inline-flex items-center gap-2.5">
            <div className={getLinkClass('/recursos')}>Recursos de Apoio</div>
          </Link>
          <Link to="/acolhimento" className="inline-flex items-center gap-2.5 bg-[#7aca5b] px-2 py-1 rounded">
            <div className={`font-normal text-white ${getLinkClass('/acolhimento')}`}>Buscar Ajuda Profissional</div>
          </Link>
        </div>
      </nav>

      <div className="inline-flex items-start gap-3.5 absolute top-[22px] left-[1138px]">
        <button onClick={() => navigate('/login')} className="all-unset box-border ... cursor-pointer">Login</button>
        <button onClick={() => navigate('/cadastro')} className="all-unset box-border ... cursor-pointer">Sign up</button>
      </div>
    </header>
  );
};
