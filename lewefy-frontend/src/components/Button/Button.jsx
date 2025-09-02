/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";

// Este é o componente genérico de Botão usado nos formulários de Login/Cadastro
export const Button = ({
  label = "Button",
  hasIconEnd = false,
  hasIconStart = false,
  variant,
  stateProp,
  size,
  className,
  onClick,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    variant: variant || "primary",
    state: stateProp || "default",
    size: size || "medium",
  });

  return (
    <button
      onClick={onClick}
      className={`all-[unset] box-border inline-flex items-center gap-[var(--size-space-200)] pt-[var(--size-space-300)] pr-[var(--size-space-300)] pb-[var(--size-space-300)] pl-[var(--size-space-300)] overflow-hidden rounded-[var(--size-radius-200)] justify-center relative ${state.state === "hover" || (state.state === "default" && state.variant === "primary") ? "border border-solid" : ""} ${state.variant === "primary" ? "border-color-border-brand-default" : (state.variant === "subtle" && state.state === "hover") ? "border-color-border-default-default" : ""} ${state.state === "default" && state.variant === "primary" ? "bg-color-background-brand-default" : (state.variant === "primary" && state.state === "hover") ? "bg-color-background-brand-hover" : ""} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <div
        className={`font-single-line-body-base w-fit mt-[-1.00px] tracking-[var(--single-line-body-base-letter-spacing)] text-[length:var(--single-line-body-base-font-size)] [font-style:var(--single-line-body-base-font-style)] font-[number:var(--single-line-body-base-font-weight)] leading-[var(--single-line-body-base-line-height)] whitespace-nowrap relative ${state.variant === "primary" ? "text-color-text-brand-on-brand" : (state.variant === "subtle" && state.state === "hover") ? "text-color-text-default-default" : "text-color-text-neutral-default"}`}
      >
        {label}
      </div>
    </button>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return { ...state, state: "hover" };
    case "mouse_leave":
      return { ...state, state: "default" };
    default:
      return state;
  }
}

Button.propTypes = {
  label: PropTypes.string,
  hasIconEnd: PropTypes.bool,
  hasIconStart: PropTypes.bool,
  variant: PropTypes.oneOf(["primary", "subtle"]),
  stateProp: PropTypes.oneOf(["hover", "default"]),
  size: PropTypes.oneOf(["medium"]),
  className: PropTypes.string,
  onClick: PropTypes.func,
};
