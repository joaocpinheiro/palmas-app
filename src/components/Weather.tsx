import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { MapPin, SunMedium } from 'lucide-react'
import Sun from '../../public/hero/01d.svg'
import Image from 'next/image'

const Weather = () => {
  return (
    <section>
      <div className="container  z-50 mx-auto mt-10 h-auto -translate-y-7 md:mt-5 md:hidden lg:mx-32 lg:flex">
        <Card className=" border-slate-950 bg-soft_green-secondary/60 lg:max-w-[500px]">
          <CardHeader>
            <div className="text-md flex -translate-y-2 items-center gap-2 font-semibold text-slate-950 ">
              <MapPin />
              <p>Palmas</p>
            </div>
            <CardTitle className="text-center text-xl leading-7 text-gray-950">
              Que tal aproveitar este próximo fim de semana em Palmas?
            </CardTitle>
            <CardDescription className="mx-auto">
              <Image src={Sun} alt="" width={90} height={90} />
            </CardDescription>
          </CardHeader>
          <CardContent className="flex -translate-y-2 flex-col text-center">
            <h1>Sáb</h1>
            <h1 className="text-6xl font-normal text-slate-950">21ºC</h1>
            <p className="text-md font-semibold">Max.: 31º Min.: 25º</p>
            <div className="mb-3 mt-4 grid grid-cols-[70px_70px] items-center justify-center gap-3 pb-2">
              <div className="flex flex-col items-center space-y-1 rounded-md border border-grey/50 bg-grey/45 p-2 py-3 ">
                <p className="text-sm font-bold leading-none">Sáb</p>
                <Image
                  src={Sun}
                  alt=""
                  width={90}
                  height={90}
                  className="my-2"
                />
                <p className="text-sm font-semibold">19ºC</p>
              </div>
              <div className="flex flex-col items-center space-y-1 rounded-md border border-grey/50 bg-grey/45 p-2 py-3">
                <p className="text-sm font-bold leading-none">Dom</p>
                <Image
                  src={Sun}
                  alt=""
                  width={90}
                  height={90}
                  className="my-2"
                />
                <p className="text-sm font-semibold">19ºC</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default Weather
