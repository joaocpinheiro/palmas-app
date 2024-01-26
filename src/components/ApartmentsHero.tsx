import Image from 'next/image'
import React from 'react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { MapPin } from 'lucide-react'

const ApartmentsHero = () => {
  return (
    <section className="py-12 xl:pb-24 xl:pt-0 ">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4 md:flex-row lg:gap-10">
        <Card className="w-max-[500px] rounded-xl border-grey-secondary bg-soft_green-secondary shadow-xl hover:cursor-pointer">
          <CardHeader className="rounded-xl p-0">
            <Image
              src="/recommendation/hotel-1.png"
              alt=""
              width={500}
              height={500}
              quality={80}
              className="w-full rounded-xl rounded-b-none"
            />
            <CardTitle className="h3 container text-ellipsis">
              Palmas Beach Apto
            </CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent className="xl:text-md ml-2 flex flex-col gap-2 space-y-1 p-2 text-[13px] font-normal text-black">
            <div className="flex items-center gap-1">
              <p className="mr-2">8.8 - Excelente</p>
              <MapPin width={18} height={20} />
              <p className="truncate">Governador C. Ramos - Palmas</p>
            </div>
            <div className="text-md mt-5 flex items-center gap-2 font-bold">
              <Image
                src="/recommendation/beach.png"
                alt=""
                width={24}
                height={24}
              />
              <p>Próximo a praia</p>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button variant="accent">Veja mais</Button>
          </CardFooter>
        </Card>
        <Card className="w-max-[500px] rounded-xl border-grey-secondary bg-soft_green-secondary shadow-xl hover:cursor-pointer">
          <CardHeader className="rounded-xl p-0">
            <Image
              src="/recommendation/hotel-1.png"
              alt=""
              width={500}
              height={500}
              quality={80}
              className="w-full rounded-xl rounded-b-none"
            />
            <CardTitle className="h3 container text-ellipsis">
              Palmas Beach Apto
            </CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent className="ml-0.5 flex flex-col gap-2 space-y-1 p-1 text-[13px] font-normal text-black xl:text-lg">
            <div className="flex items-center gap-1">
              <p className="mr-2">8.8 - Excelente</p>
              <MapPin width={18} height={20} />
              <p className="truncate">Governador C. Ramos - Palmas</p>
            </div>
            <div className="text-md mt-5 flex items-center gap-2 font-bold">
              <Image
                src="/recommendation/beach.png"
                alt=""
                width={24}
                height={24}
              />
              <p>Próximo a praia</p>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button variant="accent">Veja mais</Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}

export default ApartmentsHero
