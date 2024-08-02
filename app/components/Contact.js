import Addresses from "./Addresses";
import ContactForm from "./ContactForm";
import Footer from "./Footer";

const Contact = () => {
  return (
    <section className="flex flex-col gap-8 relative overflow-y-scroll md:overflow-hidden h-fit md:h-screen">
      <div className="w-full h-fit md:h-[90%] flex flex-col md:flex-row gap-8">
        <Addresses />
        <ContactForm />
      </div>
      <Footer />
    </section>
  );
};

export default Contact;
