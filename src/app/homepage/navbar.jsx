'use client';


import Image from 'next/image';
import Link from 'next/link';


  return (
    <header className="w-full bg-[#0d0f12] text-white px-4 sm:px-6 py-3 border-b border-zinc-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex flex-wrap sm:flex-nowrap items-center justify-between gap-4">
        
        
        <Link href="/" className="flex items-center gap-2 sm:gap-3">
          <Image
            src="/logo/logo.png" 
            alt="FITLOG Logo" 
            width={28} 
            height={28} 
            className="w-6 h-6 sm:w-7 sm:h-7 object-contain"
          />
          <span className="font-extrabold text-lg sm:text-xl tracking-wider text-white">
            FITLOG
          </span>
        </Link>

        
        <nav className="flex items-center gap-1 sm:gap-2 order-3 sm:order-2 w-full sm:w-auto justify-center">
          <Link
            href=" "
            className={`px-4 sm:px-5 py-1.5 sm:py-2 rounded-full font-medium text-xs sm:text-sm transition-all ${
              pathname === '/'
                ? 'bg-[#1e290e] text-[#a3e635]'
                : 'text-white hover:text-zinc-300'
            }`}
          >
            Workouts
          </Link>

          <Link
            href="/my-plan"
            className={`px-4 sm:px-5 py-1.5 sm:py-2 rounded-full font-medium text-xs sm:text-sm transition-all ${
              pathname === '/my-plan'
                ? 'bg-[#1e290e] text-[#a3e635]'
                : 'text-white hover:text-zinc-300'
            }`}
          >
            My Plan
          </Link>
        </nav>

        
        <div className="flex items-center gap-4 sm:gap-6 order-2 sm:order-3">
          
          <Link href="/my-plan" className="flex items-center gap-1.5 sm:gap-2 cursor-pointer group">
            <span className="text-xs sm:text-sm font-medium text-zinc-300 group-hover:text-white">
              Plan
            </span>
            <span className="bg-[#a3e635] text-black text-[10px] sm:text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
               {/* add cout */}
            </span>
          </Link>

          
          <Link href="/my-plan" className="flex items-center gap-1.5 sm:gap-2 cursor-pointer group">
            <span className="text-xs sm:text-sm font-medium text-zinc-300 group-hover:text-white">
              Saved
            </span>
            <span className="border border-zinc-700 text-zinc-400 text-[10px] sm:text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center group-hover:border-zinc-500 group-hover:text-zinc-200">
              {/* //add save count */}
            </span>
          </Link>
        </div>

      </div>
    </header>
  );


export default Navbar;