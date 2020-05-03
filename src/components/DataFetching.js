import React, {useState, useEffect} from "react"
import axios from "axios"
import CountUp from 'react-countup';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUsers, faBed, faSmileWink } from "@fortawesome/free-solid-svg-icons";
import Header from "./Header"
import { Bar, Line, Doughnut} from 'react-chartjs-2';



function DataFetching() {

const [Confirmed, setConfirmed] = useState([])
const [Deaths, setDeaths] = useState([])
const [Recovered, setRecovered] = useState([])
const [IndiaConfirmed, setIndiaConfirmed] = useState([])
const [IndiaDeaths, setIndiaDeaths] = useState([])
const [IndiaRecovered, setIndiaRecovered] = useState([])

useEffect(() => {
  axios
    .get("https://api.covid19api.com/summary")
    .then(res => {
        console.log(res.data);
        setConfirmed(res.data.Global.TotalConfirmed);
        setDeaths(res.data.Global.TotalDeaths);
        setRecovered(res.data.Global.TotalRecovered);
        setIndiaConfirmed(res.data.Countries[100].TotalConfirmed);
        setIndiaDeaths(res.data.Countries[100].TotalDeaths);
        setIndiaRecovered(res.data.Countries[100].TotalRecovered);
    })
    .catch(err =>{
        console.log(err)
    })
}, [])


const dataIndia= {
  labels: ["Confirmed","Deaths","Recovered"],
  datasets: [{
  label: "INDIAN REPORT",
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
    <div className= 'app'>
     <Header />
      <main>
       <div>
       <div className="location-box">
       <div className="date">
            <h1 class = "headings">
                                Corona Pandemic Updates
            </h1>
          </div>
           
              <div className="temp"> 
            
             
              <div className="weather-box">
              <div>
              <img src="https://img.icons8.com/officel/80/000000/globe.png"/>

              </div>
              <div className="date">
            {dateBuilder(new Date())}
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
              
            <div className="weather">
              <h2>INDIA, IN         
              </h2>
              </div>
            <div><img class="pic" src="https://img.icons8.com/cute-clipart/64/000000/india.png" width="90"/> </div>  
              
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
           
     {/* <div>
            <img  class="doc" src="https://i.pinimg.com/originals/26/4e/30/264e30439c42387c1e3c48d2d038429d.png" width="300"/>
            <img class="doc" src="https://st4.depositphotos.com/1642684/20193/v/450/depositphotos_201930658-stock-illustration-vector-illustration-washing-hands.jpg" width="300"/>
            </div>
          
            <div className="temp3">
                     <h4>"Symptoms"</h4>
                      <img src="https://img.icons8.com/color/96/000000/coughing--v2.png"/>
                      <img src="https://img.icons8.com/clouds/100/000000/fever.png"/>
                      <img src="https://img.icons8.com/color/96/000000/protection-mask.png"/>
          
              </div>
              <div className="temp3">
                     <h4>"Precautions"</h4>
        
              
                <p class="a">Before putting on a mask, clean hands with alcohol-based hand rub or soap and water.</p>
                <p class="b">Cover mouth and nose with mask and make sure there are no gaps between your face and the mask.</p>
               <p class="c">Avoid touching the mask while using it; if you do, clean your hands with alcohol-based hand rub or soap and water.</p>
           

               
              
            </div>
           

            <div className="temp3">
          

            
            <img src="https://images.jansatta.com/2020/04/Aarogya-Setu-app-coronavirus.jpg" width="200"/>
           
            </div>



            
            <div className="temp3">
            <a href="https://play.google.com/store/apps/details?id=nic.goi.aarogyasetu&hl=en_IN">

            <h4>"Download for Play-Store"</h4>
            <img src="https://img.icons8.com/plasticine/100/000000/playstore.png"/>              
            </a>
            </div>
            <div className="temp3">
            <a href="https://apps.apple.com/in/app/aarogyasetu/id1505825357">

            <h4>"Download for App-Store"</h4>

            <img src="https://img.icons8.com/color/144/000000/apple-app-store--v1.png"/>              
            </a>
            </div>
              
          
           */}
            </div>
            </div>
            {/* INDIAN CORONAVIRUS REPORT */}
          
          
          
          </div>
       </div>
       
      </main>
    
    </div>
);


}

  

export default DataFetching
