import { NavLink } from "react-router-dom";
import { BarChart2, Calendar, Home, Medal, Settings, User } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="bg-white w-64 h-full flex flex-col border-r shadow-sm">
      <div className="p-4 border-b">
        <h1 className="text-xl font-bold text-indigo-600">FitTrackr</h1>
      </div>
      
      <nav className="flex-1 p-4">
        <ul className="space-y-1">
          <NavItem to="/" icon={<Home size={20} />}>Dashboard</NavItem>
          <NavItem to="/history" icon={<Calendar size={20} />}>Workout History</NavItem>
          <NavItem to="/records" icon={<Medal size={20} />}>Personal Records</NavItem>
        </ul>
        
        <div className="mt-8">
          <h2 className="text-xs uppercase text-gray-500 font-semibold mb-2 tracking-wider">Analytics</h2>
          <ul className="space-y-1">
            <NavItem to="#" icon={<BarChart2 size={20} />}>Progress</NavItem>
          </ul>
        </div>
      </nav>
      
      <div className="p-4 border-t">
        <div className="flex items-center gap-3">
          <div className="bg-indigo-100 p-2 rounded-full">
            <User size={20} className="text-indigo-600" />
          </div>
          <div>
            <p className="text-sm font-medium">User Profile</p>
            <p className="text-xs text-gray-500">View Profile</p>
          </div>
          <Settings size={18} className="ml-auto text-gray-400 hover:text-gray-600 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

function NavItem({ to, icon, children }: { to: string, icon: React.ReactNode, children: React.ReactNode }) {
  return (
    <li>
      <NavLink 
        to={to} 
        className={({ isActive }) => 
          `flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${
            isActive 
              ? 'bg-indigo-50 text-indigo-700 font-medium' 
              : 'text-gray-600 hover:bg-gray-100'
          }`
        }
      >
        {icon}
        <span>{children}</span>
      </NavLink>
    </li>
  );
}