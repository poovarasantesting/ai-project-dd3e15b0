import { Search, PlusCircle, ChevronDown } from "lucide-react";
import { useState } from "react";
import RecordCard from "../components/RecordCard";

// Mock data
const recordCategories = ["All", "Strength", "Endurance", "Speed", "Flexibility"];

const personalRecords = [
  {
    exercise: "Bench Press",
    value: 225,
    unit: "lbs",
    date: new Date(2025, 3, 15),
    previousBest: {
      value: 215,
      date: new Date(2025, 2, 20),
    },
    category: "Strength",
  },
  {
    exercise: "Squat",
    value: 315,
    unit: "lbs",
    date: new Date(2025, 3, 10),
    previousBest: {
      value: 295,
      date: new Date(2025, 2, 18),
    },
    category: "Strength",
  },
  {
    exercise: "Deadlift",
    value: 405,
    unit: "lbs",
    date: new Date(2025, 3, 5),
    previousBest: {
      value: 385,
      date: new Date(2025, 2, 10),
    },
    category: "Strength",
  },
  {
    exercise: "Pull-ups",
    value: 15,
    unit: "reps",
    date: new Date(2025, 3, 18),
    previousBest: {
      value: 12,
      date: new Date(2025, 2, 25),
    },
    category: "Endurance",
  },
  {
    exercise: "Mile Run",
    value: 6.5,
    unit: "min",
    date: new Date(2025, 3, 12),
    previousBest: {
      value: 7.2,
      date: new Date(2025, 2, 15),
    },
    category: "Speed",
  },
  {
    exercise: "Plank",
    value: 3.5,
    unit: "min",
    date: new Date(2025, 3, 20),
    previousBest: {
      value: 3,
      date: new Date(2025, 2, 28),
    },
    category: "Endurance",
  },
  {
    exercise: "Shoulder Press",
    value: 165,
    unit: "lbs",
    date: new Date(2025, 3, 8),
    previousBest: {
      value: 155,
      date: new Date(2025, 2, 12),
    },
    category: "Strength",
  },
  {
    exercise: "Box Jump",
    value: 42,
    unit: "inches",
    date: new Date(2025, 3, 16),
    previousBest: {
      value: 40,
      date: new Date(2025, 2, 22),
    },
    category: "Speed",
  },
];

export default function PersonalRecords() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  // Filter records
  const filteredRecords = personalRecords
    .filter(record => 
      record.exercise.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter(record => 
      selectedCategory === "All" || record.category === selectedCategory
    );
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Personal Records</h1>
        <div className="flex items-center gap-2">
          <div className="relative flex items-center">
            <Search size={18} className="absolute left-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search records..."
              className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button className="flex items-center gap-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
            <PlusCircle size={18} />
            <span>Add Record</span>
          </button>
        </div>
      </div>
      
      <div className="flex gap-2 overflow-x-auto pb-2">
        {recordCategories.map(category => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full whitespace-nowrap ${
              selectedCategory === category
                ? 'bg-indigo-100 text-indigo-700 font-medium'
                : 'bg-white border text-gray-700 hover:bg-gray-50'
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
        <button className="px-4 py-2 rounded-full whitespace-nowrap bg-white border text-gray-700 hover:bg-gray-50 flex items-center gap-1">
          <ChevronDown size={16} />
          <span>Sort</span>
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredRecords.map((record, i) => (
          <RecordCard key={i} {...record} />
        ))}
      </div>
    </div>
  );
}