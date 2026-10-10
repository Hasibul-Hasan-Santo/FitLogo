import React from 'react';
import BannerImage from '@/app/logo/banner.png';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="w-full bg-[#0d0f12] py-10 md:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto bg-[#14171d] rounded-2xl p-6 sm:p-10 border border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-8">
        
        <div className="flex-1 space-y-4 text-left">
          <span className="text-xs font-bold tracking-widest text-[#a3e635] uppercase">
            WORKOUT LIBRARY
          </span>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
            TRAIN WITH INTENT. LOG<br className="hidden sm:inline" /> EVERY SET.
          </h1>

          <p className="text-zinc-400 text-sm sm:text-base max-w-xl leading-relaxed">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br className="hidden sm:inline" /> into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <div className="pt-2">
            <a 
              href="#library" 
              className="inline-flex items-center gap-2 bg-[#a3e635] hover:bg-[#8ece28] text-black font-extrabold px-6 py-3 rounded-md transition-all text-sm uppercase tracking-wide scroll-smooth"
            >
              BROWSE WORKOUTS
            </a>
          </div>
        </div>

        <div className="w-full md:w-auto flex justify-center md:justify-end">
          <div className="relative w-full max-w-xs sm:max-w-sm h-64 sm:h-80 rounded-xl overflow-hidden flex items-center justify-center">
            <Image
              src={BannerImage} 
              alt='Gym Companion Banner'
              width={384}
              height={320}
              className="w-full h-full object-contain"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;