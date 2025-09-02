import React from "react";
import { Link, useNavigate } from 'react-router-dom';

export const Frame = () => {
  const navigate = useNavigate();

  return (
    <header className="absolute w-[1440px] h-[84px] top-0 left-0 bg-neutralsilver">
      <Link to="/" className="cursor-pointer">
        <img
          className="absolute w-[81px] h-[81px] top-0.5 left-[167px] object-cover block"
          alt="Logo Lewefy"
          src="/img/logo-lewefy-1.png"
        />
      </Link>
      
      <nav className="absolute w-[601px] h-6 top-[30px] left-[439px]">
        <div className="inline-flex items-center justify-center gap-[50px] relative">
          <Link to="/" className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
            <div className="mt-[-1.00px] font-body-medium-body-2 font-[number:var(--body-medium-body-2-font-weight)] text-[#f7902b] text-[length:var(--body-medium-body-2-font-size)] tracking-[var(--body-medium-body-2-letter-spacing)] leading-[var(--body-medium-body-2-line-height)] relative w-fit whitespace-nowrap [font-style:var(--body-medium-body-2-font-style)]">
              Home
            </div>
          </Link>

          <Link to="/oprojeto" className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
            <div className="mt-[-1.00px] font-body-regular-body-2 font-[number:var(--body-regular-body-2-font-weight)] text-[#f7902b] text-[length:var(--body-regular-body-2-font-size)] tracking-[var(--body-regular-body-2-letter-spacing)] leading-[var(--body-regular-body-2-line-height)] relative w-fit whitespace-nowrap [font-style:var(--body-regular-body-2-font-style)]">
              O Projeto
            </div>
          </Link>

          <Link to="/recursos" className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
            <div className="mt-[-1.00px] font-body-regular-body-2 font-[number:var(--body-regular-body-2-font-weight)] text-[#f7902b] text-[length:var(--body-regular-body-2-font-size)] tracking-[var(--body-regular-body-2-letter-spacing)] leading-[var(--body-regular-body-2-line-height)] relative w-fit whitespace-nowrap [font-style:var(--body-regular-body-2-font-style)]">
              Recursos de Apoio
            </div>
          </Link>

          <Link to="/acolhimento" className="inline-flex items-center gap-2.5 relative flex-[0_0_auto] bg-[#7aca5b] px-2 py-1 rounded">
            <div className="mt-[-1.00px] font-body-regular-body-2 font-[number:var(--body-regular-body-2-font-weight)] text-white text-[length:var(--body-regular-body-2-font-size)] tracking-[var(--body-regular-body-2-letter-spacing)] leading-[var(--body-regular-body-2-line-height)] relative w-fit whitespace-nowrap [font-style:var(--body-regular-body-2-font-style)]">
              Buscar Ajuda Profissional
            </div>
          </Link>
        </div>
      </nav>

      <div className="inline-flex items-start gap-3.5 absolute top-[22px] left-[1138px]">
        <button onClick={() => navigate('/login')} className="all-[unset] box-border px-5 py-2.5 bg-neutralsilver rounded-md inline-flex items-center gap-2.5 relative flex-[0_0_auto] cursor-pointer">
          <div className="relative w-fit mt-[-1.00px] font-label-medium-label font-[number:var(--label-medium-label-font-weight)] text-brandprimary text-[length:var(--label-medium-label-font-size)] text-center tracking-[var(--label-medium-label-letter-spacing)] leading-[var(--label-medium-label-line-height)] whitespace-nowrap [font-style:var(--label-medium-label-font-style)]">
            Login
          </div>
        </button>

        <button onClick={() => navigate('/cadastro')} className="all-[unset] box-border px-5 py-2.5 bg-brandprimary rounded-md inline-flex items-center gap-2.5 relative flex-[0_0_auto] cursor-pointer">
          <div className="relative w-fit mt-[-1.00px] font-label-medium-label font-[number:var(--label-medium-label-font-weight)] text-default-white text-[length:var(--label-medium-label-font-size)] text-center tracking-[var(--label-medium-label-letter-spacing)] leading-[var(--label-medium-label-line-height)] whitespace-nowrap [font-style:var(--label-medium-label-font-style)]">
            Sign up
          </div>
        </button>
      </div>
    </header>
  );
};```
*Observação: Transformei o cabeçalho em um componente semântico `<header>` e os links de navegação `<div>` em componentes `<Link>` do `react-router-dom` para navegação interna correta. Os botões de Login/Cadastro agora usam o hook `useNavigate` para redirecionamento.*

---

**ARQUIVO 28 de N**

**DESTINO:** `/lewefy-frontend/src/pages/Home/sections/Home.jsx`

**ARQUIVO:** `Home.jsx`

**CONTEÚDO:**
```javascript
import React from "react";
import { Button } from "../../../components/Button/Button";
import { SplitButton } from "../../../components/SplitButton/SplitButton";
import { useNavigate } from "react-router-dom";


