import { Flame, Star, Timer } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const getWorkouts = async () => {
  try {
    const response = await fetch("https://raw.githubusercontent.com/Hasibul-Hasan-Santo/fitapi/main/data.json", {
      next: { revalidate: 3600 },
    });

    if (!response.ok) return [];

    const text = await response.text();
    if (text.trim().startsWith("<!doctype") || text.trim().startsWith("<html")) {
      return [];
    }

    const data = JSON.parse(text);
    return Array.isArray(data) ? data : [];
  } catch (error) {
    return [];
  }
};

export default async function WorkoutsPage() {
  const workouts = await getWorkouts();
  
  if (!workouts || workouts.length === 0) {
    return (
      
      <main className="min-h-screen w-full bg-[#0d0f12] py-24 px-4 flex flex-col items-center justify-center">
        <p className="text-zinc-400 text-sm uppercase tracking-wider font-bold">
          Data did not found
        </p>
      </main>
    );
  }

  return (
    <main className="min-h-screen w-full bg-[#0d0f12] py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        <div className="space-y-1 border-b border-zinc-800 pb-6">
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
            THE LIBRARY
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {workouts?.map((workout) => (
            <Link 
              key={workout.id}
              href={`/workouts/${workout.id}`}
              className="bg-[#121418] border border-zinc-800/80 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-[#a3e635]/50 transition-all group shadow-xl cursor-pointer"
            >
              <div>
                <div className="relative w-full h-48 bg-zinc-900 overflow-hidden">
                  <Image
                    src={workout.image}
                    alt={workout.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-5 space-y-4">
                  
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {workout.muscleGroups?.map((group) => (
                      <span 
                        key={`${workout.id}-${group}`} 
                        className="text-[10px] font-black uppercase px-2.5 py-1 rounded bg-[#a3e635] text-black tracking-wide"
                      >
                        {group}
                      </span>
                    ))}
                  </div>

                  <div>
                    <h3 className="text-lg font-extrabold text-white uppercase tracking-wide group-hover:text-[#a3e635] transition-colors">
                      {workout.name}
                    </h3>
                    <p className="text-xs text-zinc-400 mt-1 font-medium">
                      {workout.equipment}
                    </p>
                  </div>

                  <p className="text-xs text-zinc-400 line-clamp-2">
                    {workout.description}
                  </p>

                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-zinc-400 p-5 pt-3 border-t border-zinc-800/80 font-medium">
                <div className="flex items-center gap-1.5">
                  <span><Timer className="w-4 h-4 text-amber-500 fill-amber-500" /></span>
                  <span>{workout.duration} min</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span><Flame className="w-4 h-4 text-amber-500 fill-amber-500"/></span>
                  <span>{workout.caloriesBurned} kcal</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-amber-400"><Star className="w-4 h-4 text-amber-500 fill-amber-500" /> <span className="text-white"/></span>
                  <span className="text-white font-bold">{workout.rating}</span>
                </div>
              </div>

            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}