'use client';
import { CalendarPlus2, Bookmark } from 'lucide-react';

import toast from 'react-hot-toast';

export default function WorkoutActions({ workout }) {
  const handleAddToPlan = () => {
    if (!workout || !workout.id) return;
    
    const existingPlan = JSON.parse(localStorage.getItem('fitlog_plan') || '[]');
    
    if (!existingPlan.some((item) => item && String(item.id) === String(workout.id))) {
      const updatedPlan = [...existingPlan, workout];
      localStorage.setItem('fitlog_plan', JSON.stringify(updatedPlan));
      
      toast.success('Successfully added to plan!');
      window.dispatchEvent(new Event('storage'));
    } else {
      toast.error('Already in your plan!');
    }
  };

  const handleSaveForLater = () => {
    if (!workout || !workout.id) return;

    const existingSaved = JSON.parse(localStorage.getItem('fitlog_saved') || '[]');
    
    if (!existingSaved.some((item) => item && String(item.id) === String(workout.id))) {
      const updatedSaved = [...existingSaved, workout];
      localStorage.setItem('fitlog_saved', JSON.stringify(updatedSaved));
      
      toast.success('Successfully saved for later!');
      window.dispatchEvent(new Event('storage'));
    } else {
      toast.error('Already saved for later!');
    }
  };

  return (
    <div className="flex items-center gap-4 pt-6">
      <button 
        onClick={handleAddToPlan}
        className="flex-1 bg-[#a3e635] text-black font-extrabold py-4 px-4 rounded-xl hover:bg-[#86efac] transition-all flex items-center justify-center gap-2 cursor-pointer text-xs sm:text-sm uppercase tracking-wider"
      >
        <span><CalendarPlus2 /></span> Add to today&apos;s plan
      </button>
      
      <button 
        onClick={handleSaveForLater}
        className="flex-1 bg-zinc-900 border border-zinc-800 text-white font-extrabold py-4 px-4 rounded-xl hover:border-zinc-700 transition-all flex items-center justify-center gap-2 cursor-pointer text-xs sm:text-sm uppercase tracking-wider"
      >
        <span><Bookmark /></span> Save for later
      </button>
    </div>
  );
}