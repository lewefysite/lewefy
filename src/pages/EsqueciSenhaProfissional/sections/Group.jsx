import React from "react";
import { Link } from "react-router-dom";

export const Group = () => {
  return (
    <div className="absolute w-[519px] h-24 top-[134px] left-1/2 -translate-x-1/2 text-center">
      <div className="w-full h-[72px]">
        <h1 className="[font-family:'Poppins',Helvetica] font-medium text-[#522f89] text-5xl">
          Esqueci minha senha
        </h1>
      </div>

      <div className="w-full h-6 mt-2">
        <div className="flex items-center justify-center gap-4 text-base">
          <Link to="/" className="font-medium text-[#522f89]">Home</Link>
          <span className="text-[#522f89] -rotate-90">›</span>
          <span className="font-light text-[#522f89]">Esqueci minha senha</span>
        </div>
      </div>
    </div>
  );
};
