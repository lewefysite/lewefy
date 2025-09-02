import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/Button/Button"; // Reutiliza o componente de botão da Home

export const ComponenteDeMdia = () => {
    const navigate = useNavigate();

  return (
    <div className="flex flex-col w-[1454px] items-start gap-10 absolute top-0 left-0">
      <div className="flex h-[624px] items-center gap-[104px] px-36 py-24 relative self-stretch w-full bg-tintt-4">
        <div className="flex flex-col w-[758px] items-start gap-8 relative">
          <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
            <h1 className="relative self-stretch mt-[-1.00px] font-heading-headline-1 font-semibold text-transparent text-6xl tracking-tight leading-tight">
              <span className="text-[#4d4d4d]">
                Nossa Jornada, <br />
              </span>
              <span className="text-[#1689c3]">
                Seu Bem-Estar
              </span>
            </h1>

            <p className="relative w-[688px] font-body-regular-body-2 font-normal text-neutralblack text-base tracking-normal leading-normal">
              Descubra como a Lewefy conecta você ao cuidado emocional com
              acolhimento, confiança e profissionais preparados para caminhar ao
              seu lado.
            </p>
          </div>

          <Button
            onClick={() => navigate("/recursos")} // Ação do botão
            className="!flex-[0_0_auto] !bg-[#1689c3]"
            divClassName="!tracking-normal !text-base !font-medium"
            icon={false}
            size="medium"
            state="default"
            text="Ver Como Funciona"
            type="primary"
          />
        </div>
      </div>
    </div>
  );
};
