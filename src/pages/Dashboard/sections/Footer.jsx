import React from "react";
import { Link } from "react-router-dom";
// import { getMyPosts } from "../../../api/postsService"; // Para integração futura

const TableRow = ({ id, title, status, date }) => (
    <div className="flex w-full items-center text-base font-normal text-neutralblack py-4 border-b">
        <div className="w-1/4">{id}</div>
        <div className="w-1/4">{title}</div>
        <div className="w-1/4">{status}</div>
        <div className="w-1/4 flex justify-between items-center">
            <span>{date}</span>
            <button className="text-xl font-bold">+</button>
        </div>
    </div>
);

export const Footer = () => { // Renomear para MyPostsTable seria mais claro
  // Dados de exemplo que viriam da API (getMyPosts())
  const posts = [
      {id: "01", title: "Meu Borderline me traumatizou.", status: "Público", date: "12/07/2025"},
      {id: "02", title: "Ansiedade no trabalho.", status: "Anônimo", date: "15/07/2025"},
      {id: "03", title: "Lidando com a perda.", status: "Público", date: "18/07/2025"},
       //... mais posts
  ];
    
  return (
    <section className="flex flex-col w-full px-36 mt-8">
        <div className="flex flex-col w-full bg-white">
            {/* Cabeçalho da Tabela */}
            <div className="flex w-full bg-[#ffe2b8] p-4 text-base font-medium">
                <div className="w-1/4">Número</div>
                <div className="w-1/4">Desabafo</div>
                <div className="w-1/4">Status</div>
                <div className="w-1/4">Data da Postagem</div>
            </div>
            {/* Corpo da Tabela */}
            <div className="px-4">
                 {posts.map(post => (
                    <TableRow key={post.id} {...post} />
                ))}
            </div>
        </div>
    </section>
  );
};
