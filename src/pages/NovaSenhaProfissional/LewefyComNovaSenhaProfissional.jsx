import React from "react";
import { Frame } from "../../components/common/Frame";
import { Footer } from "./sections/Footer";
import { Group } from "./sections/Group";

export const LewefyComNovaSenhaProfissional = () => {
  return (
    <div
      className="bg-white grid justify-items-center [align-items:start] w-screen"
    >
      <div className="bg-white overflow-hidden w-[1440px] h-[1298px] relative">
        <div className="absolute w-[1440px] h-[417px] top-0 left-0">
          <div className="absolute w-[1440px] h-[339px] top-[78px] left-0 bg-[#30fff41a] blur-[3px]" />
          <Frame />
          <div className="absolute w-[292px] h-24 top-[222px] left-[574px]">
              {/* O conteúdo do título e breadcrumb está na seção Group */}
          </div>
        </div>
        
        <div className="absolute w-full top-[468px] left-0">
            <Group /> {/* Contém o formulário e título */}
            <Footer />
        </div>
      </div>
    </div>
  );
};
