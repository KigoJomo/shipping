import SelectInput from "./SelectInput";

const RegularWrapper = ({ name, type, label, options, onChange, placeholder, min=1, max=5 }) => {
  return (
    <div className="fieldwrapper w-full flex flex-col gap-2 md:gap-4">
      <label
        htmlFor={name}
        className="text-xs md:text-base capitalize font-light text-tertiary"
      >
        {label}
      </label>
      {type === "select" ? (
        <SelectInput name={name} options={options} onChange={onChange} />
      ) : type === "textarea" ? (
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          required
          className="w-full border-0 border-b border-b-tertiary outline-none focus:outline-none focus:border-b-tertiary bg-transparent focus:bg-transparent placeholder:text-xs"
        />
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          min={min}
          max={max}
          placeholder={placeholder}
          onChange={onChange}
          required
          className="w-full border-0 border-b border-b-tertiary outline-none focus:outline-none focus:border-b-tertiary bg-transparent focus:bg-transparent placeholder:text-xs"
        />
      )}
    </div>
  );
};

export default RegularWrapper;