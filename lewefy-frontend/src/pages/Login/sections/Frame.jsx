import React from "react";
import { Link, useNavigate } from 'react-router-dom';

export const Frame = () => {
  const navigate = useNavigate();

  return (
    <header className="absolute w-[1440px] h-[84px] top-0 left-0 bg-neutralsilver">
        <Link to="/">
            <img
            className="w-[81px] h-[81px] top-0.5 left-[167px] absolute object-cover block"
            alt="Logo Lewefy"
            src="/img/logo-lewefy-2.png"
            />
        </Link>
      
      <nav className="absolute w-[601px] h-6 top-[30px] left-[439px]">
        <div className="inline-flex items-center justify-center gap-[50px] relative">
          <Link to="/" className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
            <div className="font-body-medium-body-2 font-medium text-[#f7902b]">Home</div>
          </Link>

          <Link to="/oprojeto" className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
            <div className="font-body-regular-body-2 font-normal text-[#f7902b]">O Projeto</div>
          </Link>

          <Link to="/recursos" className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
            <div className="font-body-regular-body-2 font-normal text-[#f7902b]">Recursos de Apoio</div>
          </Link>

          <Link to="/acolhimento" className="inline-flex items-center gap-2.5 relative flex-[0_0_auto] bg-[#7aca5b] px-2 py-1 rounded">
            <div className="font-body-regular-body-2 font-normal text-white">Buscar Ajuda Profissional</div>
          </Link>
        </div>
      </nav>

      <div className="inline-flex items-start gap-3.5 absolute top-[22px] left-[1138px]">
        <button onClick={() => navigate('/login')} className="all-unset box-border inline-flex items-center gap-2.5 px-5 py-2.5 relative flex-[0_0_auto] bg-neutralsilver rounded-md cursor-pointer">
          <div className="relative w-fit mt-[-1.00px] font-label-medium-label font-medium text-brandprimary text-center">
            Login
          </div>
        </button>

        <button onClick={() => navigate('/cadastro')} className="all-unset box-border inline-flex items-center gap-2.5 px-5 py-2.5 relative flex-[0_0_auto] bg-brandprimary rounded-md cursor-pointer">
          <div className="relative w-fit mt-[-1.00px] font-label-medium-label font-medium text-default-white text-center">
            Sign up
          </div>
        </button>
      </div>
    </header>
  );
};
