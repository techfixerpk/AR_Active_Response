
import React from 'react';
import { motion } from 'framer-motion';
export default function Hero() {
  return (
    <div className='bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24 px-6 text-center'>
      <motion.h1 initial={{y:20, opacity:0}} animate={{y:0, opacity:1}} className='text-5xl md:text-7xl font-black mb-6'>
        Professional Nursing Care <br/> At Your Doorstep
      </motion.h1>
      <p className='text-xl opacity-90 mb-10 max-w-3xl mx-auto'>Serving Rawalpindi & Islamabad with 24/7 ICU Staff, Doctors, and Medical Equipment.</p>
      <button className='bg-white text-blue-600 px-10 py-4 rounded-full font-black text-lg shadow-2xl'>Get Started Now</button>
    </div>
  );
}
