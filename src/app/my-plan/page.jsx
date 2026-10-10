"use client";
import { useState, useEffect, useCallback } from "react";
import PlanStats from "@/app/component/planstats";

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
      </div>
    </main>
  );
}