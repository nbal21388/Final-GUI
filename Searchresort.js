import React, { useState, useEffect} from "react";
import Apirequest from "./Apirequest";
import styles from './Dropdown.css';

function Searchresort() {
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestValues, setSuggestValues] = useState([]);
  const [showBar, setShowBar]=useState(false)
 
  
  

  const handleSuggestionClick = (lat, lon) => {
 
    setLat(lat);
    setLon(lon);
    setSearchTerm("")
    setShowBar(false)
    
  };

  useEffect(() => {
    const fetchSuggestions = async () => {
      const response = await fetch(`https://api.myptv.com/geocoding/v1/locations/by-address?locality=${searchTerm}&apiKey=RVVfMWU0MDVlNWEzMTYwNDZlZDlhZjEzYTBkOGQ2YzM1N2E6ZTYxYTc3MGMtNWI4ZC00NGE0LTllMTctNWRiYjY2M2Q0YWQ1`);
      const data = await response.json();
      console.log(data);
      
      
      if (data.locations && data.locations.length > 0) {
        // Extract the suggest values from the API response
        const suggestValues = data.locations.slice(0,7).map((location) => ({
          latitude: location.referencePosition.latitude,
          longitude: location.referencePosition.longitude,
          formattedAddress: location.formattedAddress,
        }));
        // Set the suggestValues state to hold the suggest values only if data is not null
        setSuggestValues(suggestValues);
      }
    };
    
 
    fetchSuggestions();
    
  }, [searchTerm]);
  


  return (
   
    <div>
      <nav>
        <ul>
          <li>
            <a href="https://openskimap.org/#2/40/-100">Map</a>
          </li>
          <li>
            <a href="https://www.skibro.com/blog/en/learn-how-to-ski-the-ultimate-beginners-guide/">Guide</a>
          </li>
          <input
            className="searchbar"
            type="text"
            placeholder="Search"
          
            value={searchTerm}
            onChange={(e) => {setSearchTerm(e.target.value);  setShowBar(true)}}
          />
         <button onClick={() => {setShowBar(false); setSearchTerm("")}}>
         <img className="cross" src="./icons/remove.png" alt="cross" width="20" height="20" />
        </button>

  
          
        </ul>
      </nav>
       <div className="suggestionsbox">
       {showBar&&
       suggestValues.map((suggest,index) => (
  <option className='suggestions' key={index} onClick={() => handleSuggestionClick(suggest.latitude, suggest.longitude)}>
    {suggest.formattedAddress}
    
  </option>
))}

       </div>
        
       <Apirequest lat={lat} lon={lon}/>
       
    </div>
  
      
     
  );
    
}



export default Searchresort; 



 
   







