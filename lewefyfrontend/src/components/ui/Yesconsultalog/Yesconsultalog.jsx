import React from 'react';

export function Yesconsultalog({ className = '', elementTervisAiTodosClassName = '', href = '#' }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center justify-center px-4 py-2 rounded shadow-md bg-white border border-brandinfo ${className}`}
    >
      <span className={`text-sm font-medium ${elementTervisAiTodosClassName}`}>
        Acesse YesConsulta
      </span>
    </a>
  );
}
