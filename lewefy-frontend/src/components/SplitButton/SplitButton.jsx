/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Icon8 } from "../../icons/Icon8";
import { Icon1 } from "../../icons/Icon1"; // Assumindo Icon1 é a seta para baixo

export const SplitButton = ({
  showLeadingIcon = true,
  leadingLabelText = "Label",
  size,
  style,
  className,
  leadingButtonClassName,
  trailingButtonClassName,
  onLeadingClick,
  onTrailingClick
}) => {
  return (
    <div
      className={`inline-flex h-12 items-center justify-center gap-0.5 relative rounded-2xl ${className}`}
    >
      <button
        onClick={onLeadingClick}
        className={`all-unset box-border inline-flex flex-col h-8 items-center justify-center relative flex-[0_0_auto] bg-[#6750a4] rounded-[16px_4px_4px_16px] overflow-hidden ${leadingButtonClassName}`}
      >
        <div className="inline-flex gap-1 pl-3 pr-2.5 py-2.5 flex-1 grow items-center relative">
          {showLeadingIcon && (
            <Icon8
              className="!relative !w-5 !h-5 !mt-[-4.00px] !mb-[-4.00px] !z-[1]"
              color="white"
            />
          )}

          <div className="relative w-fit mt-[-5.00px] mb-[-3.00px] z-0 font-m3-label-large font-[number:var(--m3-label-large-font-weight)] text-white text-[length:var(--m3-label-large-font-size)] tracking-[var(--m3-label-large-letter-spacing)] leading-[var(--m3-label-large-line-height)] whitespace-nowrap [font-style:var(--m3-label-large-font-style)]">
            {leadingLabelText}
          </div>
        </div>
      </button>

      <button
        onClick={onTrailingClick}
        className={`all-unset box-border flex flex-col w-12 h-8 items-center justify-center relative bg-[#6750a4] rounded-[4px_16px_16px_4px] overflow-hidden ${trailingButtonClassName}`}
      >
        <div className="flex h-full justify-center gap-2 pl-3 pr-3.5 py-[5px] self-stretch w-full items-center relative">
          <Icon1
            className="!relative !w-[22px] !h-[22px] !aspect-[1]"
            color="white"
          />
        </div>
      </button>
    </div>
  );
};

SplitButton.propTypes = {
  showLeadingIcon: PropTypes.bool,
  leadingLabelText: PropTypes.string,
  size: PropTypes.oneOf(["x-small"]),
  style: PropTypes.oneOf(["filled"]),
  className: PropTypes.string,
  leadingButtonClassName: PropTypes.string,
  trailingButtonClassName: PropTypes.string,
  onLeadingClick: PropTypes.func,
  onTrailingClick: PropTypes.func
};
