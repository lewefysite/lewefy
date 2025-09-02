import React from "react";
import { Button } from "../../../components/Button/Button";
import { useNavigate } from "react-router-dom";

export const BotoDeAo = () => {
  const navigate = useNavigate();

  return (
    <div className="inline-flex flex-col items-start justify-center gap-12 absolute top-[729px] left-0">
      <div className="inline-flex items-start relative flex-[0_0_auto]">
        <div className="flex w-[1440px] items-center justify-between px-36 py-0 relative">
          <img
            className="relative w-[442px] h-[433px]"
            alt="Ilustração de profissionais de saúde e pacientes"
            src="/img/frame-35.svg"
          />

          <div className="flex flex-col w-[661px] items-start gap-8 relative">
            <div className="flex flex-col w-[601px] items-start gap-4 relative flex-[0_0_auto]">
              <h2 className="relative w-[564px] mt-[-1.00px] font-heading-headline-2 font-semibold text-[#8ace71] text-4xl tracking-tight leading-tight">
                Encontre o Profissional Ideal para Você
              </h2>

              <p className="relative self-stretch font-body-regular-body-3 font-normal text-neutralgrey text-sm tracking-normal leading-normal">
                Conheça psicólogos e psicanalistas qualificados, com diferentes
                abordagens e estilos, prontos para acolher você com respeito e
                empatia.
              </p>
            </div>

            <Button
              onClick={() => navigate('/acolhimento')}
              className="!flex-[0_0_auto]"
              divClassName="!tracking-normal !text-base !font-medium"
              icon={false}
              size="medium"
              state="default"
              text="Conhecer a Equipe"
              type="primary"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
