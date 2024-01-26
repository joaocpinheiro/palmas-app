'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

const Featured = () => {
  return (
    <motion.section
      variants={fadeIn('right', 0.2)}
      initial="hidden"
      whileInView={'show'}
      viewport={{ once: false, amount: 0.2 }}
      className="relative  z-0 ml-auto max-w-[1000px] rounded-bl-[30px] rounded-tl-[30px] bg-soft_green-secondary px-[80px] py-[50px] lg:-top-[80px] lg:mt-0 xl:-top-[80px] xl:h-[240px]"
    >
      <div className="flex flex-col items-center gap-x-[30px]  text-center xl:flex-row xl:text-left">
        <Image
          className="xl:mr-[50px]"
          src="/featured/icon.svg"
          width={86}
          height={91}
          alt=""
        />
        <h2 className="h2 flex-1 leading-relaxed text-soft_green">
          Book an awesome room in less than 1 minute.
        </h2>
      </div>
    </motion.section>
  )
}

export default Featured
