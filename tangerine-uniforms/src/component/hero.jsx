import React from 'react';
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className='bg-hero h-screen bg-cover'>
      <div className='bg-white h-screen opacity-90 flex flex-col gap-4 place-items-center p-60'>
        <h1 className='text-lg text-orange-700 font-bold cursor-pointer'>Tangerine Uniforms </h1>
        <motion.h1 className='text-4xl text-gray-700 font-black text-center cursor-pointer'
        initial={{}}
        animate={{}}
        transition={{}}>We create customized uniforms for businesses, brands, organizations.</motion.h1>
        <div className='flex flex-row gap-8 px-12 text-green-700 self-center'>
          <p className='cursor-pointer'>School Uniforms</p>
          <p className='cursor-pointer'> Work Place Outfits</p>
          <p className='cursor-pointer'>Catering</p>
          <p className='cursor-pointer'>Sport Wears</p>
        </div>
        <button className='bg-orange-700 text-white p-4 self-center rounded'>Contact us</button>
      </div>
    </div>
  )
}

export default Hero
