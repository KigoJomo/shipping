import DiagonalArrow from "./DiagonalArrow";

const ContactForm = () => {
  return (
    <div className="w-full md:w-1/2 h-[60vh] md:h-full md:px-8 mb-28 md:m-0 flex flex-col gap-6">
      <h3>get in touch</h3>
      <form className="w-full h-[90%] flex flex-col justify-between">
        <div className="w-full h-4/5 input-fields bg-tertiary rounded-3xl"></div>
        <button type="submit" className="w-full px-8 py-4 capitalize flex items-center justify-between rounded-full border border-tertiary md:hover:bg-tertiary">
          <p className="text-white">send</p>
          <div className="w-6 aspect-square">
            <DiagonalArrow />
          </div>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
