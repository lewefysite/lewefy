import React from "react";
import { Yesconsultalog } from "../../components/Yesconsultalog/Yesconsultalog";
import { Footer } from "./sections/Footer";
import { Frame } from "../../components/common/Frame"; // Corrigindo para usar o componente comum
import { Group } from "./sections/Group";
import { GroupWrapper } from "./sections/GroupWrapper";

export const LewefyComLoginProfissional = () => {
  return (
    <div
      className="bg-white grid justify-items-center [align-items:start] w-screen"
    >
      <div className="bg-white w-[1440px] h-auto min-h-screen relative overflow-x-hidden flex flex-col">
        {/* Cabeçalho */}
        <div className="w-full h-auto relative">
          {/* O componente Group cria o fundo SVG com o título e breadcrumb */}
          <Group /> 
          <Frame /> {/* O Frame fica por cima da imagem de fundo */}
        </div>

        {/* Corpo Principal */}
        <main className="w-full flex-grow mt-[88px]"> {/* Ajuste de margem para o conteúdo não ficar atrás do header */}
            <GroupWrapper /> {/* Formulários de Login/Cadastro */}
        </main>
        
        {/* Rodapé */}
        <div className="relative mt-auto w-full">
            <Footer />
            <div className="absolute top-[248px] right-[130px] z-10"> {/* Posição ajustada */}
                <Yesconsultalog
                className="!h-auto !w-full"
                elementTervisAiTodosClassName="!text-[#178bc4]"
                href="https://yesconsulta.com"
                />
            </div>
        </div>

      </div>
    </div>
  );
};
