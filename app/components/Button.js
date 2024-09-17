import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Button = ({
  primary = false,
  secondary = false,
  text,
  className,
  onClick,
}) => {
  const buttonClass = classNames(
    "px-4 py-2 rounded-lg md:rounded-xl text-white text-xs md:text-base focus:outline-none transition-all duration-200 capitalize",
    {
      "bg-transparent hover:bg-primary-dark": primary,
      "bg-tertiary hover:bg-secondary": secondary,
    },
    className
  );

  return (
    <button onClick={onClick} className={buttonClass}>
      {text}
    </button>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Button;
