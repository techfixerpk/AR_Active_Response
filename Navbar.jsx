
import React from 'react';
import { Phone, Menu } from 'lucide-react';
export default function Navbar() {
  return (
    <nav className='bg-white shadow-lg sticky top-0 z-50 py-4 px-8 flex justify-between items-center'>
      <div className='text-2xl font-black text-primary'>AR (Active Response)</div>
      <div className='hidden md:flex gap-8 font-bold text-gray-700'>
        <a href='#'>Home</a><a href='#services'>Services</a><a href='#equipments'>Equipments</a>
      </div>
      <a href='tel:03472241304' className='bg-primary text-white px-6 py-2 rounded-full font-bold flex items-center gap-2'>
        <Phone size={18}/> Emergency
      </a>
    </nav>
  );
}
