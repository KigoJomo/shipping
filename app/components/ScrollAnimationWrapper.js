"use client";

import React from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const ScrollAnimationWrapper = ({ children, variant, className, duration = 1 }) => {
  const variants = {
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration } },
    },
    slideInLeft: {
      hidden: { opacity: 0, x: -100 },
      visible: { opacity: 1, x: 0, transition: { duration } },
    },
    slideInRight: {
      hidden: { opacity: 0, x: 100 },
      visible: { opacity: 1, x: 0, transition: { duration } },
    },
    slideInBottom: {
      hidden: { opacity: 0, y: 100 },
      visible: { opacity: 1, y: 0, transition: { duration } },
    },
    slideInTop: {
      hidden: { opacity: 0, y: -100 },
      visible: { opacity: 1, y: 0, transition: { duration } },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={variants[variant]}
      className={className}
    >
      {children}
    </motion.div>
  );
};

ScrollAnimationWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["fadeIn", "slideInLeft", "slideInRight"])
    .isRequired,
  className: PropTypes.string,
  duration: PropTypes.number,
};

export default ScrollAnimationWrapper;
