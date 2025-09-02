/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Button } from "../Button/Button"; // Usa o componente Button atualizado

export const ButtonGroup = ({
  buttonStart = true,
  buttonEnd = true,
  align,
  className,
  buttonLabel = "Button",
  buttonLabel1 = "Button",
  onButtonStartClick,
  onButtonEndClick,
  buttonVariantPrimaryClassName,
  buttonDivClassName
}) => {
  return (
    <div
      className={`flex w-full items-center gap-[var(--size-space-400)] relative ${ align === 'justify' ? 'justify-between' : 'justify-center' } ${className}`}
    >
      {buttonStart && (
        <Button
          className={align === 'justify' ? "!flex-1 !flex !grow" : "!flex-[0_0_auto]"}
          divClassName={buttonDivClassName}
          label={buttonLabel}
          size="medium"
          stateProp="default"
          variant="subtle"
          onClick={onButtonStartClick}
        />
      )}

      {buttonEnd && (
        <Button
          className={`${buttonVariantPrimaryClassName} ${align === 'justify' ? "!flex-1 !flex !grow" : "!flex-[0_0_auto]"}`}
          label={buttonLabel1}
          size="medium"
          stateProp="default"
          variant="primary"
          onClick={onButtonEndClick}
        />
      )}
    </div>
  );
};

ButtonGroup.propTypes = {
  buttonStart: PropTypes.bool,
  buttonEnd: PropTypes.bool,
  align: PropTypes.oneOf(["justify", "center"]),
  buttonLabel: PropTypes.string,
  buttonLabel1: PropTypes.string,
  onButtonStartClick: PropTypes.func,
  onButtonEndClick: PropTypes.func,
  className: PropTypes.string,
  buttonVariantPrimaryClassName: PropTypes.string,
  buttonDivClassName: PropTypes.string
};
