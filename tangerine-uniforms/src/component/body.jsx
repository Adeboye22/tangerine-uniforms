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
            <p>Make a lasting impression. Professional, high-quality branded uniforms from<span className='text-orange-700'>Tangerine Uniforms</span> are more than just clothing. They are a walking billboard that promotes your brand identity, fosters team spirit, and builds trust with your clients. We don't do one-size-fits-all.'</p> 
        </div>
        <div>
          <p>
            Our custom uniform design process ensures your uniforms reflect your unique brand and culture. Whether you need uniforms/work wears for your organization staffs, school students, or catering staffs, we will create uniforms that are both <span className='text-orange-700'>stylish</span> and <span className='text-orange-700'>functional</span>. We use only the finest materials to craft uniformms that are durable, comfortable and built to last. Your <span className='text-orange-700'>team</span> will look sharp and feel confident all day long.
          </p>
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
            <div className='sm:flex-col flex flex-row place-content-center'>
              <img src={Rev5} alt="" className='h-80 w-64'/>
              <img src={Rev6} alt="" className='h-80 w-64'/>
              <img src={Rev8} alt="" className='h-80 w-64'/>
            </div>
            <div></div>
          </div>
        </div>
        {/* hook */}
        <div className='flex flex-col gap-8'>
          <p>
            Ready to take your brand to the next level? Contact us today for consultation!
            Let's discuss how our branded uniforms can benefit your business.
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
