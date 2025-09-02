/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const TextareaField = ({
  hasLabel = true,
  label = "Label",
  value = "",
  placeholder = "Value",
  onChange,
  className,
  dragClassName,
  drag = "/img/drag-1.svg",
}) => {
  return (
    <div
      className={`inline-flex flex-col items-start gap-[var(--size-space-200)] relative ${className}`}
    >
      {hasLabel && (
        <label className="relative self-stretch mt-[-1.00px] font-body-base font-[number:var(--body-base-font-weight)] text-color-text-default-default text-[length:var(--body-base-font-size)] tracking-[var(--body-base-letter-spacing)] leading-[var(--body-base-line-height)] [font-style:var(--body-base-font-style)]">
          {label}
        </label>
      )}

      <div className="flex min-w-60 min-h-20 items-start relative self-stretch w-full flex-[0_0_auto] bg-color-background-default-default rounded-[var(--size-radius-200)] overflow-hidden border border-solid border-color-border-default-default">
        <textarea
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="relative flex-1 w-full h-full p-[var(--size-space-300)] font-body-base text-color-text-default-default placeholder:text-color-text-default-tertiary focus:outline-none resize-none"
        />
        {/* O ícone de arrastar para redimensionar pode ser removido, já que os browsers fazem isso nativamente */}
        {/* <img
          className={`absolute w-[7px] h-[7px] top-[67px] left-[228px] ${dragClassName}`}
          alt="Drag"
          src={drag}
        /> */}
      </div>
    </div>
  );
};

TextareaField.propTypes = {
  hasLabel: PropTypes.bool,
  label: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
  dragClassName: PropTypes.string,
  drag: PropTypes.string,
};
