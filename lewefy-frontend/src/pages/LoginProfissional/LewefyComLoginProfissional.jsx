import React from "react";
import { Yesconsultalog } from "../../components/Yesconsultalog/Yesconsultalog";
import { Footer } from "./sections/Footer";
import { Frame } from "./sections/Frame";
import { Group } from "./sections/Group";
import { GroupWrapper } from "./sections/GroupWrapper";

export const LewefyComLoginProfissional = () => {
  return (
    <div
      className="bg-white grid justify-items-center [align-items:start] w-screen"
    >
      <div className="bg-white w-[1440px] h-[1391px] relative overflow-hidden">
        <div className="absolute w-[1440px] h-[416px] top-0 left-0">
          <Group />
          <Frame />
        </div>

        <div className="absolute w-[1440px] h-[925px] top-[466px] left-0">
          <GroupWrapper />
          <Footer />
          <div className="flex flex-col w-[103px] items-start gap-2.5 absolute top-[789px] left-[1172px]">
            <Yesconsultalog
              className="!self-stretch !h-auto !w-full"
              elementTervisAiTodosClassName="!text-[#178bc4]"
              href="https://yesconsulta.com"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
```*Observação: Arquivo principal que define a estrutura da página de Login Profissional, importando e posicionando suas seções componentes.*

---

**ARQUIVO 59 de N**

**DESTINO:** `/lewefy-frontend/src/pages/LoginProfissional/sections/Frame.jsx`

**ARQUIVO:** `Frame.jsx`

**CONTEÚDO:**
```javascript
import React from "react";
import { Link, useNavigate } from 'react-router-dom';

export const Frame = () => {
  const navigate = useNavigate();
  return (
    <header className="absolute w-[1440px] h-[84px] top-0 left-0 bg-neutralsilver">
        <Link to="/">
            <img
            className="absolute w-[81px] h-[81px] top-0.5 left-[167px] object-cover block"
            alt="Logo Lewefy"
            src="/img/logo-lewefy-1.png"
            />
        </Link>
      
      <nav className="absolute w-auto h-6 top-[30px] left-[439px]">
        {/* Links de navegação principais (poderiam ser um componente comum) */}
      </nav>

      <div className="inline-flex items-start gap-3.5 absolute top-[22px] left-[1138px]">
        <button onClick={() => navigate('/login')} className="all-unset box-border ... cursor-pointer">
          Login
        </button>
        <button onClick={() => navigate('/cadastro')} className="all-unset box-border ... cursor-pointer">
          Sign up
        </button>
      </div>
    </header>
  );
};
