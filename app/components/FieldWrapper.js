"use client";
import { useRef, useEffect } from "react";

const FieldWrapper = ({ name, type, label }) => {
  const textareaRef = useRef(null);

  useEffect(() => {
    if (type === "textarea" && textareaRef.current) {
      const textarea = textareaRef.current;
      const adjustHeight = () => {
        textarea.style.height = "auto";
        textarea.style.height = `${textarea.scrollHeight}px`;
      };
      textarea.addEventListener("input", adjustHeight);
      return () => {
        textarea.removeEventListener("input", adjustHeight);
      };
    }
  }, [type]);

  const inputClass = `${name === "email" ? 'w-[65vw]' : 'w-[40vw]'} md:w-[20vw] h-8 bg-transparent border-b border-tertiary focus:border-white focus:outline-none outline-none py-0 space-grotesk`;
  
  return (
    <div className="w-full flex items-end flex-wrap gap-2 md:gap-4">
      <label className="label text-2xl text-tertiary" htmlFor={name}>{label}</label>
      {type === "textarea" ? (
        <textarea
          required
          autoComplete="on"
          id={name}
          name={name}
          className={inputClass}
          ref={textareaRef}
          style={{width: '100%', resize: 'none'}}
        />
      ) : (
        <input
          required
          autoComplete={name}
          id={name}
          name={name}
          type={type}
          className={inputClass}
        />
      )}
    </div>
  );
};

export default FieldWrapper;
