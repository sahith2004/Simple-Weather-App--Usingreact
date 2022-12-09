import React,{useState,useEffect} from 'react'
import Navcomponent from '../Navcomponent/Navcomponent';
import axios from "axios";
import Cardcomponent from '../Cards/Cardcomponent';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Weather.css'

const Weather = () => {
    const [Humidity,setHumidity] = useState(0);
    const [WindSpeed , setWindSpeed] = useState(0);
    const [Temperature,setTemperature] = useState(0);
    const [searchdata , setSearchdata] = useState("Hyderabad");
    const [errorinfo , setError] = useState("");
    useEffect(() => {
      
    }, [Humidity,WindSpeed,Temperature,searchdata])
    
    const options = {
        method: 'GET',
        url: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather',
        params: {city: searchdata},
        headers: {
          'X-RapidAPI-Key': '6673ac05cbmsh64b21a865f6de6bp132951jsn7566ffb80d90',
          'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response) {
        console.log(response.data);
         const humid = response.data.humidity;
         const temp = response.data.temp;
         const wind = response.data.wind_speed;
          setHumidity(() => {
           return humid;
          })
          setTemperature(()=>{
            return temp;
          })
          setWindSpeed(()=>{
            return wind;
          })
           
      }).catch(function (error) {
          console.error(error);
          setError(()=>{
            return error;
          })

      });
     const clickftn = (e) =>{
       e.preventDefault();
       var element = document.getElementById("search").value;
       console.log(element);
       setSearchdata(()=>{
        return element;
       })
     }
  return (
    <>
    <Navcomponent></Navcomponent>
    
    <Form>
      <Form.Group className="m-5 d-flex form " controlId="formBasicEmail">
        
        <input type="text" id='search'  className=''placeholder='Search according to your location'></input>
        <Button  variant="primary" className="ml-2 p-3 " onClick={clickftn} >
        Search
      </Button>
      
      </Form.Group>

     <h3 className='m-5'>Press Search button to get weather report</h3> 
     
      
    </Form>
    <div className='container mx-auto'>{searchdata}</div>
    <div className='d-flex justify-content-around m-5'>
    <Cardcomponent title="HUMIDITY" info={Humidity} unit="%"></Cardcomponent>
    <Cardcomponent title="TEMPERATURE" info={Temperature} unit="degrees"></Cardcomponent>
    <Cardcomponent title="WIND SPEED" info={WindSpeed} unit="km/h"> </Cardcomponent>
    </div>
    </>
  )
}

export default Weather