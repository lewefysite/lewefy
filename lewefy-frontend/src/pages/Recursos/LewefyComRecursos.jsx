import React from "react";
import { Yesconsultalog } from "../../components/Yesconsultalog/Yesconsultalog";
import { CardArtigo } from "./sections/CardArtigo";
import { Footer } from "./sections/Footer";
import { Frame } from "./sections/Frame";
import { Home } from "./sections/Home"; // Renomeado para HeaderSection ou similar seria mais semântico

export const LewefyComRecursos = () => {
  return (
    <div
      className="bg-white grid justify-items-center [align-items:start] w-screen"
    >
      <div className="bg-white overflow-hidden w-[1440px] h-[4192px] relative">
        <div className="absolute w-[1509px] h-[372px] top-[3820px] left-0">
          <Footer />
          <div className="flex flex-col w-[103px] items-start gap-2.5 absolute top-[239px] left-[1162px]">
            <Yesconsultalog
              className="!self-stretch !h-auto !w-full"
              elementTervisAiTodosClassName="!text-[#178bc4]"
              href="https://yesconsulta.com"
            />
          </div>
        </div>

        <div className="absolute w-[1440px] h-[444px] top-0 left-0">
          <Frame />
          <Home /> {/* Esta seção contém o cabeçalho específico da página de recursos */}
        </div>

        <CardArtigo />
      </div>
    </div>
  );
};
