import React, {useState, useEffect} from "react";
import corona from "../assets/corona.jpg"
import axios from "axios"
import CountUp from 'react-countup';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUsers, faBed, faSmileWink } from "@fortawesome/free-solid-svg-icons";
import Header from "./Header"
import { Bar, Line, Doughnut} from 'react-chartjs-2';
import ReactSearchBox from 'react-search-box'



function DataFetching() {

 

const [Confirmed, setConfirmed] = useState([])
const [Deaths, setDeaths] = useState([])
const [Recovered, setRecovered] = useState([])

useEffect(() => {
  axios
    .get("https://covid19.mathdro.id/api")
    .then(res => {
        console.log(res.data.con);
        setConfirmed(res.data.confirmed.value);
        setDeaths(res.data.deaths.value);
        setRecovered(res.data.recovered.value);
    })
    .catch(err =>{
        console.log(err)
    })
}, [])

const [loading, setLoading] = useState(true);
const [query, setQuery] = useState([""]);
const [countryName, setCountry] = useState()
const [IndiaConfirmed, setIndiaConfirmed] = useState([])
const [IndiaDeaths, setIndiaDeaths] = useState([])
const [IndiaRecovered, setIndiaRecovered] = useState([])


const search = evt=>{
  if(evt.key === "Enter") {
    fetch(`https://covid19.mathdro.id/api/countries/${query}`)
    .then(res => res.json())
    .then(result => 
      {
      
      setCountry(query);
      setIndiaConfirmed(result.confirmed.value);
      setIndiaDeaths(result.deaths.value);
      setIndiaRecovered(result.recovered.value);
      setQuery('');  
      setLoading(false);
      console.log(countryName);
  })
  .catch(err =>{
            console.log(err)
      })
   
  }
}


const dataIndia= {
  labels: ["Confirmed","Deaths","Recovered"],
  datasets: [{
  label: countryName,
  backgroundColor: 'black',
  borderColor: 'white',
  borderWidth: 2,
  hoverBackgroundColor: ["#40bad5","red","#75daad"],
  barThickness:60,
  data: [IndiaConfirmed,IndiaDeaths,IndiaRecovered],
  }],
  animation: {
    duration: 10000,
    easing: 'easeInQuad'
  }
};

const dataWorld = {
  labels: ["Confirmed","Deaths","Recovered"],
  datasets: [{
  label: "GLOBAL REPORT",
  backgroundColor: 'black',
  borderColor: 'white',
  borderWidth: 2,
  hoverBackgroundColor: ["#40bad5","red","#75daad"],
  barThickness:60,

  data: [Confirmed,Deaths,Recovered],
  }],
  animation: {
    duration: 10000,
    easing: 'easeInQuad'
  }
};

const dateBuilder = (d) =>{
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
  
    return `${day} ${date} ${month} ${year}`
  }

return (
<main>
<Header />

<div className="App">   
  <h1 className="date">{dateBuilder(new Date())}</h1>
<div className="banner-img">
      <div className="row1">
        <div className="col-md-2">
        <img className="ban-img1" src={corona} alt="corona" width="600" height="400"></img> 
        </div>
      <div className="col-md-2">
      <h4 className="text">Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.
    Most people infected with the COVID-19 virus will experience mild to moderate respiratory illness and recover without requiring special treatment.  Older people, and those with underlying medical problems like cardiovascular disease, diabetes, chronic respiratory disease, and cancer are more likely to develop serious illness.</h4>
      </div>
    </div>
</div>

{/* CORNA DASHBOARD Starts here */}

<div>
  <div className="location-box">
         <div className="temp"> 
         <div className="weather-box">
         <div>
         <img src="https://img.icons8.com/officel/80/000000/globe.png"/>
         </div>
         <div className="date">
     </div>
         <div className="weather-box">
         <div className="temp3">
                 <h3>
                                               Total Confirmed
                 </h3>
         <FontAwesomeIcon 
         className = "icons"
         icon={faUsers} color="#00bcd4" />
           <CountUp 
              start={0}
              end=  {Confirmed}
              duration={3}
               />
         </div>
         <div className="temp3">
                 <h3>
                                              Total Deaths
                 </h3>
         <FontAwesomeIcon 
         className = "icons"
         icon={faBed} color="red" />
           <CountUp 
              start={0}
              end=  {Deaths}
              duration={3}
               />
         </div>
         <div className="temp3">
                 <h3>
                                               Total Recovered
                 </h3>
         <FontAwesomeIcon 
         className = "icons"
         icon={faSmileWink} color="green" />
        <CountUp 
              start={0}
              end=  {Recovered}
              duration={3}
               />
         </div>
       </div>
       <div className="Stats">
       <div className="graph">                  
             <Line
               data={dataWorld}
               width={200}
               height={200}
               options={{ maintainAspectRatio: false }}
             />
             </div>

       </div>
       </div>
       <div className="weather-box">
         
     
       <div class="search-bar row1">
       <div className = "search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="Search Country..."                                 //SEARCH_BOX
            onChange={e=> setQuery(e.target.value)}
            value={query}
            onKeyPress = {search}
          />
        </div>
       </div>
       <div className="weather-box">
         <div className="temp3">
                 <h3>
                                               Total Confirmed
                 </h3>
         <FontAwesomeIcon 
         className = "icons"
         icon={faUsers} color="#00bcd4" />
           <CountUp 
              start={0}
              end=  {IndiaConfirmed}
              duration={3}
               />
         </div>
         <div className="temp3">
                 <h3>
                                              Total Deaths
                 </h3>
         <FontAwesomeIcon 
         className = "icons"
         icon={faBed} color="red" />
           <CountUp 
              start={0}
              end=  {IndiaDeaths}
              duration={3}
               />
         </div>
         <div className="temp3">
                 <h3>
                                               Total Recovered
                 </h3>
         <FontAwesomeIcon 
         className = "icons"
         icon={faSmileWink} color="green" />
        <CountUp 
              start={0}
              end=  {IndiaRecovered}
              duration={3}
               />
         </div>
       </div>
       <div className="Stats">
       <div className="graph">                  <Line
               data={dataIndia}
               width={200}
               height={200}
               options={{ maintainAspectRatio: false }}
             />
             </div>
       </div>
</div>
</div>
</div>
</div>
</div>
</main>
);

}

  

export default DataFetching











