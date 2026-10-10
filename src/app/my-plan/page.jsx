"use client";
import { useState, useEffect, useCallback } from "react";
import PlanStats from "@/app/component/planstats";
import SortTabs from "../component/Sorttabs";
import PlanList from "../component/planlist";
import toast from "react-hot-toast";

export default function MyPlanPage() {
  const [activeTab, setActiveTab] = useState("todays");
  const [sortBy, setSortBy] = useState("Duration");
  const [planItems, setPlanItems] = useState([]);

  const loadPlanData = useCallback(() => {
    if (typeof window === "undefined") return;
    const key = activeTab === "todays" ? "fitlog_plan" : "fitlog_saved";
    let data = JSON.parse(localStorage.getItem(key) || "[]");

    if (sortBy === "Duration") {
      data.sort((a, b) => Number(a.duration || 0) - Number(b.duration || 0));
    } else if (sortBy === "Calories") {
      data.sort((a, b) => Number(a.caloriesBurned || 0) - Number(b.caloriesBurned || 0));
    } else if (sortBy === "Name") {
      data.sort((a, b) => String(a.name || "").localeCompare(String(b.name || "")));
    }

    setPlanItems(data);
  }, [activeTab, sortBy]);

  useEffect(() => {
    queueMicrotask(() => {
      loadPlanData();
    });

    const handleStorage = () => loadPlanData();
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, [loadPlanData]);

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  
  const handleMarkAsDone = (id) => {
    const itemToRemove = planItems.find((item) => String(item.id) === String(id));
    const updated = planItems.filter((item) => String(item.id) !== String(id));
    
    setPlanItems(updated);
    const key = activeTab === "todays" ? "fitlog_plan" : "fitlog_saved";
    localStorage.setItem(key, JSON.stringify(updated));
    window.dispatchEvent(new Event("storage"));

    toast.success(`Great job! "${itemToRemove?.name || 'Workout'}" completed!`, {
      style: { background: '#10B981', color: '#fff' },
    });
  };

  
  const handleRemove = (id) => {
    const itemToRemove = planItems.find((item) => String(item.id) === String(id));
    const updated = planItems.filter((item) => String(item.id) !== String(id));
    
    setPlanItems(updated);
    const key = activeTab === "todays" ? "fitlog_plan" : "fitlog_saved";
    localStorage.setItem(key, JSON.stringify(updated));
    window.dispatchEvent(new Event("storage"));

    toast.error(`${itemToRemove?.name || 'Workout'} removed from your list! `);
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

        <PlanList
          planItems={planItems}
          activeTab={activeTab}
          onToggleDone={handleMarkAsDone}
          onRemove={handleRemove}
        />
      </div>
    </main>
  );
}