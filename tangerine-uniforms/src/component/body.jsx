import React,{useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Uni1 from '../assets/Uni_1.jpg';
import Uni2 from '../assets/Uni_2.jpg';
import Uni3 from '../assets/Uni_3.jpg';
import Uni4 from '../assets/Uni_4.jpg';
import Uni5 from '../assets/Uni_5.jpg';
import Uni6 from '../assets/Uni_6.jpg';
import Uni7 from '../assets/Uni_7.jpg';
import Uni8 from '../assets/Uni_8.jpg';
import Uni10 from '../assets/Uni_10.jpg'

const Body = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <div data-aos='fade-up' className='text-gray-950 p-12 text-xl flex flex-col gap-8'>
        <div>
            <p>We are not just regular uniform makers. We bear the interest of your brand in our minds, thereby creating visually appealing uniforms increasing patronage and sales.</p> 
        </div>
        <div>
          We have worked with over 100 businesses local and internationally improving their brand identity and recognition. We take pride in our quality services, and premium delivery method. Reviews from our clients show that our customized uniforms and outfits have helped increase sales by 15%.
        </div>
        <div>
          <h1>Our Services</h1>
          <p>We customize uniforms for various sectors. These include:</p>
          <ul className='list-disc p-12'>
            <li>School Uniforms</li>
            <li>Workplace Outfits</li>
            <li>Sport Wears</li>
            <li>Chef Uniforms</li>
            <li>Catering uniforms</li>
            <li>Customized coveralls for engineering purposes</li>
            <li>Cleaning wears, etc</li>
          </ul>
        </div>
        {/* images */}
        <div data-aos='zoom-in' className='flex flex-col gap-12 place-items-center pb-14'>
          <div className='flex flex-row gap-4'>
            <img src={Uni2} alt="" className='h-80 border-2 border-orange-700 rounded'/>
            <img src={Uni3} alt="" className='h-80 border-2 border-orange-700 rounded'/>
            <img src={Uni4} alt="" className='h-80 border-2 border-orange-700 rounded'/>
          </div>
          <div className='flex flex-row gap-4'>
            <img src={Uni5} alt="" className='h-80 border-2 border-orange-700 rounded'/>
            <img src={Uni6} alt="" className='h-80 border-2 border-orange-700 rounded'/>
            <img src={Uni7} alt="" className='h-80 border-2 border-orange-700 rounded'/>
          </div>
          <div className='flex flex-row gap-4'>
            <img src={Uni8} alt="" className='h-80 border-2 border-orange-700 rounded'/>
            <img src={Uni1} alt="" className='h-80 border-2 border-orange-700 rounded'/>
            <img src={Uni10} alt="" className='h-80 border-2 border-orange-700 rounded'/>
          </div>
        </div>
        {/* hook */}
        <div className='flex flex-col gap-8'>
          <p>If quality services, and a company that understands your goal, vision is what you desire? Then you are at the right place. Let us work together towards bringing your brand alive, owning your position in the competitive marketspace and increase your sales/patronage.
          </p>
          <button className='bg-orange-700 text-white p-4 rounded self-center'>Contact Us</button>
        </div>
    </div>
  )
}

export default Body
