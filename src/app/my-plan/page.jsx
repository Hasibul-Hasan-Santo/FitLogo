"use client";
import { useState, useEffect, useCallback } from "react";
import PlanStats from "@/app/component/planstats";
import SortTabs from "../component/Sorttabs";

export default function MyPlanPage() {
  const [activeTab, setActiveTab] = useState("todays");
  const [sortBy, setSortBy] = useState("Duration");
  const [planItems, setPlanItems] = useState([]);


  const loadPlanData = useCallback(() => {
    if (typeof window === "undefined") return;
    const key = activeTab === "todays" ? "fitlog_plan" : "fitlog_saved";
    const savedData = JSON.parse(localStorage.getItem(key) || "[]");
    setPlanItems(savedData);
  }, [activeTab]);

  useEffect(() => {
    queueMicrotask(() => {
      loadPlanData();
    });

    const handleStorage = () => loadPlanData();
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, [loadPlanData]);

  const handleSortChange = (e) => {
    const value = e.target.value;
    setSortBy(value);

    let sorted = [...planItems];
    if (value === "Duration") {
      sorted.sort((a, b) => Number(a.duration || 0) - Number(b.duration || 0));
    } else if (value === "Calories") {
      sorted.sort((a, b) => Number(a.caloriesBurned || 0) - Number(b.caloriesBurned || 0));
    } else if (value === "Name") {
      sorted.sort((a, b) => String(a.name || "").localeCompare(String(b.name || "")));
    }
    setPlanItems(sorted);
  };

  


  
  const totalExercises = planItems.length;
  const totalMinutes = planItems.reduce(
    (acc, item) => acc + Number(item.duration || 0),
    0
  );
  const totalCalories = planItems.reduce(
    (acc, item) => acc + Number(item.caloriesBurned || 0),
    0
  );

  return (
    <main className="min-h-screen bg-[#0b0d12] text-white px-6 sm:px-12 py-12 font-sans">
      <div className="max-w-6xl mx-auto space-y-8">
        <PlanStats
          totalExercises={totalExercises}
          totalMinutes={totalMinutes}
          totalCalories={totalCalories}
        />

          <SortTabs
         activeTab={activeTab}
         setActiveTab={setActiveTab}
         sortBy={sortBy}
         onSortChange={handleSortChange}
       />

      </div>
    </main>
  );
}