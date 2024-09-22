import Addresses from "./Addresses";
import ContactForm from "./ContactForm";
import Footer from "./Footer";

const Contact = () => {
  return (
    <section className="bg flex flex-col items-center gap-8 relative overflow-y-scroll md:overflow-hidden h-fit">

      <div className="w-full h-fit flex flex-col md:flex-row gap-8">
        <Addresses />
        <ContactForm />
      </div>

      <Footer />
    </section>
  );
};

export default Contact;
