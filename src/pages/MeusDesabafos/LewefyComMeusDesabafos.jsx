import React from "react";
import { Frame } from "../../components/common/Frame"; // Componente comum
import { FooterBig } from "../../components/common/FooterBig"; // Componente comum
import { Group } from "./sections/Group";
import { Yesconsultalog } from "../../components/Yesconsultalog/Yesconsultalog";


export const LewefyComMeusDesabafos = () => {
  return (
    <div
      className="bg-white grid justify-items-center [align-items:start] w-screen"
    >
      <div className="bg-white overflow-hidden w-[1440px] h-auto min-h-screen relative flex flex-col">
        <Frame />
        
        <main className="w-full">
            <div className="relative h-[339px] w-full bg-[#fff3701a] blur-[3px]">
                <img
                    className="w-[147px] h-[147px] absolute top-[22px] left-1/2 -translate-x-1/2 object-cover"
                    alt="Logo Lewefy"
                    src="/img/logo-lewefy-2.png"
                />
                <h1 className="absolute w-[788px] top-[196px] left-1/2 -translate-x-1/2 font-heading-headline-2 font-semibold text-[#158ac5] text-center">
                    Meus Desabafos
                </h1>
            </div>

            <Group /> {/* Seção que contém a tabela de desabafos */}
        </main>
        
        <div className="relative mt-auto">
             <FooterBig />
             <div className="absolute top-[232px] right-[168px]">
                <Yesconsultalog
                className="!h-auto"
                elementTervisAiTodosClassName="!text-[#178bc4]"
                href="https://yesconsulta.com"
                />
          </div>
        </div>
      </div>
    </div>
  );
};
