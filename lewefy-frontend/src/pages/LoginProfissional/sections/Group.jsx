import React from "react";
import { Link } from "react-router-dom";

export const Group = () => {
  return (
    <div className="absolute w-[1440px] h-[339px] top-[77px] left-0">
      <div className="relative h-[351px] -top-1.5 bg-[url(/img/rectangle-1.svg)] bg-[100%_100%]">
        <div className="absolute top-[137px] left-0 right-0 mx-auto text-center w-auto">
          <h1 className="[font-family:'Poppins',Helvetica] font-medium text-[#522f89] text-5xl">
            Login
          </h1>
        </div>
        
        <div className="absolute w-[227px] h-[26px] top-[214px] left-0 right-0 mx-auto">
          <div className="flex items-center justify-center gap-4 text-base">
            <Link to="/" className="font-medium text-[#522f89]">Home</Link>
            <span className="text-[#522f89] -rotate-90">›</span>
            <span className="font-light text-[#522f89]">Login Profissional</span>
          </div>
        </div>
      </div>
    </div>
  );
};
