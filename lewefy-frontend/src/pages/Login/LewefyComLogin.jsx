import React from "react";
import { Yesconsultalog } from "../../components/Yesconsultalog/Yesconsultalog";
import { FooterBig } from "./sections/FooterBig";
import { FormLogIn } from "./sections/FormLogIn";
import { Frame } from "./sections/Frame";
import { Link } from "react-router-dom";


export const LewefyComLogin = () => {
  return (
    <div
      className="bg-white grid justify-items-center [align-items:start] w-screen"
    >
      <div className="bg-white overflow-hidden w-[1440px] h-[1096px] relative">
        <div className="absolute w-[1539px] h-[1012px] top-[84px] left-[-35px]">
          <div className="flex flex-col w-[1504px] h-[650px] items-start gap-10 absolute top-0 left-[35px]">
            <div className="relative self-stretch w-full h-[650px] bg-[#d9f2ff]">
              <Link to="/" rel="noopener noreferrer">
                <img
                  className="absolute w-[147px] h-[147px] top-4 left-[648px] aspect-[1] object-cover block"
                  alt="Logo lewefy"
                  src="/img/logo-lewefy.png"
                />
              </Link>
            </div>
          </div>

          <FooterBig />
          <FormLogIn />
          
          <Link to="/cadastro" className="absolute w-[660px] top-[495px] left-[383px] font-body-link text-[#168ac4] text-center underline">
              Cadastre-se para começar a escrever
          </Link>

          <div className="flex flex-col w-[103px] items-start gap-2.5 absolute top-[867px] left-[1172px]">
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
