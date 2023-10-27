import React from 'react'
import { userDetails } from './TopboxList'

const Topbox = () => {
    return (
        <div className='lg:ms-6 ms-5 text-white'>
            <h1 className='text-[24px] mb-[20px] font-serif font-bold'>Top Deals</h1>

            <div className='font-serif'>
                {
                    userDetails.map((item, i) => (
                        <div className='d-flex lg:align-items-center lg:justify-content-space-between mb-[30px]' key={i}>
                            <div className='grid lg:grid-cols-2 lg:gap-20 grid-cols-3'>
                               
                                    <img className='lg:hidden rounded-full w-[50px] h-[50px] ' src={item.img} alt="" />
                               
                                <div>
                                    <p className='w-[150%]'>{item.username}</p>
                                    <p className='w-[180%]'>{item.email}</p>
                                </div>
                                <div>
                                    <p className='lg:ms-0 ms-10'>${item.amount}</p>
                                </div>
                            </div>

                        </div>
                    ))
                }
            </div>

        </div>

    )
}

export default Topbox