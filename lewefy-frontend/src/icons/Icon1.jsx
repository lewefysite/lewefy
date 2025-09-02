import PropTypes from "prop-types";
import React from "react";

export const Icon1 = ({ color = "white", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 15.4L6 9.4L7.4 8L12 12.6L16.6 8L18 9.4L12 15.4Z"
        fill={color}
      />
    </svg>
  );
};

Icon1.propTypes = {
  color: PropTypes.string,
};
