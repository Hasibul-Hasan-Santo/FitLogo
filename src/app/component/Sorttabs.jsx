"use client";
import { ChevronDown } from "lucide-react";

export default function SortTabs({ activeTab, setActiveTab, sortBy, onSortChange }) {
 return (
   <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-2">
     <div className="flex bg-[#11141c] p-1.5 rounded-xl border border-[#1b202c]">
       <button
         onClick={() => setActiveTab("todays")}
         
         className={`px-6 py-2.5 rounded-lg text-xs font-semibold transition-all ${
           activeTab === "todays"
             ? "bg-[#1b202c] text-white shadow"
             : "text-[#8e95a5] hover:text-white"
         }`}
       >
         Today&apos;s Plan
       </button>
       <button
         onClick={() => setActiveTab("saved")}
         className={`px-6 py-2.5 rounded-lg text-xs font-semibold transition-all ${
           activeTab === "saved"
             ? "bg-[#1b202c] text-white shadow"
             : "text-[#8e95a5] hover:text-white"
         }`}
       >
         Saved
       </button>
     </div>

     <div className="flex items-center gap-3">
       <span className="text-xs text-[#8e95a5] font-medium">Sort By</span>
       <div className="relative">
         <select
           value={sortBy}
           onChange={onSortChange}
           className="appearance-none bg-[#11141c] border border-[#1b202c] text-white text-xs px-4 py-2.5 pr-9 rounded-xl focus:outline-none cursor-pointer font-medium"
         >
           <option value="Duration">Duration</option>
           <option value="Calories">Calories</option>
           <option value="Name">Name</option>
         </select>
         <ChevronDown className="w-4 h-4 text-[#8e95a5] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
       </div>
     </div>
   </div>
 );
}
