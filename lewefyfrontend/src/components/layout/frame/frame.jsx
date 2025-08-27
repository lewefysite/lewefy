import React from 'react';

export function Frame() {
  return (
    <header className="w-full bg-brandprimary text-white py-6 px-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Lewefy</h1>
      <nav className="space-x-4">
        <a href="/" className="hover:underline">Início</a>
        <a href="/login" className="hover:underline">Login</a>
      </nav>
    </header>
  );
}
