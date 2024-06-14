import React from 'react';
import { motion } from 'framer-motion'

const Hero = () => {
    // this function sends users to whatsapp
    const WhatsApp = () => {
      return(
        window.open("https://wa.link/f2qx19")
      )
    }

  return (
    <div className='sm:h-96 bg-hero h-screen bg-cover'>
      <div className='sm:px-0 sm:py-24 bg-white h-screen opacity-90 flex flex-col gap-4 place-items-center p-60'>
        <h1 className='text-lg text-orange-700 font-bold cursor-pointer'>Tangerine Uniforms </h1>
        <motion.h1 className='sm:text-lg text-4xl text-gray-700 font-black text-center cursor-pointer'
        initial={{opacity:0}}
        animate={{opacity:100}}
        transition={{
          duration:0.5,
          delay:0.5
        }}
          whileHover={{scale:0.9,
            opacity:0.4
          }}>We create customized uniforms for businesses, brands, organizations.</motion.h1>
        <div className='sm:justify-between sm:px-4 sm:text-xs sm:pb-4 flex flex-row gap-8 px-12 text-green-700 self-center'>
          <p className='sm:text-center cursor-pointer'>School Uniforms</p>
          <p className='sm:text-center cursor-pointer'> Work Place Outfits</p>
          <p className='sm:text-center cursor-pointer'>Catering wears</p>
          <p className='sm:text-center cursor-pointer'>Sport Wears</p>
        </div>
        <motion.button className='sm:text-lg sm:p-2 bg-orange-700 text-white p-4 self-center rounded'
        transition={{
          duration:0.5,
          delay:0.5
        }}
        whileHover={{
          scale:1.5,
        }}
        onClick={WhatsApp}>
          Contact us
        </motion.button>
      </div>
    </div>
  )
}

export default Hero
