import Image from 'next/image';
import Link from 'next/link';
import WorkoutActions from '@/app/component/WorkoutActions';

const getWorkoutDetails = async (id) => {
  if (!id) return null;

  try {
    const res = await fetch("https://raw.githubusercontent.com/Hasibul-Hasan-Santo/fitapi/main/data.json", {
      next: { revalidate: 3600 }, 
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status}`);
    }

    const workouts = await res.json();
    
    if (!Array.isArray(workouts)) return null;

    return workouts.find((item) => String(item.id) === String(id)) || null;
  } catch (error) {
    console.error("Error fetching workout details:", error.message);
    return null;
  }
};

export default async function WorkoutDetailPage({ params }) {
  const { id } = await params;
  const workout = await getWorkoutDetails(id);

  if (!workout) {
    return (
      <div className="min-h-screen bg-[#0d0f12] text-white flex flex-col items-center justify-center space-y-4">
        <h2 className="text-xl font-bold uppercase">Workout Not Found</h2>
        <Link href="/" className="bg-[#a3e635] text-black text-xs font-bold px-4 py-2 rounded-lg">
          Back to Workouts
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#0d0f12] text-white py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        
        <div className="relative w-full h-[400px] sm:h-[550px] bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800">
          <Image 
            src={workout.image} 
            alt={workout.name} 
            fill 
            className="object-cover" 
          />
        </div>

        
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight">{workout.name}</h1>
            <p className="text-zinc-400 text-sm mt-2">{workout.description}</p>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            {workout.muscleGroups?.map((group) => (
              <span key={group} className="text-xs font-black uppercase px-3 py-1 rounded bg-[#a3e635] text-black">
                {group}
              </span>
            ))}
          </div>

          
          <div className="bg-[#121418] border border-zinc-800 rounded-xl overflow-hidden divide-y divide-zinc-800 text-xs">
            <div className="flex justify-between p-3.5"><span className="text-zinc-400">EQUIPMENT</span><span className="font-bold">{workout.equipment}</span></div>
            <div className="flex justify-between p-3.5"><span className="text-zinc-400">DIFFICULTY</span><span className="font-bold">{workout.difficulty}</span></div>
            <div className="flex justify-between p-3.5"><span className="text-zinc-400">SETS</span><span className="font-bold">{workout.sets}</span></div>
            <div className="flex justify-between p-3.5"><span className="text-zinc-400">REPS</span><span className="font-bold">{workout.reps}</span></div>
            <div className="flex justify-between p-3.5"><span className="text-zinc-400">DURATION</span><span className="font-bold">{workout.duration} min</span></div>
            <div className="flex justify-between p-3.5"><span className="text-zinc-400">CALORIES</span><span className="font-bold">{workout.caloriesBurned} kcal</span></div>
            <div className="flex justify-between p-3.5"><span className="text-zinc-400">RATING</span><span className="font-bold">{workout.rating} ★</span></div>
          </div>

          
          <div className="space-y-3">
            <h3 className="font-black uppercase tracking-wide text-sm">INSTRUCTIONS</h3>
            <ol className="space-y-2 text-xs text-zinc-300">
              {workout.instructions?.map((step, idx) => (
                <li key={idx} className="flex gap-2">
                  <span className="text-[#a3e635] font-bold">{idx + 1}.</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          
          <WorkoutActions workout={workout} />

        </div>

      </div>
    </main>
  );
}