import React from "react";
import { Link } from "react-router-dom";
import { TwentyFourArrowsDirectionsRight1 } from "../../../icons/TwentyFourArrowsDirectionsRight1";

const CardRecurso = ({ imgSrc, title, linkTo, linkText = "Saiba mais" }) => (
    <div className="inline-flex flex-col items-center relative flex-[0_0_auto]">
        <img className="relative w-[368px] h-[286px] object-cover rounded-t-lg" alt="Imagem do Recurso" src={imgSrc} />
        <div className="inline-flex flex-col items-center p-4 -mt-16 w-full max-w-[300px] bg-[#ffeba4] rounded-lg shadow-shadow-8px gap-4">
            <h3 className="relative w-full mt-[-1.00px] font-heading-headline-4 font-semibold text-neutralblack text-center">
                {title}
            </h3>
            <Link to={linkTo} className="flex items-center justify-center gap-2 p-2 relative self-stretch w-full flex-[0_0_auto] group">
                <div className="relative w-fit mt-[-1.00px] font-heading-headline-4 font-semibold text-brandprimary whitespace-nowrap group-hover:underline">
                    {linkText}
                </div>
                <TwentyFourArrowsDirectionsRight1 className="!relative !w-6 !h-6" color="#4CAF4F" />
            </Link>
        </div>
    </div>
);


export const Body = () => {
  return (
    <div className="inline-flex flex-col items-center justify-center gap-12 absolute top-[84px] left-[-5px] w-[1440px]">
      {/* Seção Superior */}
      <section className="flex w-full items-center gap-[78px] px-36 py-8 bg-[#ffd2a6]">
        <img
          className="relative w-[358px] h-[358px] object-cover rounded-lg"
          alt="Mulher relaxando"
          src="/img/image-9.png"
        />
        <div className="flex flex-col h-auto items-start gap-4 relative flex-1 grow">
          <div className="flex flex-col items-start self-stretch w-full gap-4 relative flex-[0_0_auto]">
            <p className="relative self-stretch mt-[-1.00px] font-body-medium-body-2 font-medium text-neutralblack">
              Na YesConsulta, acreditamos que o cuidado começa com a escuta. Por
              isso, reunimos um time de terapeutas experientes, empáticos e
              comprometidos com o seu bem-estar emocional.
            </p>
            <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
              <p className="relative self-stretch mt-[-1.00px] font-heading-headline-4 font-semibold text-[#148bc6]">
                Seja qual for o seu momento, temos alguém pronto para caminhar
                ao seu lado com respeito, ética e humanidade. Conheça nossos
                terapeutas, leia seus perfis e escolha quem mais combina com
                você.
              </p>
            </div>
          </div>
          <a
            className="flex items-center gap-2 p-2 relative w-auto flex-[0_0_auto] group"
            href="https://yesconsulta.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <p className="relative w-auto mt-[-1.00px] font-heading-headline-4 font-semibold text-brandprimary group-hover:underline">
              Escolha Quem Vai Te Acolher
            </p>
            <TwentyFourArrowsDirectionsRight1 className="!relative !w-6 !h-6" color="#4CAF4F" />
          </a>
        </div>
      </section>

      {/* Seção Inferior */}
      <section className="inline-flex flex-col items-center gap-4 relative flex-[0_0_auto]">
        <div className="flex flex-col w-[1110px] items-center gap-2 relative">
          <h2 className="relative self-stretch mt-[-1.00px] font-heading-headline-2 font-semibold text-brandinfo text-center">
            Explore nossos Recursos de Apoio
          </h2>
          <p className="relative w-[750px] font-body-regular-body-2 font-normal text-neutralblack text-center">
            Na Lewefy, acreditamos que o cuidado vai além da consulta. Por isso,
            desenvolvemos conteúdos e ferramentas que ajudam você a lidar com
            suas emoções no dia a dia.
          </p>
        </div>
        <div className="flex w-full items-start justify-center gap-8 px-36 py-0 relative">
             <CardRecurso imgSrc="/img/image-18.png" title="Ferramentas para Sua Jornada Emocional" linkTo="/recursos#ferramentas" />
             <CardRecurso imgSrc="/img/image-19.png" title="Conteúdo que Acolhe e Orienta" linkTo="/recursos#conteudo" />
             <CardRecurso imgSrc="/img/image-20.png" title="Apoio Contínuo, Mesmo Fora da Sessão" linkTo="/recursos#apoio" />
        </div>
      </section>
    </div>
  );
};
