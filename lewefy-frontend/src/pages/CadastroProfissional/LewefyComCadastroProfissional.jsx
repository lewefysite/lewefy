import React from "react";
import { Yesconsultalog } from "../../components/Yesconsultalog/Yesconsultalog";
import { Footer } from "./sections/Footer";
import { Frame } from "./sections/Frame";
import { Group } from "./sections/Group";
import { GroupWrapper } from "./sections/GroupWrapper";

export const LewefyComCadastroProfissional = () => {
  return (
    <div
      className="bg-white grid justify-items-center [align-items:start] w-screen"
    >
      <div className="bg-white overflow-hidden w-[1440px] h-[2565px]">
        <div className="relative w-[1509px] h-[2565px] left-[-35px]">
          <Group />
          <GroupWrapper />
          <Frame />
          <Footer />
          <div className="absolute w-[1440px] h-[339px] top-[83px] left-[23px] bg-[#30fff41a] blur-[3px]" />

          <div className="flex flex-col w-[103px] items-start gap-2.5 absolute top-[2423px] left-[1172px]">
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
