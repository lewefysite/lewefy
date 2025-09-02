/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const IconButton = ({
  buildingBlocksIconIcon, // Espera receber um componente de ícone já instanciado
  onClick,
}) => {
  return (
    // Transformado em botão para acessibilidade
    <button onClick={onClick} className="all-unset box-border flex w-12 h-12 items-center justify-center relative cursor-pointer group">
        <div className="absolute w-10 h-10 rounded-full bg-transparent group-hover:bg-black/10 transition-colors"></div>
        <div className="relative">
            {buildingBlocksIconIcon}
        </div>
    </button>
  );
};

IconButton.propTypes = {
  buildingBlocksIconIcon: PropTypes.element.isRequired,
  onClick: PropTypes.func
};
