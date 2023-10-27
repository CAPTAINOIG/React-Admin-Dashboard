import React from 'react';
import { Link } from 'react-router-dom';
import avatar2 from '../Chartbox/avatar2.jpg'




const ChartBoxUser = (props) => {
  return (
    <main className="border rounded text-white font-serif lg:w-[80%] w-[100%] lg:ms-5 ms-0 lg:mt-0 mt-5">
      <div className="flex lg:gap-6 gap-10 lg:mt-0 mt-5">
        <img className='ms-5 lg:ms-0' src={props.icon} alt="" />
        <span className='lg:mt-5 ms-5 lg:ms-0'>{props.title}</span>
        <img className=' lg:mt-2 rounded-full ms-3 lg:ms-0' src={avatar2} alt="" />
      </div>
      <div className="flex lg:gap-20 gap-36 lg:mt-5 mt-5">
        <h1 className='lg:ms-8 ms-10 '>{props.number}</h1>
        <span className="percentage" style={{ color: props.percentage >= 0 ? 'limegreen' : 'tomato' }}>
          {props.percentage}%
        </span>
      </div>
      <div className="flex lg:gap-10 gap-36 lg:mt-0 mt-5">
        <span className="lg:ms-5 ms-5">this month</span>
        <Link to={'/'} style={{ color: props.color, textDecoration: 'none' }}>
          View all
        </Link>
      </div>

    </main>
  );
};

export default ChartBoxUser;
