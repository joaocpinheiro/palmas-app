import Footer from '@/components/Footer'
import { Header } from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Featured from '@/components/Featured'
import ApartmentsHero from '@/components/ApartmentsHero'

export default function Home() {
  return (
    <main className="max-w-[1640px] mx-auto bg-white overflow-hidden">
      <Header />
      <Hero />
      <Featured />
      <ApartmentsHero />
      <About />
      <Footer />
    </main>
  )
}
