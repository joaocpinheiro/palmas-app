'use client'
import Image from 'next/image'
import { fadeIn } from '../../variants'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Button } from './ui/button'
import { useMediaQuery } from 'react-responsive'

const About = () => {
  return (
    <section className="bg-soft_green/20 py-12 xl:pt-0 xl:pb-40">
      <div className="container mx-auto">
        <div className="items-center flex flex-col xl:flex-row xl:mx-32 lg:basis-1/2 lg:gap-20">
          <motion.div
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: true, amount: 0.4 }}
            className="flex-1 relative"
          >
            <Image
              src={'/about/About.png'}
              width={526}
              height={758}
              quality={100}
              priority={true}
              alt=""
            />
          </motion.div>
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: true, amount: 0.4 }}
            className="lg:basis-2/5 xl:max-w-[550px]"
          >
            <h2 className="h2 mb-[38px]mt-20">About Palmas</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore,
              ab doloremque at eos aperiam optio odit deserunt maiores quis,
              quod, ut eligendi soluta! Rerum sequi voluptas{' '}
            </p>
            <div className="my-5 xl:my-10 min-h-[35px]">
              stats
              <p className="mb-10">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Excepturi dolor dicta quaerat unde dignissimos magnam, incidunt
                non laudantium dolorem quia aspernatur! Unde maiores{' '}
              </p>
              <Button variant="accent">Veja mais</Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
