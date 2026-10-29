export default function Loading() {
  return (
    <main className="min-h-screen w-full bg-[#0d0f12] text-white flex flex-col items-center justify-center space-y-4 px-4">
      
      <div className="w-12 h-12 border-4 border-zinc-800 border-t-[#a3e635] rounded-full animate-spin"></div>
      
      
      <p className="text-zinc-400 text-sm uppercase tracking-wider font-bold">
        Loading Workouts Details...
      </p>
    </main>
  );
}