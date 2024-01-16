import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return <footer className="bg-soft_green-secondary relative pt-12 xl:pt-0">
    <div className="container mx-auto">
      <div>
        <div>
          <div className="xl:w-[470px] mb-6 xl:mb-0">
            <Link href='/'>
              <Image
              src='/footer/logo.svg'
              width={80}
              height={36}
              alt=""
              className="mb-2" />
            </Link>
          </div>
          <div>
            <div className="flex-1">
              <h4>Navigation</h4>
              <ul className="flex flex-col gap-y-6 text-lg">
                <li>
                  <Link href='/'>Home</Link>
                </li>
                <li>
                  <Link href='/'>Find Hotel</Link>
                </li>
                <li>
                  <Link href='/'>Home</Link>
                </li>
                <li>
                  <Link href='/'>Home</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
}

export default Footer
