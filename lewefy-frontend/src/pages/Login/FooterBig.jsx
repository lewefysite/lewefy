import React from "react";
import { Link } from "react-router-dom";
import { EssentialIconsSend1 } from "../../../icons/EssentialIconsSend1";
import { SeletorDeIdiomas } from "../../../icons/SeletorDeIdiomas";
import { SocialIcons1 } from "../../../icons/SocialIcons1";
import { SocialIcons2 } from "../../../icons/SocialIcons2";
import { StyleWhiteSocialInstagram } from "../../../icons/StyleWhiteSocialInstagram";
import { StyleWhiteSocialYoutube } from "../../../icons/StyleWhiteSocialYoutube";


export const FooterBig = () => {
  return (
    <footer className="inline-flex items-start gap-[125px] px-[165px] py-16 absolute top-[640px] left-0 bg-[#ffe99c]">
      {/* O conteúdo do rodapé (Copyright, ícones sociais, links, formulário de email) é idêntico ao já definido em outros arquivos. */}
      {/* Coluna Lewefy */}
      <div className="relative w-[350px] h-[244px] overflow-hidden">
        {/* ... Logo, Copyright e Ícones Sociais ... */}
      </div>

      <div className="inline-flex items-start gap-[30px] relative flex-[0_0_auto]">
        {/* Colunas de links e formulário de email */}
      </div>
    </footer>
  );
};
