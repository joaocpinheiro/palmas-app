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
    <section className="py-12 xl:pt-0 xl:pb-24 ">
      <div className="container mx-auto flex flex-col md:flex-row gap-4 lg:gap-10 items-center justify-center">
        <Card className="hover:cursor-pointer w-max-[500px] bg-soft_green-secondary border-grey-secondary rounded-xl shadow-xl">
          <CardHeader className="p-0 rounded-xl">
            <Image
              src="/recommendation/hotel-1.png"
              alt=""
              width={500}
              height={500}
              quality={80}
              className="rounded-xl rounded-b-none w-full"
            />
            <CardTitle className="container text-ellipsis h3">
              Palmas Beach Apto
            </CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent className="ml-2 p-2 space-y-1 text-black flex gap-2 text-[13px] xl:text-md font-normal flex-col">
            <div className="flex gap-1 items-center">
              <p className="mr-2">8.8 - Excelente</p>
              <MapPin width={18} height={20} />
              <p className="truncate">Governador C. Ramos - Palmas</p>
            </div>
            <div className="mt-5 flex items-center gap-2 text-md font-bold">
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
        <Card className="hover:cursor-pointer w-max-[500px] bg-soft_green-secondary border-grey-secondary rounded-xl shadow-xl">
          <CardHeader className="p-0 rounded-xl">
            <Image
              src="/recommendation/hotel-1.png"
              alt=""
              width={500}
              height={500}
              quality={80}
              className="rounded-xl rounded-b-none w-full"
            />
            <CardTitle className="container text-ellipsis h3">
              Palmas Beach Apto
            </CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent className="ml-0.5 p-1 space-y-1 text-black flex gap-2 text-[13px] xl:text-lg font-normal flex-col">
            <div className="flex gap-1 items-center">
              <p className="mr-2">8.8 - Excelente</p>
              <MapPin width={18} height={20} />
              <p className="truncate">Governador C. Ramos - Palmas</p>
            </div>
            <div className="mt-5 flex items-center gap-2 text-md font-bold">
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
