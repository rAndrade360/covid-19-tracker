import React,{useState, useEffect} from 'react';
import fetchData from './services/api';
import './App.css';
import Card from './components/Card';
import Select from './components/Select';
import Chart from './components/Chart';


function App() {
  const [todayData, setTodayData] = useState({});
  const [country, setCountry] = useState({});
  

  async function getData(query="", country=""){
    const res = await fetchData(query);
    const obj = {
      confirmed: res.confirmed.value,
      deaths: res.deaths.value,
      recovered: res.recovered.value,

    }
    setTodayData(obj)
    setCountry(country)
    }
  
  useEffect(()=>{
    getData()
  }, []);

  return (
    <div className="App center">
      <h1>Covid-19</h1>
      <div className="cards center">
        <Card
          description="Number of active cases of"
          color="#764ac1ee"
          data={todayData.confirmed}
          title='Infected' />
        <Card
          description="Number of recovered cases of"
          color="#00ff66"
          data={todayData.recovered}
          title='Recovered'/>
        <Card
          description="Number of deaths caused by"
          color="#ff3c00bb"
          data={todayData.deaths}
          title='Deaths'
          />
      </div>
      <Select countryData={getData} />
      <Chart countryData={todayData} country={country} /> 
    </div>
  );
}

export default App;
