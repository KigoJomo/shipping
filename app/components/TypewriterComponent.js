"use client";
import { useRef, useEffect } from "react";
import Typewriter from "typewriter-effect/dist/core";
import React from "react";

const TypewriterComponent = ({ textLevel = "p", text }) => {
  const typewriterRef = useRef(null);

  const stringText = text.toString();

  useEffect(() => {
    const typewriter = new Typewriter(typewriterRef.current, {
      loop: false,
      delay: 60,
    });

    typewriter.pauseFor(1500).typeString(stringText).pauseFor(1000).start();
  }, [stringText]);

  // Create the element dynamically
  return React.createElement(
    textLevel,
    { ref: typewriterRef },
    ""
  );
};

export default TypewriterComponent;