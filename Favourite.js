import React, { useState, useEffect } from 'react';
import styles from './Dropdown.css'


function Favourite() {
  const [showLocations, setShowLocations] = useState(false);
  const [location, setLocation] = useState('');
  const [locations, setLocations] = useState([]);
  const [openAdd,setopenAdd]= useState("")
  
  

  useEffect(() => {
    // Retrieve saved locations from localStorage
    const savedLocations = localStorage.getItem('locations');
    if (savedLocations) {
      setLocations(JSON.parse(savedLocations));
    }
  }, []);

  const handleClick = () => {
    setShowLocations(!showLocations);
    
    
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (location.trim() !== '') {
      if (locations.length < 7) { // Check if locations length is less than 7
        const updatedLocations = [...locations, location];
        setLocations(updatedLocations);
        localStorage.setItem('locations', JSON.stringify(updatedLocations));
      } else {
        alert('You can add a maximum of 7 locations');
      }
      setLocation('');
      setopenAdd(false);
    }
  };
  

  const handleRemove = (index) => {
    const updatedLocations = [...locations];
    updatedLocations.splice(index, 1);
    setLocations(updatedLocations);
    localStorage.setItem('locations', JSON.stringify(updatedLocations));
  };

  const handleAdd= () =>
  {
    setopenAdd(!openAdd)
  }

  return (
    <div className="sidebar">
      <p className="headeroflocations">Saved places</p>
     <nav>
     <img className="favicon" src="./icons/favourite.png"  alt="fav" width="20" height="20" onClick={handleClick} />
     </nav>
     <div className="addedlocations">
      {openAdd && (
        <form onSubmit={handleSubmit}>
          <input type='text' value={location} onChange={(event) => setLocation(event.target.value)} />
          <button type="submit">Enter</button>
        </form>
      )}
      {showLocations && (
        <ul>
        {locations.map((loc, index) => (
          <li key={index}>
                  <img src="./icons/location.png" alt='location' width="20" height="20"></img>
            {loc} <img src="./icons/remove.png" alt="remove" width="20" height="20" onClick={() => handleRemove(index)} />
         
          </li>
          
        ))}
               <img className="addicon" src="./icons/add.png" onClick={handleAdd} alt="add" width="40" height="40"/>

      </ul>
      
      )}
    </div>
    
    </div>
  );
}

export default Favourite;


