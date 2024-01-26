import Weather from './Weather'

const Hero = () => {
  return (
    <section className="flex h-[85vh] items-center justify-center bg-hero2 bg-cover bg-top bg-no-repeat pb-12 pt-24 md:h-screen xl:h-[900px] xl:py-0">
      <Weather />
    </section>
  )
}

export default Hero
