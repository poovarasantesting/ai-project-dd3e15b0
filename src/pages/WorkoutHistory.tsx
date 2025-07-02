import { useState } from "react";
import { format } from "date-fns";
import { Calendar, ChevronDown, Filter, Search } from "lucide-react";
import WorkoutCard from "../components/WorkoutCard";

// Mock data
const workoutHistory = [
  {
    date: new Date(2025, 3, 22),
    title: "Upper Body Power",
    exercises: [
      { name: "Bench Press", sets: 4, reps: 8 },
      { name: "Pull-ups", sets: 3, reps: 10 },
      { name: "Shoulder Press", sets: 3, reps: 12 },
    ],
    duration: 65,
  },
  {
    date: new Date(2025, 3, 20),
    title: "Leg Day",
    exercises: [
      { name: "Squats", sets: 4, reps: 10 },
      { name: "Lunges", sets: 3, reps: 12 },
      { name: "Leg Press", sets: 3, reps: 15 },
    ],
    duration: 75,
  },
  {
    date: new Date(2025, 3, 18),
    title: "Core & Cardio",
    exercises: [
      { name: "Planks", sets: 3, reps: 60 },
      { name: "Russian Twists", sets: 3, reps: 20 },
      { name: "Treadmill", sets: 1, reps: 20 },
    ],
    duration: 45,
  },
  {
    date: new Date(2025, 3, 16),
    title: "Upper Body Hypertrophy",
    exercises: [
      { name: "Incline DB Press", sets: 4, reps: 12 },
      { name: "Lat Pulldowns", sets: 4, reps: 12 },
      { name: "Lateral Raises", sets: 3, reps: 15 },
    ],
    duration: 70,
  },
  {
    date: new Date(2025, 3, 14),
    title: "Lower Body Focus",
    exercises: [
      { name: "Deadlifts", sets: 4, reps: 8 },
      { name: "Leg Extensions", sets: 3, reps: 12 },
      { name: "Calf Raises", sets: 3, reps: 15 },
    ],
    duration: 60,
  },
  {
    date: new Date(2025, 3, 12),
    title: "Push Workout",
    exercises: [
      { name: "Push-ups", sets: 4, reps: 15 },
      { name: "Tricep Dips", sets: 3, reps: 12 },
      { name: "Chest Flies", sets: 3, reps: 12 },
    ],
    duration: 55,
  },
];

const workoutTypes = ["All", "Strength", "Cardio", "Flexibility", "HIIT"];

export default function WorkoutHistory() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  
  // Filter workouts (currently just for search, type filtering would need real data)
  const filteredWorkouts = workoutHistory.filter(workout => 
    workout.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Workout History</h1>
        <div className="flex items-center gap-2">
          <div className="relative flex items-center">
            <Search size={18} className="absolute left-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search workouts..."
              className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="relative">
            <button className="flex items-center gap-2 px-4 py-2 border rounded-lg bg-white hover:bg-gray-50">
              <Calendar size={18} />
              <span>This Month</span>
              <ChevronDown size={16} />
            </button>
          </div>
        </div>
      </div>
      
      <div className="flex gap-2 overflow-x-auto pb-2">
        {workoutTypes.map(type => (
          <button
            key={type}
            className={`px-4 py-2 rounded-full whitespace-nowrap ${
              selectedType === type
                ? 'bg-indigo-100 text-indigo-700 font-medium'
                : 'bg-white border text-gray-700 hover:bg-gray-50'
            }`}
            onClick={() => setSelectedType(type)}
          >
            {type}
          </button>
        ))}
        <button className="px-4 py-2 rounded-full whitespace-nowrap bg-white border text-gray-700 hover:bg-gray-50 flex items-center gap-1">
          <Filter size={16} />
          <span>More Filters</span>
        </button>
      </div>
      
      <div className="space-y-6">
        {Object.entries(groupWorkoutsByMonth(filteredWorkouts)).map(([month, workouts]) => (
          <div key={month}>
            <h2 className="text-lg font-medium mb-4">{month}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {workouts.map((workout, i) => (
                <WorkoutCard key={i} {...workout} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Helper function to group workouts by month
function groupWorkoutsByMonth(workouts: typeof workoutHistory) {
  const grouped: Record<string, typeof workoutHistory> = {};
  
  workouts.forEach(workout => {
    const monthYear = format(workout.date, "MMMM yyyy");
    if (!grouped[monthYear]) {
      grouped[monthYear] = [];
    }
    grouped[monthYear].push(workout);
  });
  
  return grouped;
}