import React, {useState, useEffect} from 'react';
import fetchData from '../../services/api'
import Selecti from 'react-select';

 import './styles.css';

export default function Select({countryData}) {
  const [countries, setCountries] = useState({});
  useEffect(()=>{
    async function getData(){
    const res = await fetchData('/countries');
    const obj = res.countries.map(contry=>(
      {
        value: contry.iso3,
        label: contry.name

      }
    ))
    setCountries(obj)
    }
    getData()
  })
  return (
    <div className="select">
    <Selecti  onChange={(value)=>{countryData(`/countries/${value.value}`, value.label); console.log(value)}} options={countries} />
    </div>
  );
}
