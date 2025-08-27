import React from 'react';

export function Footer() {
  return (
    <div className="w-full bg-brandsecondary text-neutralwhite py-8 px-4 flex flex-col items-center">
      <p className="text-sm text-center">
        © {new Date().getFullYear()} Lewefy. Todos os direitos reservados.
      </p>
      <nav className="mt-4 space-x-4">
        <a href="/" className="hover:underline">Início</a>
        <a href="/login" className="hover:underline">Login</a>
        <a href="/sobre" className="hover:underline">Sobre</a>
      </nav>
    </div>
  );
}
