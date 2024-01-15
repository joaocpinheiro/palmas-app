import Link from 'next/link'
import MobileNav from './MobileNav'
import Nav from './Nav'

export const Header = () => {
  return (
    <header className="absolute w-full max-w-[1400px] py-8 xl:py-10">
      <div className="container mx-auto">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <Link href="/">
              <h1 className="text-2xl font-bold text-white">Palmas Beach</h1>
            </Link>
            <div className="hidden xl:flex">
              <Nav
                containerStyles="flex items-center justify-between"
                listStyles="flex gap-x-12 text-white"
              />
            </div>
          </div>
        </div>
        {/* mobile nav */}
        <div className="xl:hidden absolute right-8 top-8">
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
