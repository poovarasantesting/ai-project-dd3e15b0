import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, TooltipProps 
} from 'recharts';
import { format, parseISO } from 'date-fns';

interface ProgressChartProps {
  title: string;
  data: {
    date: string;
    value: number;
  }[];
  dataKey: string;
  color: string;
}

export default function ProgressChart({ title, data, dataKey, color }: ProgressChartProps) {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="text-lg font-medium mb-4">{title}</h2>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id={`gradient-${dataKey}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={color} stopOpacity={0.8} />
                <stop offset="95%" stopColor={color} stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="date" 
              tickFormatter={(str) => format(parseISO(str), 'MMM d')}
              axisLine={false}
              tickLine={false}
              dy={10}
              tick={{ fontSize: 12, fill: '#6B7280' }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              dx={-10}
              tick={{ fontSize: 12, fill: '#6B7280' }}
            />
            <CartesianGrid vertical={false} strokeDasharray="3 3" strokeOpacity={0.3} />
            <Tooltip content={<CustomTooltip />} />
            <Area 
              type="monotone" 
              dataKey="value" 
              stroke={color} 
              fillOpacity={1}
              fill={`url(#gradient-${dataKey})`} 
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function CustomTooltip({ active, payload, label }: TooltipProps<number, string>) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 shadow-md rounded-md border border-gray-100">
        <p className="text-sm text-gray-600">{format(parseISO(label), 'MMM d, yyyy')}</p>
        <p className="text-indigo-600 font-medium mt-1">
          {payload[0].value}
        </p>
      </div>
    );
  }

  return null;
}