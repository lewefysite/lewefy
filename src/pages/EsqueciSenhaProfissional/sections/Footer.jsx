import React from "react";
import { FooterBig } from "../../../components/common/FooterBig"; // Importa o componente centralizado

export const Footer = () => {
    // A página EsqueciSenhaProfissional também usa o rodapé padrão "FooterBig".
    // Em vez de duplicar o código, simplesmente importamos o componente comum.
    return (
       <div className="absolute top-[458px] left-[19px]"> 
          <FooterBig />
       </div>
    );
};
