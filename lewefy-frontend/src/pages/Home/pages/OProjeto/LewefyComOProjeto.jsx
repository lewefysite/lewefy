import React from "react";
import { Yesconsultalog } from "../../components/Yesconsultalog/Yesconsultalog";
import { BotoDeAo } from "./sections/BotoDeAo";
import { ComponenteDeMdia } from "./sections/ComponenteDeMdia";
import { FooterBig } from "./sections/FooterBig";
import { Frame } from "./sections/Frame";

export const LewefyComOProjeto = () => {
  return (
    <div
      className="bg-white grid justify-items-center [align-items:start] w-screen"
    >
      <div className="bg-white overflow-hidden w-[1440px] h-[1498px] relative">
        <div className="absolute w-[1454px] h-[624px] top-[84px] left-0">
          <ComponenteDeMdia />
          <div className="absolute w-[251px] h-[541px] top-[43px] left-[989px]">
            <img
              className="absolute w-[267px] h-[557px] -top-2 -left-2"
              alt="Device frame"
              src="/img/device-frame.svg"
            />
          </div>

          <div className="absolute w-[78px] h-[66px] top-[281px] left-[1076px]">
            <div className="h-[66px]">
              <div className="relative w-[78px] h-[66px]">
                <img
                  className="absolute w-[76px] h-[47px] top-[9px] left-px"
                  alt="Icon"
                  src="/img/icon.svg"
                />
              </div>
            </div>
          </div>
        </div>

        <BotoDeAo />
        
        <Frame />
        
        <div className="absolute w-[1509px] h-[372px] top-[1162px] left-[-35px]">
          <FooterBig />
          <div className="flex flex-col w-[103px] items-start gap-2.5 absolute top-[219px] left-[1211px]">
            <Yesconsultalog
              className="!self-stretch !h-auto !w-full"
              elementTervisAiTodosClassName="!text-[#178bc4]"
              href="https://yesconsulta.com"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
