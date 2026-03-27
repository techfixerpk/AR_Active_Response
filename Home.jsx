
import React from 'react';
import Hero from './Hero';
import Services from './Services';
import Equipments from './Equipments';
import WhatsAppFloat from './WhatsAppFloat';
import Navbar from './Navbar';

export default function Home() {
  return (
    <div className='min-h-screen bg-slate-50'>
      <Navbar />
      <Hero />
      <div className='py-12 px-6'>
        <h2 className='text-4xl font-black text-center mb-12'>OUR PREMIUM SERVICES</h2>
        <Services />
      </div>
      <div className='py-12 px-6 bg-white'>
        <h2 className='text-4xl font-black text-center mb-12'>MEDICAL EQUIPMENTS</h2>
        <Equipments />
      </div>
      <WhatsAppFloat />
      <footer className='bg-slate-900 text-white p-12 text-center'>
        <h2 className='text-2xl font-bold'>AR (Active Response)</h2>
        <p className='mt-4'>Founder: Awais Babar | 0347-2241304</p>
        <p className='text-sm opacity-50'>Rawalpindi & Islamabad - 24/7 Delivery</p>
      </footer>
    </div>
  );
}
