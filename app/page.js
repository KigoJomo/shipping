// page.js (Server Component)
import Header from "./components/Header";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Procedure from "./components/Procedure";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";
import ClientWrapper from "./components/ClientWrapper";

// page.js (Server Component)
export default function Home() {
  return (
    <>
      <ClientWrapper>
        <Header />
      </ClientWrapper>
      <main className="flex flex-col gap-8">
        <Hero />
        <Categories />
        <Procedure />
        <Testimonials />
        <Contact />
      </main>
    </>
  );
}