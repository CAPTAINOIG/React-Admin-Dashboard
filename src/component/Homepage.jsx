import React from 'react'
import Topbox from '../pages/Top/Topbox'
import ChartBoxUser from '../pages/Chartbox/ChartBoxUser'
import { ChartBox, chartBoxRevenue, chartBoxConversion, chartProduct } from '../data'
import ChartBoxProduct from '../pages/ChartProduct/ChartBoxProduct'
// import PieChartBox from '../pages/PieBox/PieChartBox'
import BigChartbox from '../pages/bigChartbox/BigChartbox'
import ChartBoxRevenue from '../pages/ChartRevenue/ChartBoxRevenue'
import ChartBoxConversion from '../pages/BoxConversion/ChartBoxConversion'
import BarChartBoxRevenue from '../pages/BoxRevenue/BarChartBoxRevenue'




const Homepage = () => {
  return (
    <>
      <>
        <section className="grid lg:grid-cols-4 grid-cols-1 lg:ms-5 grid-auto-rows-[180px] lg:p-0 p-5">
          <div className="border rounded-lg text-1xl">
            <Topbox />
          </div>
          
          <div>
          <ChartBoxUser {...ChartBox} />
          <ChartBoxRevenue />
          <ChartBoxConversion {...chartBoxConversion}/>
          <BarChartBoxRevenue {...chartBoxRevenue}/>
          </div>
         
          <div>
            <ChartBoxProduct {...chartProduct} />
          </div>
          <BigChartbox />
        </section>
       

      </>
    </>
  )
}

export default Homepage