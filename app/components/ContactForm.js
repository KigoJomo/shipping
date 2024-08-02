"use client";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FieldWrapper from "./FieldWrapper";
import DiagonalArrow from "./DiagonalArrow";

const ContactForm = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    try {
      const response = await fetch(event.target.action, {
        method: event.target.method,
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
      if (response.ok) {
        toast.success(
          "Thank you for your message! We'll get back to you soon.",
          {
            theme: "dark",
          }
        );
        event.target.reset();
      } else {
        console.error(error);
        console.table(formData);
        toast.error("Something went wrong. Please try again.", {
          theme: "dark",
        });
      }
    } catch (error) {
      toast.error(
        "There was an error sending your message. Please try again.",
        {
          theme: "dark",
        }
      );
    }
  };

  return (
    <div className="w-full md:w-1/2 h-[60vh] md:h-full md:px-8 mb-36 md:m-0 flex flex-col gap-6">
      <ToastContainer />
      <h3>get in touch</h3>
      <form
        action="https://public.herotofu.com/v1/2c5f7470-50e9-11ef-8946-916ba40ee922"
        method="post"
        className="w-full h-[90%] flex flex-col justify-between"
        onSubmit={handleSubmit}
      >
        <div className="w-full h-4/5 input-fields bg-primary rounded-3xl flex flex-col gap-2 px-4 py-4 overflow-y-scroll scrollbar-hidden border border-tertiary">
          <div className="w-full flex items-center gap-2">
            <h3 className="text-tertiary">hello</h3>
            <svg
              width="28"
              height="28"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M50 100C77.6143 100 100 77.6142 100 50C100 22.3858 77.6143 0 50 0C22.3857 0 0 22.3858 0 50C0 77.6142 22.3857 100 50 100ZM33.2804 36C33.2804 38.2091 31.4896 40 29.2804 40C27.0713 40 25.2804 38.2091 25.2804 36C25.2804 33.7909 27.0713 32 29.2804 32C31.4896 32 33.2804 33.7909 33.2804 36ZM74.2804 36C74.2804 38.2091 72.4896 40 70.2804 40C68.0713 40 66.2804 38.2091 66.2804 36C66.2804 33.7909 68.0713 32 70.2804 32C72.4896 32 74.2804 33.7909 74.2804 36ZM75.7316 66.7316C76.412 65.8195 76.1388 64.5385 75.1862 63.9163C74.2334 63.2942 72.9625 63.5674 72.274 64.4733C69.8375 67.6796 66.7524 70.3471 63.2118 72.297C59.0684 74.5789 54.4279 75.808 49.6981 75.8764C44.9684 75.9448 40.2943 74.8504 36.0865 72.6894C32.491 70.8427 29.3301 68.2655 26.8019 65.1311C26.0875 64.2455 24.8092 64.0091 23.8749 64.6586C22.9406 65.308 22.7046 66.5965 23.411 67.4884C26.33 71.1739 30.0079 74.1997 34.2041 76.3548C39.0121 78.8242 44.3531 80.0747 49.7577 79.9966C55.1624 79.9184 60.465 78.5138 65.1996 75.9064C69.3315 73.6309 72.9205 70.5 75.7316 66.7316Z"
                fill="#8b969c"
              />
            </svg>
          </div>
          <FieldWrapper name={"name"} type={"text"} label={"My name is"} />
          <FieldWrapper
            name={"country-name"}
            type={"text"}
            label={"I'm from"}
          />
          <FieldWrapper
            name={"message"}
            type={"textarea"}
            label={"I would like to enquire about"}
          />
          <FieldWrapper
            name={"email"}
            type={"email"}
            label={
              "For a response regarding my enquiry, you can contact me via this email: "
            }
          />
        </div>
        <button
          type="submit"
          className="w-full px-8 py-4 capitalize flex items-center justify-between rounded-full border border-tertiary md:hover:bg-secondary md:focus:bg-secondary md:focus:outline-none"
        >
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
