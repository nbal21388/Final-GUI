import axios from 'axios';
import { useState, useEffect } from 'react';
import Displayinfo from './Displayinfo';
import Dropdown from './Dropdown';



function Apirequest(coord) {
   
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [weatherObject, setWeatherObject] = useState(null); // create object to hold weather info like temp, pressure, humidity
  const [tempByHours, settempByHours] = useState([]); // have array to store temp for next 18 hours
  const [tempByDays, settempByDays] = useState([]); // have array to store temp for next 5 days

  useEffect(() => {  // get user's current location and assign it to latitude and longitude variables
    if(coord.lat && coord.lon)
    {
     
       setLatitude(coord.lat)
       setLongitude(coord.lon)
    }
    else if (navigator.geolocation) {
      
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      });
    }
  }, [coord.lat,coord.lon]); 
  
  

  useEffect(() => {
    const fetchData = async () => {
      if (latitude && longitude) {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=0c7b11f2f1c3bc95b00079ac6cda627c&units=metric`);
        console.log('F')
        console.log(response)
        const sunrise = new Date(response.data.sys.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
        const sunset = new Date(response.data.sys.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
        const currentTime = new Date().toLocaleString();
        
        const weatherData = { 
          locationName: response.data.name,
          weatherDescription: response.data.weather[0].description,
          Temperature: response.data.main.temp,
          WindSpeed: response.data.wind.speed,
          Rainfall: response.data.rain ? response.data.rain["1h"] : "0",
          Snow: response.data.snow ? response.data.snow["1h"] : "0",
          Visibility: response.data.visibility,
          Humidity: response.data.main.humidity,
          Pressure: response.data.main.pressure,
          Sunrise: sunrise,
          Sunset: sunset,
          currentTime: currentTime,
          icon: response.data.weather[0].icon
        };
        
        const response2 = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=0c7b11f2f1c3bc95b00079ac6cda627c&units=metric`);
        
               
        if(response2.data && response2.data.list){
          const hourlyTemps = response2.data.list.map((hour) => ({
            temp: hour.main.temp,
            time: new Date(hour.dt_txt).toLocaleTimeString('en-US', { hour: 'numeric', hour12: true }),
            description: hour.weather[0].description,
            icon:hour.weather[0].icon
           
          }));
          const firstTwelveHours=hourlyTemps.slice(0,6);

       

// Create an object to store the data for each day
const dailyData = {};

// Loop through the data and extract the necessary information for each day
response2.data.list.forEach((item) => {
  // Extract the date from the timestamp and convert it to a string in the format "YYYY-MM-DD"
  const date = new Date(item.dt * 1000).toISOString().slice(0, 10);

  // If the date is not already in the `dailyData` object, create a new object for it
  if (!dailyData[date]) {
    dailyData[date] = {
      minTemp: item.main.temp_min,
      maxTemp: item.main.temp_max,
      weatherIcon: item.weather[0].icon,
    
      dayName: new Date(item.dt * 1000).toLocaleDateString("en-US", { weekday: "long" })
    };
  } else {
    // If the date is already in the `dailyData` object, update the minTemp and maxTemp if necessary
    dailyData[date].minTemp = Math.min(dailyData[date].minTemp, item.main.temp_min);
    dailyData[date].maxTemp = Math.max(dailyData[date].maxTemp, item.main.temp_max);
  }
});

// Convert the dailyData object to an array of 5 items
const dailyDataArray = Object.values(dailyData).slice(0, 5);

        setWeatherObject(weatherData); //store live conditions in object called weatherData
        settempByHours(firstTwelveHours)
        settempByDays(dailyDataArray);
      
      }
      else {
        console.log('data is undefined');
      }
     
      
     } };
    fetchData();
  }, [latitude, longitude]);

  return (
    <div>
      {weatherObject && <Displayinfo weatherData={weatherObject} />}
      {<Dropdown tempByHours={tempByHours} tempByDays={tempByDays} />}
    </div>
  );
}

export default Apirequest;