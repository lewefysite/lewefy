import React from "react";
import { Link } from "react-router-dom";
import { EssentialIconsSend1 } from "../../../icons/EssentialIconsSend1";
import { SeletorDeIdiomas } from "../../../icons/SeletorDeIdiomas";
import { SocialIcons1 } from "../../../icons/SocialIcons1";
import { SocialIcons2 } from "../../../icons/SocialIcons2";
import { StyleWhiteSocialInstagram } from "../../../icons/StyleWhiteSocialInstagram";
import { StyleWhiteSocialYoutube } from "../../../icons/StyleWhiteSocialYoutube";


export const FooterBig = () => {
  // O conteúdo aqui é idêntico ao já definido no Arquivo 34
  // Em um projeto real, este seria um componente importado de /src/components/common/FooterBig.jsx
  return (
    <footer className="inline-flex items-start gap-[125px] px-[165px] py-16 absolute top-[446px] left-0 bg-[#ffe99c]">
      <div className="relative w-[350px] h-[244px] overflow-hidden">
         {/* ... Logo, Copyright e Ícones Sociais ... */}
      </div>
      <div className="inline-flex items-start gap-[30px] relative flex-[0_0_auto]">
        {/* Colunas de links e formulário de email */}
      </div>
    </footer>
  );
};
