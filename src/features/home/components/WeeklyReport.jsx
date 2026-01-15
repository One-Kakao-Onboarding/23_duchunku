import React from 'react';
import { BarChart as BarChartIcon } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ComposedChart, Line, Cell, ResponsiveContainer } from 'recharts';

const WeeklyReport = ({ dashboardData }) => {
  return (
    <div className="bg-white p-5 rounded-3xl shadow-sm border border-gray-100">
      <h3 className="font-bold text-gray-800 flex items-center mb-4 px-1">
        <BarChartIcon size={18} className="mr-2 text-yellow-500" /> 주간 연락 레포트
      </h3>
      <div className="h-56 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={dashboardData}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11, fontWeight: 600 }}
            />
            <YAxis hide />
            <Tooltip
              cursor={{ fill: 'rgba(254, 229, 0, 0.1)' }}
              contentStyle={{
                backgroundColor: 'white',
                border: '2px solid #FEE500',
                borderRadius: '12px',
                padding: '8px 12px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}
              labelStyle={{
                fontWeight: 'bold',
                fontSize: '12px',
                color: '#3C1E1E',
                marginBottom: '4px'
              }}
              itemStyle={{
                fontSize: '11px',
                padding: '2px 0'
              }}
              formatter={(value, name) => {
                if (name === 'actual') return [value + '회', '실제 연락'];
                if (name === 'ideal') return [value + '회', '목표 연락'];
                return [value, name];
              }}
            />
            <Bar dataKey="actual" fill="#FEE500" radius={[4, 4, 0, 0]} barSize={24}>
              {dashboardData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.actual < entry.ideal ? '#FEE500' : '#FFD400'}
                />
              ))}
            </Bar>
            <Line
              type="monotone"
              dataKey="ideal"
              stroke="#3C1E1E"
              strokeWidth={2}
              dot={{ r: 4, fill: '#3C1E1E' }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default WeeklyReport;
