// page.js (Server Component)
import Header from './components/Header'
import Hero from './components/Hero'
import Categories from './components/Categories'
import Procedure from './components/Procedure'
import Contact from './components/Contact'
import Testimonials from './components/Testimonials'
import ClientWrapper from './components/ClientWrapper'

// page.js (Server Component)
export default function Home() {
  return (
    <>
      <ClientWrapper>
        <Header />
      </ClientWrapper>
      <main className="w-full h-fit flex-shrink-0 overflow-hidden scroll-smooth flex flex-col gap-8 pt-20 md:pt-20">
        <Hero />
        <Categories />
        <Procedure />
        <Testimonials />
        <Contact />
      </main>
    </>
  )
}
