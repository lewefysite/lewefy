import React from "react";
import { Yesconsultalog } from "../../components/Yesconsultalog/Yesconsultalog";
import { FooterBig } from "./sections/FooterBig";
import { FormForgotPassword } from "./sections/FormForgotPassword";
import { Frame } from "./sections/Frame";
import { Link } from "react-router-dom";

export const LewefyComEsqueciSenha = () => {
  return (
    <div
      className="bg-white grid justify-items-center [align-items:start] w-screen"
    >
      <div className="bg-white overflow-hidden w-[1440px] h-[902px] relative">
        <div className="absolute w-[1532px] h-[818px] top-[84px] -left-7">
          <div className="flex flex-col w-[1504px] h-[456px] items-start gap-10 absolute top-0 left-7">
            <div className="relative self-stretch w-full h-[456px] bg-[#d1ffc0]">
              <Link to="/">
                <img
                  className="absolute w-[147px] h-[147px] top-4 left-[648px] object-cover block"
                  alt="Logo Lewefy"
                  src="/img/logo-lewefy.png"
                />
              </Link>
            </div>
          </div>

          <FooterBig />
          <FormForgotPassword />
          
          <div className="flex flex-col w-[103px] items-start gap-2.5 absolute top-[693px] left-[1172px]">
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
