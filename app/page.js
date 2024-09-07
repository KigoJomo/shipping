// page.js (Server Component)
import Header from './components/Header'
import Hero from './components/Hero'
import Categories from './components/Categories'
import Procedure from './components/Procedure'
import Contact from './components/Contact'
import Testimonials from './components/Testimonials'
import ClientWrapper from './components/ClientWrapper'
import Head from 'next/head'

// page.js (Server Component)
export default function Home() {
  return (
    <>
      <Head>
        <title>Consol Cargo</title>
        <meta
          name="description"
          content="Consol Cargo offers reliable and efficient cargo services tailored to meet your needs across Kenya and beyond."
        />
      </Head>
      <ClientWrapper>
        <Header />
      </ClientWrapper>
      <main className="w-full h-fit flex-shrink-0 overflow-hidden flex flex-col gap-8">
        <Hero />
        <Categories />
        <Procedure />
        <Testimonials />
        <Contact />
      </main>
    </>
  )
}
