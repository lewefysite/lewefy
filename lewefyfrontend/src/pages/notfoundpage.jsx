import React from 'react';
import { Link } from 'react-router-dom';
import { BotODesabafar } from '@/icons/BotODesabafar'; // Ícone leve que representa empatia

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-neutralwhite text-neutralblack px-4 text-center">
      <BotODesabafar className="w-16 h-16 mb-6 text-brandprimary" />
      <h1 className="text-6xl font-bold text-brandprimary">404</h1>
      <p className="mt-4 text-lg max-w-md">
        Ops... parece que você chegou em um lugar que não existe.  
        Mas tudo bem, acontece até com os melhores navegadores.
      </p>
      <p className="mt-2 text-sm text-neutralgrey italic">
        “Às vezes, o caminho mais bonito é aquele que nos leva de volta.”
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-2 bg-brandprimary text-white rounded hover:bg-brandsecondary transition"
      >
        Voltar para o início
      </Link>
    </div>
  );
}
