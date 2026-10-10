"use client";

export default function PlanStats({ totalExercises, totalMinutes, totalCalories }) {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-extrabold uppercase tracking-tight mb-2">
          MY PLAN
        </h1>
        <p className="text-[#8e95a5] text-sm font-normal">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 bg-[#11141c] border border-[#1b202c] rounded-2xl p-8 divide-y md:divide-y-0 md:divide-x divide-[#1b202c]">
        <div className="pb-6 md:pb-0 md:pr-8">
          <p className="text-xs text-[#8e95a5] font-medium mb-3">Exercises</p>
          <p className="text-5xl font-extrabold text-[#a3e635]">{totalExercises}</p>
        </div>
        <div className="py-6 md:py-0 md:px-8">
          <p className="text-xs text-[#8e95a5] font-medium mb-3">Minutes</p>
          <p className="text-5xl font-extrabold text-white">{totalMinutes}</p>
        </div>
        <div className="pt-6 md:pt-0 md:pl-8">
          <p className="text-xs text-[#8e95a5] font-medium mb-3">Calories</p>
          <p className="text-5xl font-extrabold text-white">{totalCalories}</p>
        </div>
      </div>
    </div>
  );
}