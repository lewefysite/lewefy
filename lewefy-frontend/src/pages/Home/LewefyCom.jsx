import React from "react";
import { SearchViewModal } from "../../components/SearchViewModal/SearchViewModal";
import { Yesconsultalog } from "../../components/Yesconsultalog/Yesconsultalog";
import { BotODesabafar } from "../../icons/BotODesabafar";
import { Close } from "../../icons/Close";
import { ArrowBack } from "../../icons/ArrowBack"; // Nome mais semântico
import { Type } from "../../icons/Type";
import { Footer } from "./sections/Footer";
import { Frame } from "./sections/Frame";
import { Home } from "./sections/Home";

export const LewefyCom = () => {
  return (
    <div
      className="bg-white grid justify-items-center [align-items:start] w-screen"
    >
      <div className="bg-white overflow-hidden w-[1440px] h-[1635px] relative">
        <div className="absolute w-[1458px] h-[626px] top-[84px] -left-0.5">
          <Home />
          <div className="absolute top-[109px] left-[851px] w-[545px]">
            {/* O componente de busca está aqui. Sua visibilidade poderia ser controlada por um estado. */}
            <SearchViewModal
              className="!h-[195px] !bg-[#ffcc9a]"
              headerClassName="!bg-[#f7902b]"
              horizontalFullDivider="/img/divider-2.svg"
              onBackClick={() => console.log("Back clicked")}
              onCloseClick={() => console.log("Close clicked")}
              initialText=""
              placeholderText="Publique seu desabafo"
            />
          </div>

          <BotODesabafar className="!absolute !w-[30px] !h-[30px] !top-[252px] !left-[1330px]" />
          <Type className="!absolute !w-4 !h-4 !top-[190px] !left-[876px]" />
          
          <div className="flex w-[1458px] h-[118px] top-[508px] left-0 flex-col items-start gap-10 absolute">
            <div className="relative self-stretch w-full h-[118px] bg-[#ffd9b5]" />
          </div>

          <p className="absolute top-[548px] left-[268px] font-body-regular-body-2 font-[number:var(--body-regular-body-2-font-weight)] text-neutralblack text-[length:var(--body-regular-body-2-font-size)] tracking-[var(--body-regular-body-2-letter-spacing)] leading-[var(--body-regular-body-2-line-height)] [font-style:var(--body-regular-body-2-font-style)]">
            “Conheça todas as teorias, domine todas as técnicas, mas ao tocar
            uma alma humana, seja apenas outra alma humana.”
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Carl
            Jung
          </p>
        </div>

        <div className="absolute w-[1509px] h-[372px] top-[1263px] left-[-35px]">
          <Footer />
          <div className="flex flex-col w-[103px] items-start gap-2.5 absolute top-[252px] left-[1205px]">
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
