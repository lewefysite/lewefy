import React from "react";

export const Home = () => {
  return (
    <div className="inline-flex flex-col h-[361px] items-start gap-10 absolute top-[83px] left-0">
      <div className="relative w-[1440px] h-[361px] bg-[#ffd7b1]">
        <div className="absolute w-[1152px] top-[27px] left-36 font-heading-headline-2 font-semibold text-[#178bc5] text-center tracking-tight leading-tight">
          Precisa de Ajuda Agora?
        </div>

        <div className="absolute w-[820px] h-12 top-[108px] left-[310px]">
          <p className="w-[820px] top-[-19px] left-0 text-neutralblack absolute font-body-regular-body-2 font-normal text-base text-center tracking-normal leading-normal">
            Se você está em situação de crise ou urgência emocional, entre em
            contato com serviços de apoio 24h. Você não está sozinho — clique e
            fale com quem pode ajudar.
          </p>
        </div>
        
        <div className="flex justify-center items-start gap-8 absolute w-full top-[167px]">
            {/* Bloco 190 */}
            <a href="tel:190" className="flex flex-col items-center gap-2 text-center">
                <img className="w-[100px] h-[53px]" alt="Logo Polícia Militar" src="/img/help-logo-branding-identity-corporate-vector-design-1.png" />
                <p className="w-[116px] text-[#766fb5] font-body-regular-body-2">190 para a Polícia Militar</p>
            </a>
            {/* Bloco 193 */}
            <a href="tel:193" className="flex flex-col items-center gap-2 text-center">
                <img className="w-[99px] h-[54px]" alt="Logo Corpo de Bombeiros" src="/img/help-logo-branding-identity-corporate-vector-design-2.png" />
                <p className="w-[136px] text-[#04adec] font-body-regular-body-2">193 para o Corpo de Bombeiros</p>
            </a>
            {/* Bloco 192 */}
             <a href="tel:192" className="flex flex-col items-center gap-2 text-center">
                <img className="w-[84px] h-[58px]" alt="Logo SAMU" src="/img/help-logo-branding-identity-corporate-vector-design-4.png" />
                <div className="w-[116px] text-[#f13924] font-body-regular-body-2">192 para o SAMU</div>
            </a>
            {/* Bloco 188 */}
            <a href="tel:188" className="flex flex-col items-center gap-2 text-center">
                <img className="w-[98px] h-[54px]" alt="Logo CVV" src="/img/help-logo-branding-identity-corporate-vector-design-3.png" />
                <div className="w-[116px] text-[#80b94e] font-body-regular-body-2">188 para o CVV</div>
            </a>
        </div>

      </div>
    </div>
  );
};
