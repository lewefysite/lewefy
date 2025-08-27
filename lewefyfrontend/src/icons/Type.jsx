import React from 'react';

export function Type({ className = '', color = '#f7902b' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 4h16v2H4z" />
      <path d="M4 10h10v2H4z" />
      <path d="M4 16h16v2H4z" />
    </svg>
  );
}
