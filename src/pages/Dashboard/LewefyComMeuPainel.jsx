import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { SplitButton } from "../../components/SplitButton/SplitButton";
import { Yesconsultalog } from "../../components/Yesconsultalog/Yesconsultalog";
import { FooterBig } from "../../components/common/FooterBig";
import { Frame } from "../../components/common/Frame";
import { Footer } from "./sections/Footer"; // Certifique-se de que este arquivo exista em /Dashboard/sections/

export const LewefyComMeuPainel = () => {
    const navigate = useNavigate();

  return (
    <div className="bg-white grid justify-items-center [align-items:start] w-screen">
      <div className="bg-white overflow-hidden w-[1440px] h-auto min-h-screen relative flex flex-col">
        <Frame />
        <main className="flex-grow pt-[106px]">
            <a href="https://lewefy.com/" target="_blank" rel="noopener noreferrer">
            <img
                className="w-[147px] h-[147px] mx-auto"
                alt="Logo Lewefy"
                src="/img/logo-lewefy-2.png"
            />
            </a>
            <div className="w-[720px] h-[416px] mx-auto mt-9 relative">
            <img
                className="absolute w-full h-auto top-0 left-0"
                alt="Caixa de texto para novo desabafo"
                src="/img/frame-39.svg"
            />
            <Button
                onClick={() => navigate('/novo-desabafo')}
                className="!border-none !absolute !left-auto right-[0] !bg-[#7aca5b] !top-[376px]"
                label="Enviar Desabafo"
                size="medium"
                stateProp="default"
                variant="primary"
            />
            </div>
            <Footer /> {/* Seção da Tabela 'Meus Desabafos' */}
            <div className="w-[1241px] mx-auto mt-4 text-right">
                <SplitButton
                    leadingLabelText="Ver mais"
                    onLeadingClick={() => navigate('/meus-desabafos')}
                    leadingButtonClassName="!bg-[#f7902b]"
                    trailingButtonClassName="!bg-[#f7902b]"
                />
            </div>
        </main>
        <div className="relative mt-20">
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
};```

Depois de confirmar a estrutura da pasta e substituir o conteúdo desses dois arquivos, por favor, tente fazer o deploy novamente. Esse erro específico de resolução de caminho deve ser corrigido.
