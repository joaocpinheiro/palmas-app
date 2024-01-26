'use client'
import Link from 'next/link'
import Nav from './Nav'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { Menu } from 'lucide-react'
import Image from 'next/image'
import Socials from './Socials'

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu size={36} className="text-black" />
      </SheetTrigger>
      <SheetContent side="left">
        <div className="flex h-full flex-col justify-between p-12 md:overflow-y-scroll lg:overflow-hidden">
          <Link href="/" className="mb-24 text-violet-400">
            <Image
              src="/footer/logo.svg"
              width={90}
              height={46}
              alt=""
              priority
            />
          </Link>
          <Nav
            containerStyles="text-black"
            listStyles="flex flex-col gap-y-6 text-xl"
          />
          <Socials containerStyles="flex gap-x-4 text-violet-400 " />
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
