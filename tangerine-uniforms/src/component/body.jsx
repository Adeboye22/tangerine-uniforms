import React,{useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import Uni1 from '../assets/Uni_1.jpg';
import Uni2 from '../assets/Uni_2.jpg';
import Uni3 from '../assets/Uni_3.jpg';
import Uni4 from '../assets/Uni_4.jpg';
import Uni5 from '../assets/Uni_5.jpg';
import Uni6 from '../assets/Uni_6.jpg';
import Uni7 from '../assets/Uni_7.jpg';
import Uni8 from '../assets/Uni_8.jpg';
import Uni10 from '../assets/Uni_10.jpg';
import Rev5 from '../assets/Rev5.jpg';
import Rev6 from '../assets/Rev6.jpg';
import Rev8 from '../assets/Rev8.jpg';

const Body = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  // this function sends users to whatsapp
  const WhatsApp = () => {
    return(
      window.open("https://wa.link/f2qx19")
    )
  }

  return (
    <div data-aos='fade-up' className='sm:p-6 sm:text-lg text-gray-950 p-12 text-xl flex flex-col gap-8'>
        <div>
            <p>We are not just regular uniform makers. We bear the interest of your brand in our minds, thereby creating visually appealing uniforms increasing patronage and sales.</p> 
        </div>
        <div>
          We have worked with over <span className='text-orange-700 font-bold'>100 businesses</span> local and international improving their brand identity and recognition. We take pride in our quality services, and premium delivery method. Reviews from our clients show that our customized uniforms and outfits have helped increase <span className='text-orange-700'>sales</span> by <span className='text-orange-700 font-bold'>15%</span>.
        </div>
        <div>
          <h1 className='font-bold'>Our Services</h1>
          <p>We customize uniforms for various sectors. These include:</p>
          <ul className='list-disc p-12'>
            <li>Work wears</li>
            <li>School Uniforms</li>
            <li>Catering uniforms</li>
            <li>Branded t-shirts and polos</li>
            <li>Sports wear</li>
            <li>Customized coveralls for engineering purposes</li>
            <li>Cleaning wears, etc</li>
          </ul>
        </div>
        {/* images */}
        <div data-aos='zoom-in' className='flex flex-col gap-12 place-items-center pb-14'>
          <div className='flex flex-row gap-4'>
            <img src={Uni2} alt="" className='sm:h-32 sm:w-24 h-80 border-2 border-orange-700 rounded'/>
            <img src={Uni3} alt="" className='sm:h-32 sm:w-24 h-80 border-2 border-orange-700 rounded'/>
            <img src={Uni4} alt="" className='sm:h-32 sm:w-24 h-80 border-2 border-orange-700 rounded'/>
          </div>
          <div className='flex flex-row gap-4'>
            <img src={Uni5} alt="" className='sm:h-32 sm:w-24 h-80 border-2 border-orange-700 rounded'/>
            <img src={Uni6} alt="" className='sm:h-32 sm:w-24 h-80 border-2 border-orange-700 rounded'/>
            <img src={Uni7} alt="" className='sm:h-32 sm:w-24 h-80 border-2 border-orange-700 rounded'/>
          </div>
          <div className='flex flex-row gap-4'>
            <img src={Uni8} alt="" className='sm:h-32 sm:w-24 h-80 border-2 border-orange-700 rounded'/>
            <img src={Uni1} alt="" className='sm:h-32 sm:w-24 h-80 border-2 border-orange-700 rounded'/>
            <img src={Uni10} alt="" className='sm:h-32 sm:w-24 h-80 border-2 border-orange-700 rounded'/>
          </div>
        </div>
        {/* reviews */}
        <div data-aos='fade-up'>
          <h1 className='text-gray-950 font-bold'>Reviews from our clients</h1>
          <p>See what our clients have to say about our services:</p>
          <div className='pt-8'>
            <div className='sm:flex-col sm:gap-12 flex flex-col'>
              <img src={Rev5} alt="" />
              <img src={Rev6} alt="" />
              <img src={Rev8} alt="" />
            </div>
            <div></div>
          </div>
        </div>
        {/* hook */}
        <div className='flex flex-col gap-8'>
          <p>If <span className='text-orange-700'>quality services</span>, and a company that understands your <span className='text-orange-700'>goal</span>, <span className='text-orange-700'>vision</span> is what you desire? Then you are at the right place. Let us work together towards bringing your brand alive, owning your position in the competitive marketspace and increase your <span className='text-orange-700'>sales/patronage</span>.
          </p>
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

export default Body
