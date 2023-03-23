import { useState } from "react";
import Weathericons from './Weathericons'
import styles from './Dropdown.css'

function Dropdown({ tempByHours, tempByDays }) {
  const [view, setView] = useState("daily");
  
  console.log(tempByHours)
  console.log(tempByDays)
  function handleOptionChange(event) {
    const value = event.target.value;
    if (value === "daily") {
      setView("daily");
      
    } else if (value === "weekly") {
      setView("weekly");
     
    }
  }

  return (
     <div>
      <select value={view} onChange={handleOptionChange}>
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
      </select>
     
      <div className="Dropdown">
  {view === "daily" ? (
    // map tempbyhours here
    tempByHours.map(temp => (
      <p key={temp.time}>
        <Weathericons icons={temp.icon} className="icon" />
        <span className="temp-temperature">{Math.round(temp.temp)}&deg;C</span> 
        <span className="temp-time">{temp.time}</span> 
      </p>
    ))
  ) : (
    // map tempbydays here
    tempByDays.map(temp => (
      <p key={temp.dayName}>
        <Weathericons icons={temp.weatherIcon} className="icon" />
        <span className="temp-temperature">
          Max: {Math.round(temp.maxTemp)}&deg;C 
          <br></br>
          Min: {Math.round(temp.minTemp)}&deg;C
        </span>
        <span className="temp-time2">{temp.dayName}</span>
      </p>
    ))
  )}
</div>

      </div>
  
  );
}

export default Dropdown;
