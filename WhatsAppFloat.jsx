
import React from 'react';
import { MessageCircle } from 'lucide-react';
export default function WhatsAppFloat() {
  return (
    <a href='https://wa.me/923472241304' target='_blank' className='fixed bottom-8 right-8 bg-green-500 text-white p-5 rounded-full shadow-2xl hover:scale-110 transition-all z-50'>
      <MessageCircle size={32} />
    </a>
  );
}
