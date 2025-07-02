import { LucideIcon } from "lucide-react";
import { cn } from "../lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  change?: {
    value: number;
    isPositive: boolean;
  };
  icon: LucideIcon;
  iconClassName?: string;
}

export default function StatCard({ title, value, change, icon: Icon, iconClassName }: StatCardProps) {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex justify-between mb-2">
        <p className="text-gray-500 text-sm">{title}</p>
        <div className={cn("p-2 rounded-full", iconClassName ?? "bg-indigo-100")}>
          <Icon size={16} className={cn("text-indigo-600", iconClassName && "text-white")} />
        </div>
      </div>
      <div className="flex items-end gap-2">
        <p className="text-2xl font-semibold">{value}</p>
        {change && (
          <span className={cn(
            "text-xs px-1.5 py-0.5 rounded-full flex items-center",
            change.isPositive ? "text-green-700 bg-green-100" : "text-red-700 bg-red-100"
          )}>
            {change.isPositive ? "+" : ""}{change.value}%
          </span>
        )}
      </div>
    </div>
  );
}