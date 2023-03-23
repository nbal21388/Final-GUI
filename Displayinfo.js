  
  import Weathericons from "./Weathericons"
  import styles from './DisplayInfo.css'
  // import image from "./public/icons/SkiCast.png";
  //TASK TO DO
   // align everything using CSS for eg temperature must be at top and the rest conditions bottom
    //find and align images for these conditions 
  //To display information everyting is in object called weatherData
  
  // if time user enter website<sunset time make background dark (show night) both users current time and sunset sunrise timings are in object called weatherData
  
 
 

 function Displayinfo(props){
    const{weatherData}=props
    console.log(weatherData)


    return ( 
        <>
          {weatherData ? (
            <div className="main">
              {/* <div style= "backgroundRepeat:no-repeat; backgroundSize:contain; height:200; width:200;">
                <img src="logo.png" className="App-logo" alt="logo" />
              </div> */}
              {/* <Background backgrounds={weatherData.background} className="background" style="width: 20em; height: 20em;"/> */}
              
              <div className="content">
                
                <div className="maininfo">
                  <p className="location">{weatherData.locationName}</p>
                  <p className="datetime">{weatherData.currentTime}</p>
                  {/* <p>Time: {weatherData.Time}</p>
                  <p>Date: {weatherData.Date}</p> */}
                  <div className="sun">
                    <p>Sunrise: {weatherData.Sunrise}</p>
                    <p>Sunset: {weatherData.Sunset}</p>
                  </div>
                  <p className="temp">{Math.round(weatherData.Temperature)}°C</p>
                  <p className="description">{weatherData.weatherDescription} </p> 
                  <div className="descriptionicon">
                    <Weathericons className="icon" icons={weatherData.icon}/>
                    
                  </div>
                </div>
                <div className="allInfo">
                  <div className="generalinfo">
                    <p id="today">Today</p>
                    <ol id="generalinfo">
                        <li>Rainfall: {weatherData.Rainfall}</li>
                        <li>Humidity: {weatherData.Humidity}</li>
                        <li>Pressure: {weatherData.Pressure}</li>
                    </ol>
                  </div>
                  <div className="skiersinfo">
                    <p id="info">Skiers</p>
                    <ol id="skiersinfo">
                        <li>Snow: {weatherData.Snow}</li>
                        <li>Visibility: {weatherData.Visibility}</li>
                        <li>Wind Speed:{weatherData.WindSpeed}</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            console.log('some data loading')
          )}
        </>
      );

          }
        
    export default Displayinfo;
 
  