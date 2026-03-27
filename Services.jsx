
import React from 'react';
export const services = [
  { id: 1, title: '24/7 ICU Trained Staff', icon: 'HeartPulse' },
  { id: 2, title: 'Doctor At Home Visit', icon: 'User' },
  { id: 3, title: 'IV Medication & Drips', icon: 'Syringe' },
  { id: 4, title: 'Oxygen Therapy Service', icon: 'Wind' },
  { id: 5, title: 'Post Operative Care', icon: 'Home' },
  { id: 6, title: 'Tracheostomy Care', icon: 'Activity' },
  { id: 7, title: 'Gastric Lavage & Feeding', icon: 'Stethoscope' },
  { id: 8, title: 'Bed Sore Management', icon: 'ShieldAlert' },
  { id: 9, title: 'Lab Test Sampling @ Home', icon: 'FlaskConical' },
  { id: 10, title: 'Ambulance Service 24/7', icon: 'Truck' },
  { id: 11, title: 'Elderly Care Nursing', icon: 'Users' },
  { id: 12, title: 'Physiotherapy Sessions', icon: 'Accessibility' },
  { id: 13, title: 'ECG At Home', icon: 'Pulse' },
  { id: 14, title: 'Catheterization Service', icon: 'Pipette' },
  { id: 15, title: 'Wound Dressing', icon: 'Bandage' },
  { id: 16, title: 'Vaccination Service', icon: 'Syringe' },
  { id: 17, title: 'Palliative Care', icon: 'Heart' },
  { id: 18, title: 'Baby Care / Nanny', icon: 'Baby' },
  { id: 19, title: 'Nebulization Service', icon: 'Wind' },
  { id: 20, title: 'Blood Pressure Monitoring', icon: 'Timer' }
];
export default function Services() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-4 p-4'>
      {services.map(s => (
        <div key={s.id} className='p-6 bg-white shadow-xl rounded-xl border-t-4 border-primary hover:scale-105 transition'>
          <h3 className='font-bold text-lg'>{s.title}</h3>
          <button className='mt-4 w-full bg-primary text-white py-2 rounded font-bold'>Book Service</button>
        </div>
      ))}
    </div>
  );
}
