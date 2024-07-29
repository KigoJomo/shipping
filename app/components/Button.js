import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Button = ({ primary, secondary, text }) => {
  const buttonClass = classNames(
    "px-4 py-2 rounded-xl text-white focus:outline-none transition-all duration-200 capitalize",
    {
      "bg-transparent hover:bg-primary-dark": primary,
      "bg-secondary-dark hover:bg-secondary": secondary,
    }
  );

  return <button className={buttonClass}>{text}</button>;
};

Button.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  text: PropTypes.string.isRequired,
};

Button.defaultProps = {
  primary: false,
  secondary: false,
};

export default Button;
