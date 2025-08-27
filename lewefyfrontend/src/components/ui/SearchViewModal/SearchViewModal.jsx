import React from 'react';

export function SearchViewModal({
  caret,
  className = '',
  headerClassName = '',
  horizontalFullDivider,
  iconButtonBuildingBlocksIconIcon,
  inputText,
  labelText,
  override,
  showListItems = true,
}) {
  return (
    <div className={`rounded-lg shadow-lg p-6 ${className}`}>
      {/* Header */}
      <div className={`flex items-center justify-between mb-4 ${headerClassName}`}>
        <h2 className="text-lg font-semibold">{labelText}</h2>
        {override}
      </div>

      {/* Divider */}
      {horizontalFullDivider && (
        <img src={horizontalFullDivider} alt="Divider" className="w-full mb-4" />
      )}

      {/* Input */}
      <div className="flex items-center gap-2 bg-white border rounded px-4 py-2">
        {iconButtonBuildingBlocksIconIcon}
        <input
          type="text"
          placeholder={inputText}
          className="flex-1 outline-none bg-transparent"
        />
      </div>

      {/* Caret */}
      {caret && (
        <img src={caret} alt="Caret" className="mt-4 w-6 h-6" />
      )}

      {/* Optional list items */}
      {showListItems && (
        <ul className="mt-4 space-y-2">
          <li className="text-sm text-neutralblack">Exemplo de item 1</li>
          <li className="text-sm text-neutralblack">Exemplo de item 2</li>
        </ul>
      )}
    </div>
  );
}
