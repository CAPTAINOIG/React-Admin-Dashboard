import React from 'react'
import {
    CartesianGrid,
    Line,
    LineChart,
    Tooltip,
    XAxis,
    YAxis,
  } from "recharts";



 

const data = [
    {
      name: "Sun",
      books: 4000,
      clothes: 2400,
      electronic: 2400,
    },
    {
      name: "Mon",
      books: 3000,
      clothes: 1398,
      electronic: 2210,
    },
    {
      name: "Tue",
      books: 2000,
      clothes: 9800,
      electronic: 2290,
    },
    {
      name: "Wed",
      books: 2780,
      clothes: 3908,
      electronic: 2000,
    },
    {
      name: "Thu",
      books: 1890,
      clothes: 4800,
      electronic: 2181,
    },
    {
      name: "Fri",
      books: 2390,
      clothes: 3800,
      electronic: 2500,
    },
    {
      name: "Sat",
      books: 3490,
      clothes: 4300,
      electronic: 2100,
    },
  ];

 

const PieChartBox = () => {
  return (
    
    <section className='text-white font-serif'>
    <h1 className='text-center text-xl mt-5'>Revenue Analytics</h1>
  <LineChart className='bg-blue-500 dark:bg-gray-800 lg:block hidden lg:ms-5 rounded lg:mt-2 mt-10' width={470} height={450} data={data} margin={{ top: 85, right: 20, bottom: 5, left: 0 }}>
  <Line  type="monotone" dataKey="books" stroke="blue" />
  <Line type="monotone" dataKey="clothes" stroke="blue" />
  <Line type="monotone" dataKey="electronic" stroke="blue" />
  <CartesianGrid stroke="blue" strokeDasharray="5 5" />
  <XAxis dataKey="name"  />
  <YAxis />
  <Tooltip />
  </LineChart>
   
    </section>
  )
}

export default PieChartBox