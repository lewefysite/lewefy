/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const InputField = ({
  hasLabel = true,
  label = "Label",
  value = "", // Valor controlado pelo React
  placeholder = "Value", // Placeholder para o input
  type = "text", // Tipo do input (text, password, email)
  onChange, // Função para atualizar o estado
  className,
  divClassName,
}) => {
  return (
    <div className={`inline-flex flex-col items-start gap-[var(--size-space-200)] relative ${className}`}>
      {hasLabel && (
        <label
          className={`relative self-stretch mt-[-1.00px] font-body-base font-[number:var(--body-base-font-weight)] text-color-text-default-default text-[length:var(--body-base-font-size)] tracking-[var(--body-base-letter-spacing)] leading-[var(--body-base-line-height)] [font-style:var(--body-base-font-style)] ${divClassName}`}
        >
          {label}
        </label>
      )}
      <div className="flex min-w-60 items-center relative self-stretch w-full flex-[0_0_auto] bg-color-background-default-default rounded-[var(--size-radius-200)] overflow-hidden border border-solid border-color-border-default-default">
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full h-full pt-[var(--size-space-300)] pr-[var(--size-space-400)] pb-[var(--size-space-300)] pl-[var(--size-space-400)] font-single-line-body-base text-color-text-default-default placeholder:text-color-text-default-tertiary focus:outline-none"
        />
      </div>
    </div>
  );
};

InputField.propTypes = {
  hasLabel: PropTypes.bool,
  label: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
  divClassName: PropTypes.string,
};