export const Home = () => {
    const navigate = useNavigate();

  return (
    <div className="inline-flex top-0 left-0.5 flex-col items-start gap-10 absolute">
      <div className="flex items-center gap-[104px] px-36 py-24 relative self-stretch w-full flex-[0_0_auto] bg-[#d9f2ff]">
        <div className="flex flex-col items-start gap-8 relative flex-1 grow">
          <div className="flex flex-col w-[794px] items-start gap-4 relative flex-[0_0_auto]">
            <p className="relative self-stretch mt-[-1.00px] font-heading-headline-1 font-[number:var(--heading-headline-1-font-weight)] text-[#f7902b] text-[length:var(--heading-headline-1-font-size)] tracking-[var(--heading-headline-1-letter-spacing)] leading-[var(--heading-headline-1-line-height)] [font-style:var(--heading-headline-1-font-style)]">
              Fale o Que Está <br />
              no Seu Coração
            </p>

            <p className="relative w-[574px] font-body-regular-body-2 font-[number:var(--body-regular-body-2-font-weight)] text-neutralgrey text-[length:var(--body-regular-body-2-font-size)] tracking-[var(--body-regular-body-2-letter-spacing)] leading-[var(--body-regular-body-2-line-height)] [font-style:var(--body-regular-body-2-font-style)]">
              Um espaço seguro e sem julgamentos para você expressar seus
              sentimentos, aliviar a mente e encontrar conforto ao compartilhar
              suas emoções.
            </p>
          </div>

          <Button
            onClick={() => navigate('/login')}
            className="!flex-[0_0_auto] !bg-[#f7902b]"
            divClassName="!tracking-[var(--body-medium-body-2-letter-spacing)] !text-[length:var(--body-medium-body-2-font-size)] ![font-style:var(--body-medium-body-2-font-style)] !font-[number:var(--body-medium-body-2-font-weight)] !font-body-medium-body-2 !leading-[var(--body-medium-body-2-line-height)]"
            icon={false}
            size="medium"
            state="default"
            text="Login"
            type="primary"
          />
        </div>
      </div>

      <div className="inline-flex flex-col h-auto items-start gap-4 absolute top-[658px] left-0">
        <div className="flex flex-col w-[1440px] items-center gap-2 relative flex-[0_0_auto]">
          <div className="relative w-[542px] mt-[-1.00px] font-heading-headline-2 font-[number:var(--heading-headline-2-font-weight)] text-[#158ac5] text-[length:var(--heading-headline-2-font-size)] text-center tracking-[var(--heading-headline-2-letter-spacing)] leading-[var(--heading-headline-2-line-height)] [font-style:var(--heading-headline-2-font-style)]">
            Desabafos
          </div>
        </div>

        {/* Mapeamento de Desabafos (Conteúdo estático por enquanto) */}
        <div className="flex w-[1440px] items-center justify-between px-36 py-0 relative flex-[0_0_auto]">
          {/* Card 1 */}
          <div className="flex flex-col w-[299px] items-center gap-2 px-8 py-6 relative bg-neutralwhite rounded-lg shadow-[0px_2px_4px_#abbed133]">
            <div className="flex flex-col w-[267px] items-center gap-4 relative flex-[0_0_auto] ml-[-16.00px] mr-[-16.00px]">
              <img className="relative w-[65px] h-14" alt="Icon" src="/img/icon-8.svg" />
              <h3 className="relative self-stretch font-heading-headline-3 font-[number:var(--heading-headline-3-font-weight)] text-[#168bc3] text-[length:var(--heading-headline-3-font-size)] text-center tracking-[var(--heading-headline-3-letter-spacing)] leading-[var(--heading-headline-3-line-height)] [font-style:var(--heading-headline-3-font-style)]">
                Meu Borderline me traumatizou.
              </h3>
            </div>
            <p className="relative w-[251px] mt-[-1.00px] font-body-regular-body-3 font-[number:var(--body-regular-body-3-font-weight)] text-neutralgrey text-[length:var(--body-regular-body-3-font-size)] text-center tracking-[var(--body-regular-body-3-letter-spacing)] leading-[var(--body-regular-body-3-line-height)] [font-style:var(--body-regular-body-3-font-style)]">
              OBS: Pedi ao Chat GPT pra revisar SOMENTE ortografia,
              concordância, estrutura, etc.
            </p>
          </div>
          {/* Card 2 e 3 similares */}
        </div>

        <SplitButton
          className="!absolute !left-[1250px] !top-[396px]"
          leadingButtonClassName="!bg-[#f7902b]"
          leadingLabelText="Ver mais"
          onLeadingClick={() => navigate('/recursos')}
   
