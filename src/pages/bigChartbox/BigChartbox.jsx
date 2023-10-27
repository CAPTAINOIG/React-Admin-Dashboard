import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Group A', value: 400, color: '#0088FE' },
  { name: 'Group B', value: 300, color:  '#00C49F'},
  { name: 'Group C', value: 300, color: '#FFBB28' },
  { name: 'Group D', value: 200, color:  '#FF8042'},
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  
    
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
const BigChartbox = () => {
  return (
    <section  className='border lg:w-[90%] w-[100%] rounded me-5 lg:mt-0 mt-10'>
    <h1 className='text-orange-500 font-bold text-2xl text-center mt-5'>Leads By Source</h1>
    <PieChart  className='pie' width={400} height={400}>
    <Pie
        data={data}
        cx={200}
        cy={200}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          
        ))}
        
      </Pie>
      </PieChart>
      <div className="flex font-serif font-bold lg:ms-0  gap-3 lg:gap-2">
        <div style={{color:'#0088FE'}}>
          <p>Group A</p>
          <p>400</p>
        </div>
        <div style={{color:'#00C49F'}}>
          <p>Group B</p>
          <p>300</p>
        </div>
        <div style={{color:'#FFBB28'}}>
        <p>Group C</p>
        <p>300</p>
      </div>
      <div style={{color:'#FF8042'}}>
      <p>Group D</p>
      <p>200</p>
    </div>
        </div>
      </section>
  );
}


  


export default BigChartbox