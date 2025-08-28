import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button/Button";
import { Frame } from "@/components/layout/Frame/Frame";
import { Footer } from "@/components/layout/Footer/Footer";
import { SearchViewModal } from "@/components/ui/SearchViewModal/SearchViewModal";
import { Yesconsultalog } from "@/components/ui/Yesconsultalog/Yesconsultalog";
import { BotODesabafar } from "@/icons/BotODesabafar";
import { Type } from "@/icons/Type";
import { Close } from "@/icons/Close";
import { Icon13 } from "@/icons/Icon13";

export default function HomePage() {
  return (
    <div className="bg-white flex flex-col items-center w-full">
      <div className="bg-white overflow-hidden w-full max-w-[1440px] relative">
        <Frame />
        <main>
          <section className="relative w-full max-w-[1458px] mx-auto mt-20">
            <div className="flex flex-col items-start gap-10">
              <div className="flex flex-col md:flex-row items-center gap-10 px-8 py-16 bg-[#d9f2ff]">
                <div className="flex flex-col items-start gap-8 flex-1">
                  <div className="flex flex-col max-w-2xl gap-4">
                    <h1 className="text-4xl font-bold text-[#f7902b] leading-tight">
                      Fale o Que Está <br /> no Seu Coração
                    </h1>
                    <p className="text-base text-neutralgrey">
                      Um espaço seguro e sem julgamentos para você expressar seus
                      sentimentos, aliviar a mente e encontrar conforto ao compartilhar
                      suas emoções.
                    </p>
                  </div>
                  <Link to="/login">
                    <Button
                      className="!bg-[#f7902b]"
                      icon={false}
                      size="medium"
                      state="default"
                      text="Login"
                      type="primary"
                    />
                  </Link>
                </div>
              </div>
            </div>

            <SearchViewModal
              caret="/icons/caret-1.svg"
              className="!h-[195px] !absolute right-0 top-[109px] bg-[#ffcc9a] w-full max-w-[545px]"
              headerClassName="!bg-[#f7902b]"
              horizontalFullDivider="/icons/divider-2.svg"
              iconButtonBuildingBlocksIconIcon={<Icon13 className="w-6 h-6" color="#49454F" />}
              inputText="Publique seu desabafo"
              labelText="input-text"
              override={<Close className="w-6 h-6" color="#49454F" />}
              showListItems={false}
            />
            <BotODesabafar className="absolute w-[30px] h-[30px] top-[252px] right-[50px]" />
            <Type className="absolute w-4 h-4 top-[190px] right-[500px]" />

            <div className="flex w-full h-[118px] mt-20 bg-[#ffd9b5] items-center justify-center">
              <p className="text-base text-neutralblack text-center max-w-3xl">
                “Conheça todas as teorias, domine todas as técnicas, mas ao tocar
                uma alma humana, seja apenas outra alma humana.”
                <br />
                <span className="italic">Carl Jung</span>
              </p>
            </div>
          </section>
        </main>

        <footer className="mt-20 relative">
          <Footer />
          <div className="absolute top-[252px] right-[50px]">
            <Yesconsultalog
              className="w-full"
              elementTervisAiTodosClassName="text-[#178bc4]"
              href="https://yesconsulta.com"
            />
          </div>
        </footer>
      </div>
    </div>
  );
}
