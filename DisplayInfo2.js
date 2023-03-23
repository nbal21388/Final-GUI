
  import Weathericons from "./Weathericons"
  import Background from "./Background"
  import styles from './DisplayInfo.css'
  // import styles from './Display.css'
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
              {/* <Background backgrounds="change" className="background" /> */}
              {/* <img className="background" src="backgrounds/Sunset.png"/> */}
              <div className="content">
                {/* <div className="search">
                  <img className="searchicon" src="infoicons/search.png" alt="search icon"/>
                  <p>search bar</p>
                </div> */}
                <div className="maininfo">
                  <p className="location">{weatherData.locationName}</p>
                  <p className="datetime">{weatherData.currentTime}</p>
                  {/* <p>Time: {weatherData.Time}</p>
                  <p>Date: {weatherData.Date}</p> */}
                  <div className="sun">
                    <p>Sunrise: {weatherData.Sunrise}</p>
                    <p>Sunset: {weatherData.Sunset}</p>
                  </div>
                  <p className="temp">{Math.round(weatherData.Temperature)} &deg;C</p>
                  <p className="description">{weatherData.weatherDescription} </p> 
                  <div className="descriptionicon">
                    <Weathericons icons={weatherData.icon}/>
                  </div>
                </div>
                <div className="allInfo">
                  <h3 id="today">Today</h3>
                  <div className="generalinfo">
                    
                        <p>
                          <img className="infoicon" src="infoicons/rainfall.png" alt="search icon"/>
                          <span>Rainfall: {weatherData.Rainfall}</span>
                        </p>
                        <p>
                          <img className="infoicon" src="infoicons/humidity.png" alt="search icon"/>
                          <span>Humidity: {weatherData.Humidity} %</span>
                        </p>
                        <p>
                          <img className="infoicon" src="infoicons/pressure.png" alt="search icon"/>
                          <span>Pressure: {weatherData.Pressure} Pa</span>
                        </p>
                  </div>
                  <h3 id="info">Skiers</h3>
                  <div className="skiersinfo">
                    
                    <p>
                      <img className="infoicon" src="infoicons/snow.png" alt="search icon"/>
                      <span>Snow: {weatherData.Snow}</span>
                    </p>
                    <p>
                      <img className="infoicon" src="infoicons/visibility.png" alt="search icon"/>
                      <span>Visibility: {weatherData.Visibility}</span>
                    </p>
                    <p>
                      <img className="infoicon" src="infoicons/windspeed.png" alt="search icon"/>
                      <span>Wind Speed: {weatherData.WindSpeed}</span>
                    </p>
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
 
  
