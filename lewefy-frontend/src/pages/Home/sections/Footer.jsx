import React from "react";
import { Link } from "react-router-dom";
import { EssentialIconsSend1 } from "../../../icons/EssentialIconsSend1";
import { SeletorDeIdiomas } from "../../../icons/SeletorDeIdiomas";
import { SocialIcons2 } from "../../../icons/SocialIcons2";
import { StyleWhiteSocialDribbble } from "../../../icons/StyleWhiteSocialDribbble";
import { StyleWhiteSocialInstagram } from "../../../icons/StyleWhiteSocialInstagram";
import { StyleWhiteSocialYoutube } from "../../../icons/StyleWhiteSocialYoutube";


export const Footer = () => {
  return (
    <footer className="inline-flex flex-col items-start absolute top-0 left-0 bg-transparent">
      <div className="inline-flex items-start gap-[125px] px-[165px] py-16 relative flex-[0_0_auto] bg-[#ffe99c]">
        <div className="relative w-[350px] h-[244px] overflow-hidden">
          <img
            className="absolute w-[107px] h-[102px] top-0 left-0 object-cover"
            alt="Logo lewefy"
            src="/img/logo-lewefy.png"
          />

          <div className="inline-flex flex-col items-center gap-2 absolute top-[107px] -left-px">
            <p className="relative w-[350px] mt-[-1.00px] font-body-regular-body-3 font-[number:var(--body-regular-body-3-font-weight)] text-[#64bcb3] text-[length:var(--body-regular-body-3-font-size)] tracking-[var(--body-regular-body-3-letter-spacing)] leading-[var(--body-regular-body-3-line-height)] [font-style:var(--body-regular-body-3-font-style)]">
              Direitos autorais © 2025 LeweFY.
            </p>

            <div className="relative w-[350px] font-body-regular-body-3 font-[number:var(--body-regular-body-3-font-weight)] text-[#64bcb3] text-[length:var(--body-regular-body-3-font-size)] tracking-[var(--body-regular-body-3-letter-spacing)] leading-[var(--body-regular-body-3-line-height)] [font-style:var(--body-regular-body-3-font-style)]">
              Todos os direitos reservados
            </div>
          </div>

          <div className="inline-flex items-start gap-4 absolute top-[172px] -left-px">
            <StyleWhiteSocialInstagram
              className="!relative !w-[31px] !h-8"
              color="#F7902B"
            />
            <StyleWhiteSocialDribbble
              className="!relative !w-8 !h-8"
              color="#F7902B"
            />
            <SocialIcons2 className="!relative !w-8 !h-8" color="#F7902B" />
            <StyleWhiteSocialYoutube
              className="!relative !w-8 !h-8"
              color="#F7902B"
            />
          </div>
        </div>

        <div className="inline-flex items-start gap-[30px] relative flex-[0_0_auto]">
          {/* Coluna 1 */}
          <div className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]">
             <div className="relative w-40 mt-[-1.00px] font-heading-headline-4 font-[number:var(--heading-headline-4-font-weight)] text-[#178bc4] text-[length:var(--heading-headline-4-font-size)] tracking-[var(--heading-headline-4-letter-spacing)] leading-[var(--heading-headline-4-line-height)] [font-style:var(--heading-headline-4-font-style)]">
                LeweFY
            </div>
            <div className="inline-flex flex-col items-start gap-3 relative flex-[0_0_auto]">
                <Link to="/" className="relative w-40 mt-[-1.00px] font-body-regular-body-3 font-[number:var(--body-regular-body-3-font-weight)] text-[#64bcb3] text-[length:var(--body-regular-body-3-font-size)] tracking-[var(--body-regular-body-3-letter-spacing)] leading-[var(--body-regular-body-3-line-height)] [font-style:var(--body-regular-body-3-font-style)]">Home</Link>
                <Link to="/oprojeto" className="relative w-40 font-body-regular-body-3 font-[number:var(--body-regular-body-3-font-weight)] text-[#64bcb3] text-[length:var(--body-regular-body-3-font-size)] tracking-[var(--body-regular-body-3-letter-spacing)] leading-[var(--body-regular-body-3-line-height)] [font-style:var(--body-regular-body-3-font-style)]">O Projeto</Link>
                {/* Outros links aqui */}
            </div>
          </div>

            {/* Outras colunas... */}

        </div>
      </div>
    </footer>
  );
};
