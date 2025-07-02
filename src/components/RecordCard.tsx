import { Medal } from "lucide-react";
import { format } from "date-fns";

interface RecordCardProps {
  exercise: string;
  value: number;
  unit: string;
  date: Date;
  previousBest?: {
    value: number;
    date: Date;
  };
}

export default function RecordCard({ exercise, value, unit, date, previousBest }: RecordCardProps) {
  const improvement = previousBest ? ((value - previousBest.value) / previousBest.value) * 100 : 0;
  
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex justify-between mb-3">
        <h3 className="font-medium">{exercise}</h3>
        <div className="bg-amber-100 rounded-full p-1">
          <Medal size={16} className="text-amber-600" />
        </div>
      </div>
      
      <div className="flex items-baseline gap-1 mb-2">
        <span className="text-2xl font-bold">{value}</span>
        <span className="text-gray-500">{unit}</span>
      </div>
      
      <div className="text-xs text-gray-500">
        <p>Achieved on {format(date, "MMM d, yyyy")}</p>
        
        {previousBest && (
          <div className="mt-2 pt-2 border-t flex justify-between items-center">
            <span>Previous: {previousBest.value} {unit}</span>
            <span className="text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
              +{improvement.toFixed(1)}%
            </span>
          </div>
        )}
      </div>
    </div>
  );
}