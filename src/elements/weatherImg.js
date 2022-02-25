import React from 'react';

function weatherImg(props) {
    const todayState = props.text
    let weatherImg = ""
    
    switch(todayState){
            default:
                weatherImg = props.theme.images.clear
            break
            case "Blowing snow":
                weatherImg = props.theme.images.snow
            break
            case "Blizzard":
                weatherImg = props.theme.images.snow
            break
            case "Light snow":
                weatherImg = props.theme.images.snow
            break
            case "Light snow showers":
                weatherImg = props.theme.images.snow
            break
            case "Moderate or heavy snow showers":
                weatherImg = props.theme.images.snow
            break
            case "Patchy moderate snow":
                weatherImg = props.theme.images.snow
            break
            case "Moderate snow":
                weatherImg = props.theme.images.snow
            break
            case "Patchy light snow":
                weatherImg = props.theme.images.snow
            break
            case "Patchy sleet nearby":
                weatherImg = props.theme.images.sleet
            break
            case "Light freezing rain":
                weatherImg = props.theme.images.sleet
            break
            case "Light sleet":
                weatherImg = props.theme.images.sleet
            break
            case "Light sleet showers":
                weatherImg = props.theme.images.sleet
            break
            case "Moderate or heavy sleet showers":
                weatherImg = props.theme.images.sleet
            break
            case "Moderate or heavy sleet":
                weatherImg = props.theme.images.sleet
            break
            case "Freezing drizzle":
                weatherImg = props.theme.images.sleet
            break
            case "Heavy freezing drizzle":
                weatherImg = props.theme.images.sleet
            break
            case "Patchy freezing drizzle":
                weatherImg = props.theme.images.sleet
            break
            case "Patchy snow nearby":
                weatherImg = props.theme.images.hail
            break
            case "Freezing fog":
                weatherImg = props.theme.images.hail
            break
            case "Heavy snow":
                weatherImg = props.theme.images.hail
            break
            case "Ice pellets":
                weatherImg = props.theme.images.hail
            break
            case "Light showers of ice pellets":
                weatherImg = props.theme.images.hail
            break
            case "Moderate or heavy showers of ice pellets":
                weatherImg = props.theme.images.hail
            break
            case "Patchy light snow in area with thunder":
                weatherImg = props.theme.images.hail
            break
            case "Moderate or heavy snow in area with thunder":
                weatherImg = props.theme.images.hail
            break
            case "Thundery outbreaks in nearby": 
                weatherImg = props.theme.images.thunderStorm
            break
            case "Moderate or heavy rain in area with thunder": 
                weatherImg = props.theme.images.thunderStorm
            break
            case "Patchy light rain in area with thunder": 
                weatherImg = props.theme.images.thunderStorm
            break
            case "Moderate rain at times":
                weatherImg = props.theme.images.heavyRain
            break
            case "Moderate rain":
                weatherImg = props.theme.images.heavyRain
            break
            case "Heavy rain":
                weatherImg = props.theme.images.heavyRain
            break
            case "Heavy rain at times":
                weatherImg = props.theme.images.heavyRain
            break
            case "Patchy light drizzle":
                weatherImg = props.theme.images.lightRain
            break
            case "Light rain":
                weatherImg = props.theme.images.lightRain
            break
            case "Patchy light rain":
                weatherImg = props.theme.images.lightRain
            break
            case "Light drizzle":
                weatherImg = props.theme.images.shower
            break
            case "Light rain shower":
                weatherImg = props.theme.images.shower
            break
            case "Torrential rain shower":
                weatherImg = props.theme.images.shower
            break
            case "Patchy rain nearby":
                weatherImg = props.theme.images.shower
            break
            case "Cloudy":
                weatherImg = props.theme.images.heavyCloud
            break
            case "Overcast":
                weatherImg = props.theme.images.heavyCloud
            break
            case "Partly cloudy":
                weatherImg = props.theme.images.lightCloud
            break
            case "Mist":
                weatherImg = props.theme.images.lightCloud
            break
            case "Fog":
                weatherImg = props.theme.images.lightCloud
            break
            case "Sunny": 
                weatherImg = props.theme.images.clear
            break            
            case "Clear": 
                weatherImg = props.theme.images.clear
            break            
    }


  return (  
    <img src={weatherImg} alt="" className="sidebar__weatherimg" />
  )
}

export default weatherImg




