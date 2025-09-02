/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Yesconsultalog = ({
  className,
  elementTervisAiTodosClassName,
  href = "https://yesconsulta.com", // Define um valor padrão
}) => {
  return (
    <div
      className={`relative w-[103px] h-11 bg-[url(/img/yesconsultalog-3.png)] bg-cover bg-[50%_50%] ${className}`}
    >
      <a href={href} rel="noopener noreferrer" target="_blank">
        <p
          className={`absolute top-[57px] left-[-115px] [font-family:'Arimo',Helvetica] font-normal text-sm tracking-[0] leading-5 underline whitespace-nowrap ${elementTervisAiTodosClassName}`}
        >
          Hub homologado pelo Ecossistema YesConsulta.com
        </p>
      </a>

      <img
        className="absolute w-[26px] h-[26px] top-[55px] left-[218px] object-cover"
        alt="Vecteezy icon"
        src="/img/vecteezy-3d-icon-verify-verified-56368350-1.png"
      />
    </div>
  );
};

Yesconsultalog.propTypes = {
  className: PropTypes.string,
  elementTervisAiTodosClassName: PropTypes.string,
  href: PropTypes.string,
};
