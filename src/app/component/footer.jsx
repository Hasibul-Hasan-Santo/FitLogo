import React from 'react';
import logo from '@/app/logo/logo.png';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full bg-[#0b0e14] border-t border-slate-800/60 py-6 px-4 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        
        
        <div className="flex items-center gap-2">
          <Image 
            src={logo} 
            alt="FitLog Logo" 
            width={24} 
            height={24} 
            className="w-6 h-6 object-contain" 
          />
          <span className="text-white font-black tracking-wider text-base uppercase">
            FITLOG
          </span>
        </div>

        
        <p className="text-slate-400 text-xs font-medium tracking-wide text-center sm:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>

      </div>
    </footer>
  );
}