import { Dumbbell, Calendar, Flame, Trophy, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import StatCard from "../components/StatCard";
import ProgressChart from "../components/ProgressChart";
import WorkoutCard from "../components/WorkoutCard";

// Mock data
const workoutData = [
  { date: '2025-04-01', value: 45 },
  { date: '2025-04-02', value: 0 },
  { date: '2025-04-03', value: 60 },
  { date: '2025-04-04', value: 0 },
  { date: '2025-04-05', value: 75 },
  { date: '2025-04-06', value: 0 },
  { date: '2025-04-07', value: 45 },
  { date: '2025-04-08', value: 30 },
  { date: '2025-04-09', value: 0 },
  { date: '2025-04-10', value: 60 },
  { date: '2025-04-11', value: 0 },
  { date: '2025-04-12', value: 90 },
  { date: '2025-04-13', value: 0 },
  { date: '2025-04-14', value: 45 },
];

const weightData = [
  { date: '2025-04-01', value: 185 },
  { date: '2025-04-03', value: 184 },
  { date: '2025-04-05', value: 184 },
  { date: '2025-04-07', value: 183 },
  { date: '2025-04-10', value: 182 },
  { date: '2025-04-12', value: 181 },
  { date: '2025-04-14', value: 180 },
];

const recentWorkouts = [
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
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2">
          <Dumbbell size={18} />
          <span>New Workout</span>
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard 
          title="Workouts This Week" 
          value="4" 
          change={{ value: 20, isPositive: true }}
          icon={Dumbbell}
        />
        <StatCard 
          title="Workout Streak" 
          value="6 days" 
          icon={Calendar}
        />
        <StatCard 
          title="Calories Burned" 
          value="2,580" 
          change={{ value: 12, isPositive: true }}
          icon={Flame}
          iconClassName="bg-orange-500"
        />
        <StatCard 
          title="Personal Records" 
          value="8" 
          change={{ value: 2, isPositive: true }}
          icon={Trophy}
          iconClassName="bg-amber-500"
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ProgressChart 
          title="Workout Duration (minutes)" 
          data={workoutData} 
          dataKey="workout-time" 
          color="#6366F1" 
        />
        <ProgressChart 
          title="Weight Tracking (lbs)" 
          data={weightData} 
          dataKey="weight" 
          color="#EC4899" 
        />
      </div>
      
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium">Recent Workouts</h2>
          <Link to="/history" className="text-indigo-600 text-sm flex items-center gap-1 hover:text-indigo-800 transition-colors">
            View All <ArrowRight size={16} />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {recentWorkouts.map((workout, i) => (
            <WorkoutCard key={i} {...workout} />
          ))}
        </div>
      </div>
    </div>
  );
}