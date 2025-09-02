import React from "react";
// O rodapé nesta página não é o "FooterBig" como em outras.
// É uma versão simplificada, apenas com os links e a assinatura de email.

export const Footer = () => {
  return (
     <footer className="flex flex-col w-[1440px] items-start absolute top-[553px] left-0 bg-transparent">
        {/* 
            Este footer parece ser diferente dos outros "FooterBig", pois a página tem uma altura diferente.
            O layout específico para esta página seria construído aqui. Se fosse idêntico, 
            poderíamos importar o FooterBig de /src/components/common/FooterBig.jsx.
            
            Com base no arquivo `lewefy.com-loginprofissional/src/screens/LewefyCom/sections/Footer/Footer.jsx`, 
            este footer também é um "FooterBig".
        */}
        <div className="inline-flex items-start gap-[125px] px-[165px] py-16 relative flex-[0_0_auto] bg-[#ffe99c]">
            {/* Conteúdo do Rodapé */}
        </div>
    </footer>
  );
};
