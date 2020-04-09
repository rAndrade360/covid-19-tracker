import React, {useEffect, useState} from 'react';
import {Line, Bar} from 'react-chartjs-2';
import fetchData from '../../services/api'
 import './styles.css';



export default function Chart({countryData, country}) {
  const [dailyData, setDailyData] = useState([])
  useEffect(()=>{
   async function getDailyData(){
      const res = await fetchData('/daily');
      const obj = res.map(({confirmed, deaths, reportDate: date})=>({
        confirmed: confirmed.total,
        deaths: deaths.total,
        date
      }))
      setDailyData(obj)
    }
    getDailyData();
  }, [])


  const LineChart = (
    dailyData[0]?
    <Line 
      data={
        {
          labels: dailyData.map(({date})=>(date)),
          datasets: [{
            data: dailyData.map(({confirmed})=>confirmed),
            label: 'Infected',
            borderColor: '#33f',
            fill: true,
          },
          {
            data: dailyData.map(({deaths})=>deaths),
            label: 'Deaths',
            borderColor: '#f009',
            fill: true,
          }
        ]
        }
      }
    />: null
  )
  const BarChart = (
    countryData?
    <Bar
    data={
      {
        labels: ['infected', 'recovered', 'deaths'],
        datasets:[
          {
            label: 'People',
            backgroundColor: ['#764ac1ee', '#00ff66', '#ff3c00bb'],
            data: [countryData.confirmed, countryData.recovered, countryData.deaths]
          }
        ]
      }
    }
    options={
      {
        legend: {display: false},
        title: {display: true, text: `Current state in ${country}`}
      }
    }
    />:null
  )
  return (
    <div className="chart">
      {country?BarChart:LineChart}
    </div>
  );
}
