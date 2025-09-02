import React from "react";
import { Yesconsultalog } from "../../components/Yesconsultalog/Yesconsultalog";
import { FooterBig } from "../../components/common/FooterBig";
import { Frame } from "../../components/common/Frame";
import { FormContact } from "./sections/FormContact";


export const LewefyComMatchProfissional = () => {
  return (
    <div
      className="bg-white grid justify-items-center [align-items:start] w-screen"
    >
      <div className="bg-white overflow-hidden w-[1440px] h-auto relative">
        <div className="absolute w-[1504px] h-[730px] top-[84px] left-0">
          <div className="flex flex-col w-full h-full items-center absolute top-0 left-0 bg-[#ffdcba]">
            <h1 className="w-[788px] top-[105px] relative font-heading-headline-2 font-semibold text-[#158ac5] text-center">
              Fale com o Profissional do comentário
            </h1>
          </div>
          <FormContact />
        </div>

        <div className="absolute w-[1509px] h-[372px] top-[814px] left-[-33px]">
          <FooterBig />
          <div className="flex flex-col w-[103px] items-start gap-2.5 absolute top-[225px] left-[1172px]">
            <Yesconsultalog
              className="!self-stretch !h-auto !w-full"
              elementTervisAiTodosClassName="!text-[#178bc4]"
              href="https://yesconsulta.com"
            />
          </div>
        </div>

        <Frame />
      </div>
    </div>
  );
};
