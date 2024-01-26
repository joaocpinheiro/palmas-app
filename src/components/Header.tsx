import Link from 'next/link'
import MobileNav from './MobileNav'
import Nav from './Nav'

export const Header = () => {
  return (
    <header className="fixed  right-0 top-0 z-50 w-full  border border-b-black/30 bg-white py-5 shadow-xl xl:px-10 xl:py-5">
      <div className="container mx-auto">
        <div className="mx-auto">
          <div className="flex items-center justify-between">
            <Link href="/">
              <h1 className="text-2xl font-bold text-black">Palmas Beach</h1>
            </Link>
            <div className="hidden xl:flex">
              <Nav
                containerStyles="flex items-center justify-between group "
                listStyles="flex gap-x-12 text-black "
              />
            </div>
          </div>
        </div>
        {/* mobile nav */}
        <div className="absolute right-8 top-5 xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
