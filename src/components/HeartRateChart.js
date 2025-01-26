import React from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const HeartRateChart = () => {
  const data = [
    { date: '27/06', value: null },
    { date: '28/06', value: 98 },
    { date: '29/06', value: null },
    { date: '30/06', value: null },
    { date: '01/02', value: null },
    { date: '02/02', value: null },
    { date: '03/02', value: null },
  ];

  return (
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={data}>
        <XAxis dataKey="date" />
        <YAxis domain={[60, 120]} />
        <Line 
          type="monotone" 
          dataKey="value" 
          stroke="#1976d2" 
          dot={{ fill: '#1976d2' }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default HeartRateChart;