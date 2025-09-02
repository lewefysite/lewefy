import React from "react";
import { Link } from 'react-router-dom';
import { FooterBig } from '../../../components/common/FooterBig';
import { Button } from "../../../components/Button/Button"; 

export const Footer = () => {
  return (
    <footer className="w-full absolute bottom-0 left-0">
        <div className="w-[1440px] h-[226px] mx-auto flex flex-col items-center justify-center gap-8 px-0 py-8 bg-neutralsilver">
            <h2 className="relative w-[788px] font-m3-display-large font-normal text-[#f7902b] text-5xl text-center">
                Explorar a Home da Lewefy
            </h2>
            <Link to="/">
                 <Button
                    className="!flex-[0_0_auto]"
                    divClassName="!tracking-normal !text-base !font-medium"
                    icon="right" // Assumindo que o botão pode renderizar um ícone
                    size="medium"
                    state="default"
                    text="Voltar"
                    type="primary"
                />
            </Link>
        </div>
        
        <FooterBig />
    </footer>
  );
};
