import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const Frame = () => {
  const navigate = useNavigate();
  return (
    <header className="absolute w-[1440px] h-[84px] top-0 left-[35px] bg-neutralsilver">
      <Link to="/">
        <img
          className="absolute w-[81px] h-[81px] top-0.5 left-[167px] object-cover block"
          alt="Logo Lewefy"
          src="/img/logo-lewefy-1.png"
        />
      </Link>
      
      {/* 
        A navegação principal é intencionalmente omitida aqui para manter o foco
        do usuário no preenchimento do formulário de cadastro.
        Apenas os botões de ação primária (Login/Signup) são mantidos.
      */}
      <nav className="absolute w-auto h-6 top-[30px] left-[439px]">
        {/* Espaço de navegação vazio */}
      </nav>

      <div className="inline-flex items-start gap-3.5 absolute top-[22px] left-[1138px]">
        <button 
          onClick={() => navigate('/login-profissional')} 
          className="all-unset box-border inline-flex items-center gap-2.5 px-5 py-2.5 relative flex-[0_0_auto] bg-neutralsilver rounded-md cursor-pointer"
        >
          <div className="relative w-fit mt-[-1.00px] font-label-medium-label font-medium text-brandprimary text-center">
            Login
          </div>
        </button>

        <button 
          onClick={() => navigate('/cadastro-profissional')} 
          className="all-unset box-border inline-flex items-center gap-2.5 px-5 py-2.5 relative flex-[0_0_auto] bg-brandprimary rounded-md cursor-pointer"
        >
          <div className="relative w-fit mt-[-1.00px] font-label-medium-label font-medium text-default-white text-center">
            Sign up
          </div>
        </button>
      </div>
    </header>
  );
};
