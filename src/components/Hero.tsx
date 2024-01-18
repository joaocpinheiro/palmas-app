import Image from 'next/image'
import Weather from './Weather'

const Hero = () => {
  return (
    <section className="pt-24 pb-12 xl:py-0 h-[85vh] xl:h-[900px] bg-hero2 bg-cover bg-top bg-no-repeat flex justify-center items-center">
      <Weather />
    </section>
  )
}

export default Hero
