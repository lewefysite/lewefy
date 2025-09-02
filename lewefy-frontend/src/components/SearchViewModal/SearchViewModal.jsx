/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React, { useState } from "react";
import { Close } from "../../icons/Close";
import { ArrowBack } from "../../icons/ArrowBack"; // Nome semântico para ícone de voltar
import { HorizontalFull } from "../HorizontalFull/HorizontalFull";
import { IconButton } from "../IconButton/IconButton"; // IconButton precisa ser refatorado também

export const SearchViewModal = ({
  placeholderText = "Hinted search text",
  initialText = "Input text",
  className,
  headerClassName,
  onBackClick,
  onCloseClick,
  onSubmit, // Função para ser chamada ao enviar
}) => {

  const [inputText, setInputText] = useState(initialText);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if(onSubmit) {
      onSubmit(inputText);
    }
  }

  return (
    <div
      className={`flex flex-col max-w-[720px] w-full items-start relative bg-[#ece6f0] rounded-[28px] ${className}`}
    >
      <form onSubmit={handleFormSubmit}
        className={`flex h-14 items-center justify-center gap-1 p-1 relative self-stretch w-full bg-[#ece6f0] rounded-[28px_28px_0px_0px] ${headerClassName}`}
      >
        <IconButton
          buildingBlocksIconIcon={<ArrowBack color="#49454F" />}
          onClick={onBackClick}
          // Outras props de estilo se necessárias
        />
        <div className="items-start gap-2.5 flex-1 self-stretch grow flex flex-col justify-center relative">
          <div className="inline-flex h-6 items-center gap-px px-0 py-2.5 relative">
            <input
              className="relative w-full mt-[-11.00px] mb-[-9.00px] font-m3-body-large font-[number:var(--m3-body-large-font-weight)] text-[#1d1b20] text-[length:var(--m3-body-large-font-size)] tracking-[var(--m3-body-large-letter-spacing)] leading-[var(--m3-body-large-line-height)] [font-style:var(--m3-body-large-font-style)] bg-transparent border-none p-0 focus:outline-none"
              placeholder={placeholderText}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              type="text"
            />
            {/* O cursor (Caret) pode ser controlado nativamente pelo input */}
          </div>
        </div>
        <IconButton
          buildingBlocksIconIcon={<Close color="#49454F" />}
          onClick={onCloseClick}
        />
      </form>

      <HorizontalFull
        className="!self-stretch !flex-[0_0_auto] !w-full"
        divider="/img/divider.svg" // Exemplo
      />
      {/* O conteúdo da busca (ListItems) seria renderizado aqui */}
      <div className="relative self-stretch w-full min-h-[72px]" />
    </div>
  );
};

SearchViewModal.propTypes = {
  placeholderText: PropTypes.string,
  initialText: PropTypes.string,
  className: PropTypes.string,
  headerClassName: PropTypes.string,
  onBackClick: PropTypes.func,
  onCloseClick: PropTypes.func,
  onSubmit: PropTypes.func
};
