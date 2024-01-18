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
      className="bg-soft_green-secondary xl:h-[240px] max-w-[1000px] ml-auto lg:-top-[120px] relative rounded-tl-[30px] rounded-bl-[30px] px-[80px] py-[50px]"
    >
      <div className="flex flex-col xl:flex-row items-center  gap-x-[30px] text-center xl:text-left">
        <Image
          className="xl:mr-[50px]"
          src="/featured/icon.svg"
          width={86}
          height={91}
          alt=""
        />
        <h2 className="h2 flex-1 text-soft_green leading-relaxed">
          Book an awesome room in less than 1 minute.
        </h2>
      </div>
    </motion.section>
  )
}

export default Featured
