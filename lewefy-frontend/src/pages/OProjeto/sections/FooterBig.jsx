import React from "react";
import { Link } from "react-router-dom";
import { EssentialIconsSend1 } from "../../../icons/EssentialIconsSend1";
import { SeletorDeIdiomas } from "../../../icons/SeletorDeIdiomas";
import { SocialIcons1 } from "../../../icons/SocialIcons1";
import { SocialIcons2 } from "../../../icons/SocialIcons2";
import { SocialIcons3 } from "../../../icons/SocialIcons3";
import { StyleWhiteSocialInstagram } from "../../../icons/StyleWhiteSocialInstagram";


export const FooterBig = () => {
  return (
    <div className="inline-flex items-start gap-[125px] px-[165px] py-16 absolute top-0 left-0 bg-[#ffe99c]">
      <div className="relative w-[350px] h-[244px] overflow-hidden">
        <img
          className="w-[107px] h-[102px] top-0 left-0 absolute object-cover"
          alt="Logo Lewefy"
          src="/img/logo-lewefy-1.png"
        />
        {/* ... (Conteúdo de direitos autorais e ícones sociais permanece o mesmo do Footer.jsx) ... */}
      </div>

      <div className="inline-flex items-start gap-[30px] relative flex-[0_0_auto]">
        {/* Coluna Lewefy */}
        <div className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]">
          <h3 className="relative w-40 mt-[-1.00px] font-heading-headline-4 font-semibold text-[#178bc4]">LeweFY</h3>
          <div className="inline-flex flex-col items-start gap-3 relative flex-[0_0_auto]">
            <Link to="/" className="font-body-regular-body-3 text-[#64bcb3]">Home</Link>
            <Link to="/oprojeto" className="font-body-regular-body-3 text-[#64bcb3]">O Projeto</Link>
            <Link to="/recursos" className="font-body-regular-body-3 text-[#64bcb3]">Recursos de Apoio</Link>
            <Link to="/acolhimento" className="font-body-regular-body-3 text-[#64bcb3]">Buscar Ajuda Profissional</Link>
          </div>
        </div>

        {/* Coluna Suporte */}
        <div className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]">
          <h3 className="relative w-40 mt-[-1.00px] font-heading-headline-4 font-semibold text-[#178bc4]">Suporte</h3>
          <div className="inline-flex flex-col items-start gap-3 relative flex-[0_0_auto]">
             <Link to="/termos" className="font-body-regular-body-3 text-[#64bcb3]">Termos de Uso</Link>
             <Link to="/privacidade" className="font-body-regular-body-3 text-[#64bcb3]">Política de Privacidade</Link>
             <Link to="/contato" className="font-body-regular-body-3 text-[#64bcb3]">Contato</Link>
             <a href="https://yesconsulta.com" target="_blank" rel="noopener noreferrer" className="font-body-regular-body-3 text-[#64bcb3]">Ecossistema YesConsulta</a>
          </div>
        </div>

        {/* Mantenha-se atualizado */}
        <div className="overflow-hidden inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]">
          <h3 className="relative w-[243px] mt-[-1.00px] font-heading-headline-4 font-semibold text-[#178bc4]">Mantenha-se atualizado</h3>
            <div className="relative w-[257px] h-10 mr-[-2.00px]">
              <div className="relative w-[255px] h-10 rounded-lg">
                <div className="absolute w-[255px] h-10 top-0 left-0 bg-white rounded-lg opacity-20" />
                <EssentialIconsSend1 className="!absolute !w-[18px] !h-[18px] !top-[11px] !left-[225px]" />
                <div className="absolute top-[9px] left-3 font-body-regular-body-3 font-normal text-[#f7902b] whitespace-nowrap">Seu email</div>
              </div>
            </div>
        </div>

        <SeletorDeIdiomas className="!relative !w-[39px] !h-[39px]" />
      </div>
    </div>
  );
};
