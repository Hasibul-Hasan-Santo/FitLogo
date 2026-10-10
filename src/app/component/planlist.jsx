"use client";
import { Flame, Star, Timer } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PlanList({ planItems, activeTab, onToggleDone, onRemove }) {
 if (planItems.length === 0) {
   return (
     <div className="border border-dashed border-[#1b202c] rounded-2xl py-24 px-6 text-center flex flex-col items-center justify-center bg-[#11141c]/30">
       <h2 className="text-2xl font-black uppercase tracking-tight mb-2 text-white">
         NOTHING HERE YET
       </h2>
       <p className="text-[#8e95a5] text-xs mb-8">
         Browse the library and add a lift to get today moving.
       </p>
       <Link
         href="/#library"
         className="bg-[#a3e635] text-black font-extrabold text-xs px-8 py-3.5 rounded-full hover:bg-[#86efac] transition shadow-lg uppercase tracking-wide"
       >
         Go to workouts
       </Link>
     </div>
   );
 }

 return (
   <div className="space-y-4">
     {planItems.map((item) => (
       <div
         key={item.id}
         className="bg-[#11141c] border border-[#1b202c] rounded-2xl p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 transition hover:border-[#282f40]"
       >
        
         <div className="flex items-center gap-5 w-full md:w-auto">
           {item.image && (
             <div className="relative w-28 h-20 rounded-xl overflow-hidden bg-[#1b202c] shrink-0">
               <Image
                 src={item.image}
                 alt={item.name || "Workout"}
                 fill
                 className="object-cover"
               />
             </div>
           )}
           <div className="min-w-0 flex-1">
             <span className="text-[10px] font-bold uppercase px-2.5 py-1 rounded bg-[#1b202c] text-[#a3e635] inline-block mb-1.5">
               {item.muscleGroups?.[0] || item.equipment || "Workout"}
             </span>
             <h3 className="text-base font-extrabold text-white uppercase tracking-wide truncate">
               {item.name}
             </h3>
             <div className="flex items-center gap-4 text-xs text-[#8e95a5] mt-1 font-medium flex-wrap">
               <span><Timer className="w-4 h-4 text-amber-500 fill-amber-500" /> {item.duration} min</span>
               <span><Flame className="w-4 h-4 text-amber-500 fill-amber-500" /> {item.caloriesBurned} kcal</span>
               <span className="text-amber-400">
                 <Star className="w-4 h-4 text-amber-500 fill-amber-500" /> <span className="text-white">{item.rating}</span>
               </span>
             </div>
           </div>
         </div>

        
         <div className="flex items-center gap-3 w-full md:w-auto justify-end pt-3 md:pt-0 border-t md:border-t-0 border-[#1b202c] shrink-0">
           <Link
             href={`/workouts/${item.id}`}
             className="border border-[#1b202c] hover:border-[#282f40] text-white text-xs font-bold px-4 py-2.5 rounded-xl transition whitespace-nowrap"
           >
             View Details
           </Link>

          
           {activeTab === "todays" && (
             <button
               onClick={() => onToggleDone(item.id)}
               className="text-xs font-extrabold px-4 py-2.5 rounded-xl transition whitespace-nowrap bg-[#a3e635] hover:bg-[#86efac] text-black cursor-pointer"
             >
               ✓ Mark as Done
             </button>
           )}

           <button
             onClick={() => onRemove(item.id)}
             className="text-[#8e95a5] hover:text-red-400 p-2 transition text-base font-bold cursor-pointer"
           >
             ✕
           </button>
         </div>
       </div>
     ))}
   </div>
 );
}
