import React from 'react'
import { Link } from 'react-router-dom';
import avatar2 from '../Chartbox/avatar2.jpg'


const ChartBoxProduct = (props) => {
 
    return (
        <main className="border rounded text-white font-serif lg:w-[80%] w-[100%] lg:ms-5 ms-0 lg:mt-0 mt-5">
        <div className="flex lg:gap-3 gap-10 mt-3 lg:mt-0">
          <img className='lg:ms-0 ms-10' src={props.icon} alt="" />
          <span className='lg:mt-5'>{props.title}</span>
          <img className=' lg:mt-2 rounded-full' src={avatar2} alt="" />
        </div>
        <div className="flex lg:gap-20 gap-36 lg:mt-5 mt-5">
          <h1 className='lg:ms-8 ms-10'>{props.number}</h1>
          <span className="percentage ms-10 lg:ms-0" style={{ color: props.percentage >= 0 ? 'limegreen' : 'tomato' }}>
            {props.percentage}%
          </span>
        </div>
        <div className="flex lg:gap-10 lg:mt-0 mt-5 gap-36">
          <span className="lg:ms-5 ms-5">this month</span>
          <Link to={'/'} style={{ color: props.color, textDecoration: 'none' }}>
            View all
          </Link>
        </div>
  
      </main>
    

      
  )
}

export default ChartBoxProduct