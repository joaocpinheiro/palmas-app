'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'
import Socials from './Socials'

const Footer = () => {
  return (
    <footer className="bg-soft_green-secondary relative pt-12 xl:pt-0">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0 }}
        >
          <div className="flex flex-col xl:flex-row bg-white p-8 rounded-xl min-h-[394px] xl:p10 xl:-translate-y-32 xl:gap-x-12">
            <div className="xl:w-[470px] mb-6 xl:mb-0">
              <Link href="/">
                <Image
                  src="/footer/logo.svg"
                  width={79}
                  height={24}
                  alt=""
                  className="mb-2"
                />
              </Link>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
                reiciendis quasi et porro ducimus facilis, earum eos in
                dignissimos nesciunt nihil molestias laboriosam,{' '}
              </p>
            </div>
            <div className="flex xl:gap-x-16 xl:ml-32 ">
              <div className="flex-1">
                <h4 className="h4 mb-6">Contact Us</h4>
                <ul className="flex flex-col gap-y-6 text-lg">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/">Find Hotel</Link>
                  </li>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <h4 className="h4 mb-6">Contact Us</h4>
                <ul className="flex flex-col gap-y-6 text-lg">
                  <li>48 9999 9999</li>
                  <li>info@hotel.com</li>
                  <li>hotel.com</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
        <div className="py-12 flex flex-col xl:flex-row xl:justify-between">
          <p className="text-black font-semibold text-center mb-4 xl:mb-0">
            Copyright &copy; 2024. All rights reserved
          </p>
          <Socials containerStyles="flex gap-x-4 text-black mx-auto xl:mx-0" />
        </div>
      </div>
    </footer>
  )
}

export default Footer
