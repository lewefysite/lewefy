import React from "react";

// Este componente é essencialmente o mesmo da página de Dashboard (ARQUIVO 76).
// Ele deve ser movido para /components/posts/PostsTable.jsx para ser reutilizado.

const TableRow = ({ id, title, status, date }) => (
    <div className="flex w-full items-center text-base font-normal text-neutralblack py-4 border-b">
        <div className="flex-1 px-2">{id}</div>
        <div className="flex-[3] px-2">{title}</div>
        <div className="flex-1 px-2">{status}</div>
        <div className="flex-[2] px-2 flex justify-between items-center">
            <span>{date}</span>
            <button className="text-xl font-bold">+</button>
        </div>
    </div>
);

export const Group = () => {
    // Dados mocados. Viriam da API.
  const posts = Array(12).fill({id: "01", title: "Meu Borderline me traumatizou.", status: "Público", date: "12/07/2025"});
    
  return (
    <section className="flex flex-col items-center w-full px-36 mt-[-40px] z-10 relative">
        <div className="flex flex-col w-full bg-white shadow-lg rounded-lg">
            {/* Cabeçalho da Tabela */}
            <div className="flex w-full bg-[#ffe2b8] p-4 text-base font-medium rounded-t-lg">
                <div className="flex-1 px-2">Número</div>
                <div className="flex-[3] px-2">Desabafo</div>
                <div className="flex-1 px-2">Status</div>
                <div className="flex-[2] px-2">Data da Postagem</div>
            </div>
            {/* Corpo da Tabela */}
            <div className="px-4">
                 {posts.map((post, index) => (
                    <TableRow key={index} {...post} id={`0${index+1}`} />
                ))}
            </div>
        </div>
    </section>
  );
};
