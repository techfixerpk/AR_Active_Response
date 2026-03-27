
import React from 'react';
export const equipments = [
  { id: 1, name: 'Oxygen Concentrator', price: 'Rs. 5000/Month', type: 'Rent' },
  { id: 2, name: 'Bipap Machine', price: 'Rs. 7000/Month', type: 'Rent' },
  { id: 3, name: 'Patient Bed', price: 'Rs. 15000', type: 'Sale' },
  { id: 4, name: 'Wheelchair', price: 'Rs. 8000', type: 'Sale' }
];
export default function Equipments() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
      {equipments.map(e => (
        <div key={e.id} className='bg-white p-6 rounded-2xl shadow-lg border'>
          <span className='bg-green-100 text-green-800 text-xs px-2 py-1 rounded'>{e.type}</span>
          <h3 className='text-xl font-bold mt-2'>{e.name}</h3>
          <p className='text-primary font-bold'>{e.price}</p>
          <button className='w-full mt-4 bg-slate-900 text-white py-2 rounded-lg'>Check Availability</button>
        </div>
      ))}
    </div>
  );
}
