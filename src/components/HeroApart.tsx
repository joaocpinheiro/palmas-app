import Image from 'next/image'

const HeroApart = () => {
  return (
    <section className="mx-auto max-w-[1280px]">
      <div className="mt-16 ">
        <h1 className="mt-2 px-3 py-4 font-lustria text-2xl font-bold">
          Apartamento Palmas 1
        </h1>
      </div>
      <div className="ml-0 grid  grid-cols-12 grid-rows-6 gap-2">
        <div className="col-span-6 row-span-6 flex items-end justify-center">
          <Image
            src="/assets/ap1/Frontap1.jpeg"
            width={750}
            height={750}
            alt=""
            className="rounded-l-lg  rounded-tl-lg"
          />
        </div>
        <div className="col-span-3 row-span-3">
          <Image
            src="/assets/ap1/Frontap1.jpeg"
            width={320}
            height={320}
            alt=""
            className=""
          />
        </div>
        <div className="col-span-3 row-span-3  ">
          <Image
            src="/assets/ap1/Frontap1.jpeg"
            width={320}
            height={320}
            alt=""
            className=""
          />
        </div>
        <div className="col-span-3 row-span-3  ">
          <Image
            src="/assets/ap1/Frontap1.jpeg"
            width={320}
            height={320}
            alt=""
            className=""
          />
        </div>
        <div className="col-span-3 row-span-3  ">
          <Image
            src="/assets/ap1/Frontap1.jpeg"
            width={320}
            height={320}
            alt=""
            className=""
          />
        </div>
      </div>
    </section>
  )
}

export default HeroApart
