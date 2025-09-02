import React from "react";
import { Yesconsultalog } from "../../components/Yesconsultalog/Yesconsultalog";
import { FooterBig } from "./sections/FooterBig";
import { FormContact } from "./sections/FormContact";
import { Frame } from "./sections/Frame";
import { Link } from "react-router-dom";

export const LewefyComCadastro = () => {
  return (
    <div
      className="bg-white grid justify-items-center [align-items:start] w-screen"
    >
      <div className="bg-white overflow-hidden w-[1440px] h-[1186px] relative">
        <div className="absolute w-[1504px] h-[730px] top-[84px] left-0">
          <div className="flex flex-col w-[1504px] h-[730px] items-start gap-10 absolute top-0 left-0">
            <div className="relative self-stretch w-full h-[730px] bg-[#ffdcba]">
              <Link to="/">
                <img
                  className="absolute w-[147px] h-[147px] top-4 left-[648px] object-cover block"
                  alt="Logo Lewefy"
                  src="/img/logo-lewefy.png"
                />
              </Link>
            </div>
          </div>

          <FormContact />
          
          <Link
            to="/login"
            className="absolute w-[242px] top-[635px] left-[599px] font-body-link text-[#f7902b] text-center underline"
          >
            Já tem uma conta? Clique aqui para entrar.
          </Link>
        </div>

        <div className="absolute w-[1509px] h-[372px] top-[814px] left-[-33px]">
          <FooterBig />
          <div className="flex flex-col w-[103px] items-start gap-2.5 absolute top-[227px] left-[1172px]">
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
