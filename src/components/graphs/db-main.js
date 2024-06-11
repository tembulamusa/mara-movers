import React, {PureComponent} from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';

const data = [
    {
        name: '11',
        users: 4000,
        orders: 2400,
        amt: 2400,
    },
    {
        name: '12',
        users: 3000,
        orders: 1398,
        amt: 2210,
    },
    {
        name: '13',
        users: 2000,
        orders: 9800,
        amt: 2290,
    },
    {
        name: '14',
        users: 2780,
        orders: 3908,
        amt: 2000,
    },
    {
        name: '15',
        users: 1890,
        orders: 4800,
        amt: 2181,
    },
    {
        name: '16',
        users: 2390,
        orders: 3800,
        amt: 2500,
    },
    {
        name: '17',
        users: 3490,
        orders: 4300,
        amt: 2100,
    },
]

export default function RecentTrend() {
  return (
    <LineChart
      width={800}
      height={350}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="users"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line 
      type="monotone" 
      dataKey="orders" 
      stroke="#82ca9d" />
    </LineChart>
  );
}