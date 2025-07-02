import { Calendar, ChevronRight } from "lucide-react";
import { format } from "date-fns";

interface WorkoutCardProps {
  date: Date;
  title: string;
  exercises: {
    name: string;
    sets: number;
    reps: number;
  }[];
  duration: number; // in minutes
}

export default function WorkoutCard({ date, title, exercises, duration }: WorkoutCardProps) {
  return (
    <div className="bg-white rounded-lg shadow p-4 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-2">
          <div className="bg-indigo-100 rounded-full p-2">
            <Calendar size={16} className="text-indigo-600" />
          </div>
          <div>
            <h3 className="font-medium">{title}</h3>
            <p className="text-sm text-gray-500">{format(date, "MMM d, yyyy")}</p>
          </div>
        </div>
        <span className="text-sm text-gray-500">{duration} min</span>
      </div>
      
      <div className="space-y-1 mb-3">
        {exercises.map((exercise, i) => (
          <div key={i} className="flex justify-between text-sm">
            <span>{exercise.name}</span>
            <span className="text-gray-500">{exercise.sets} × {exercise.reps}</span>
          </div>
        ))}
      </div>
      
      <button className="w-full flex items-center justify-center gap-1 text-indigo-600 text-sm font-medium mt-2 py-1 hover:bg-indigo-50 rounded transition-colors">
        View Details
        <ChevronRight size={16} />
      </button>
    </div>
  );
}