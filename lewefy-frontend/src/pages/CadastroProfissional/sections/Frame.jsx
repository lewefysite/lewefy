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
          src="/img/logo-lewefy.png"
        />
      </Link>
      
      {/* ... (Links de navegação podem ser omitidos ou reduzidos em telas de cadastro para focar na tarefa) ... */}
      
      <div className="inline-flex items-start gap-3.5 absolute top-[22px] left-[1138px]">
        <button onClick={() => navigate('/login-profissional')} className="all-unset box-border ... cursor-pointer">
          Login Profissional
        </button>
      </div>
    </header>
  );
};```
*Observação: Uma versão do cabeçalho simplificada para o fluxo de cadastro. Remover os links de navegação principais (Home, O Projeto, etc.) é uma prática comum para manter o foco do usuário na conclusão do formulário.*

---

**ARQUIVO 65 de N**

**DESTINO:** `/lewefy-frontend/src/pages/CadastroProfissional/sections/Group.jsx`

**ARQUIVO:** `Group.jsx`

**CONTEÚDO:**
```javascript
import React from "react";
import { Link } from "react-router-dom";

export const Group = () => {
  return (
    <div className="absolute w-[517px] h-[97px] top-[222px] left-[544px]">
      <div className="absolute w-[519px] h-[72px] top-0 left-0 text-center">
        <h1 className="[font-family:'Poppins',Helvetica] font-medium text-[#522f89] text-5xl tracking-[0] leading-[normal]">
          Cadastro Profissional
        </h1>
      </div>

      <div className="absolute w-[252px] h-6 top-[73px] left-0 right-0 mx-auto">
         <div className="flex items-center justify-center gap-4 text-base">
            <Link to="/" className="font-medium text-[#00a85a]">Home</Link>
            <span className="text-[#00a85a] -rotate-90">›</span>
            <span className="font-light text-[#00a85a]">Cadastro Profissional</span>
          </div>
      </div>
    </div>
  );
};
