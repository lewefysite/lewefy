import React from "react";
import { Yesconsultalog } from "../../components/Yesconsultalog/Yesconsultalog";
import { Body } from "./sections/Body";
import { Footer } from "./sections/Footer";
import { Frame } from "./sections/Frame";

export const LewefyComAcolhimento = () => {
  return (
    <div
      className="bg-white grid justify-items-center [align-items:start] w-screen"
    >
      <div className="bg-white overflow-hidden w-[1440px] h-[1710px] relative">
        <Body />
        <div className="absolute w-[1509px] h-[598px] top-[1112px] left-0">
          <Footer />
          <div className="flex flex-col w-[103px] items-start gap-2.5 absolute top-[458px] left-[1172px]">
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
