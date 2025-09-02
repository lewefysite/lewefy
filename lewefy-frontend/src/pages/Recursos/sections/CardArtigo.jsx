import React from "react";
import { Link } from "react-router-dom";

// Componente para um único card, para ser reutilizado.
const Artigo = ({ iconSrc, title, text, linkTo }) => (
    <Link to={linkTo} className="flex flex-col w-[299px] items-center gap-2 px-8 py-6 relative bg-neutralwhite rounded-lg shadow-[0px_2px_4px_#abbed133] hover:shadow-lg transition-shadow">
      <div className="flex flex-col items-center gap-4">
        <img className="relative w-[65px] h-14" alt="Ícone do Artigo" src={iconSrc} />
        <h3 className="relative self-stretch font-heading-headline-3 font-bold text-[#168bc3] text-center">
          {title}
        </h3>
      </div>
      <div className="inline-flex items-start gap-2">
        <p className="relative w-[251px] mt-[-1.00px] font-body-regular-body-3 font-normal text-neutralgrey text-center">
          {text}
        </p>
      </div>
    </Link>
)


export const CardArtigo = () => {
    // Dados de exemplo. No futuro, isso virá da API.
    const artigos = [
        { id: 1, icon: "/img/icon-6.svg", title: "Meu Borderline me traumatizou.", text: "OBS: Pedi ao Chat GPT pra revisar SOMENTE ortografia, concordância, estrutura, etc...", linkTo: "/recursos-paginadepoimento"},
        { id: 2, icon: "/img/icon-7.svg", title: "Título do Artigo 2", text: "Descrição breve do segundo artigo ou desabafo.", linkTo: "/recursos-paginadepoimento/2" },
        { id: 3, icon: "/img/icon-8.svg", title: "Título do Artigo 3", text: "Descrição breve do terceiro artigo ou desabafo.", linkTo: "/recursos-paginadepoimento/3" },
        // ... mais artigos
    ]
  return (
    <section className="inline-flex flex-col h-auto items-start gap-8 absolute top-[494px] left-0 w-full py-8">
      <div className="flex flex-col w-full items-center gap-2">
        <h2 className="relative w-[542px] mt-[-1.00px] font-heading-headline-2 font-semibold text-[#158ac5] text-center">
          Desabafos e Recursos
        </h2>
      </div>

        {/* Mapeia a lista de artigos e renderiza um grid */}
      <div className="w-full px-36 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {artigos.map(artigo => (
            <Artigo 
                key={artigo.id} 
                iconSrc={artigo.icon} 
                title={artigo.title}
                text={artigo.text}
                linkTo={artigo.linkTo}
            />
        ))}
      </div>
      
      {/* Aqui entraria um botão de "Carregar mais" para a paginação */}

    </section>
  );
};
