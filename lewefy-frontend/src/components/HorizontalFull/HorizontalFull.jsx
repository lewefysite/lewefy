/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const HorizontalFull = ({
  className,
  divider = "/img/divider-1.svg",
}) => {
  return (
    <div
      className={`flex flex-col w-full items-start justify-center relative ${className}`}
    >
      <img
        className="relative self-stretch w-full h-px object-cover"
        alt="Divider"
        src={divider}
      />
    </div>
  );
};

HorizontalFull.propTypes = {
  divider: PropTypes.string,
  className: PropTypes.string,
};
