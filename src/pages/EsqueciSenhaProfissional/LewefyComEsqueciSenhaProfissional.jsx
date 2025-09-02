import React from "react";
import { Frame } from "../../components/common/Frame"; // Importa o Frame centralizado
import { Footer } from "./sections/Footer"; // Footer específico desta página (poderia ser o comum)
import { Group } from "./sections/Group";
import { GroupWrapper } from "./sections/GroupWrapper";


export const LewefyComEsqueciSenhaProfissional = () => {
  return (
    <div
      className="bg-white grid justify-items-center [align-items:start] w-screen"
    >
      <div className="bg-white overflow-hidden w-[1440px] h-[1269px] relative">
        <div className="absolute w-[1440px] h-[417px] top-0 left-0">
            <Frame />
            <div className="absolute w-[1440px] h-[339px] top-[78px] left-0 bg-[#30fff41a] blur-[3px]" />
            <Group /> {/* Título da Página */}
        </div>

        <div className="absolute w-full h-auto top-[466px] left-0">
          <GroupWrapper /> {/* Formulário */}
          <Footer />
        </div>
      </div>
    </div>
  );
};
