import SelectInput from "./SelectInput";

const RegularWrapper = ({ name, type, label, options, onChange, placeholder }) => {
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
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          required
          className="w-full border-0 border-b border-b-tertiary outline-none focus:outline-none focus:border-b-tertiary bg-transparent focus:bg-transparent placeholder:text-xs"
        />
      )}
    </div>
  );
};

export default RegularWrapper;
