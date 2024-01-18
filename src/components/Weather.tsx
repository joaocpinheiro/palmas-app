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
      <div className="container lg:mx-32 mx-auto -translate-y-7">
        <Card className="lg:max-w-[500px] min-w-[300px] bg-soft_green-secondary/60 border-slate-950">
          <CardHeader>
            <div className="flex items-center text-slate-950 gap-2 -translate-y-2 text-md font-semibold">
              <MapPin />
              <p>Palmas</p>
            </div>
            <CardTitle className="text-xl text-center text-gray-950 leading-7">
              Que tal aproveitar este próximo fim de semana em Palmas?
            </CardTitle>
            <CardDescription className="mx-auto">
              <Image src={Sun} alt="" width={90} height={90} />
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col text-center -translate-y-2">
            <h1>Sáb</h1>
            <h1 className="text-6xl font-normal text-slate-950">21ºC</h1>
            <p className="text-md font-semibold">Max.: 31º Min.: 25º</p>
            <div className="mb-3 grid grid-cols-[70px_70px] gap-3 mt-4 items-center justify-center pb-2">
              <div className="space-y-1 border border-grey/50 rounded-md p-2 py-3 bg-grey/45 flex flex-col items-center ">
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
              <div className="space-y-1 border border-grey/50 rounded-md p-2 py-3 bg-grey/45 flex flex-col items-center">
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
