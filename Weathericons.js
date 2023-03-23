

function Weathericons({ icons }) {
    let imagePath;
    
    switch (icons) {
      case "01d":
        imagePath = "./icons/clear-sky.png";
        break;
      case "01n":
        imagePath = "./icons/clear-skynight.png";
        break;
      case "02d":
        imagePath = "./icons/few-clouds.png";
        break;
      case "02n":
        imagePath = "./icons/few-cloudsnight.png";
        break;
      case "03d":
        imagePath = "./icons/scattered-clouds.png";
        break;
      case "03n":
        imagePath = "./icons/scattered-cloudsnight.png";
        break;
      case "04d":
        imagePath = "./icons/broken-clouds.png";
        break;
      case "04n":
        imagePath = "./icons/broken-cloudsnight.png";
        break;
      case "09d":
        imagePath = "./icons/showerrain.png";
        break;
      case "09n":
        imagePath = "./icons/showerrainnight.png";
        break;
      case "10d":
        imagePath = "./icons/rain.png";
        break;
      case "10n":
        imagePath = "./icons/rainnight.png";
        break;
      case "11d":
        imagePath = "./icons/thunderstorm.png";
        break;
      case "11n":
        imagePath = "./icons/thunderstormnight.png";
        break;
      case "13d":
        imagePath = "./icons/snow.png";
        break;
      case "13n":
        imagePath = "./icons/snownight.png";
        break;
      case "50d":
        imagePath = "./icons/mist.png";
        break;
      default:
        imagePath = "";
        break;
    }
    

  
      

    
    
    
    return<>
    
    <img src={imagePath} alt={"Not available"} width="100" height="100" />
    </> 
    
  }

  export default Weathericons