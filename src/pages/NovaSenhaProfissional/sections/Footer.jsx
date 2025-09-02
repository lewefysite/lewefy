import React from "react";
import { Yesconsultalog } from "../../../components/Yesconsultalog/Yesconsultalog";
import { FooterBig } from "../../../components/common/FooterBig"; // Importa o rodapé centralizado

export const Footer = () => {
  return (
    <div className="relative mt-20"> 
        <FooterBig />
         <div className="absolute top-[227px] right-[100px] z-10"> {/* Posicionamento ajustado */}
            <Yesconsultalog
              className="!h-auto"
              elementTervisAiTodosClassName="!text-[#178bc4]"
              href="https://yesconsulta.com"
            />
          </div>
    </div>
  );
};
