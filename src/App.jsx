import React from 'react'
import { ThemeProvider } from "styled-components";
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import Theme from './theme/theme';
import Drawer from '@mui/material/Drawer';
import DrawerContent from './components/DrawerContent';
import axios from 'axios'


export default function App() {
    const [state, setState] = React.useState(false)
    const [weatherData, setWeatherData] = React.useState()
    const [location, setLocation] = React.useState("lisbon")
    const [currentLocation, setCurrentLocation] = React.useState([])
    const [tempFormat, setTempFormat] = React.useState("celsius")

    React.useEffect(() => {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                async function fetchData() {
                    const request = await axios.get(
                        "https://afternoon-ridge-35420.herokuapp.com/https://www.metaweather.com/api/location/search",
                        {
                            params: {
                                lattlong: `${position.coords.latitude},${position.coords.longitude}`,
                            },
                        }
                        )
                        .then((response) => {
                            setCurrentLocation(response.data[0])
                            
                        })
                        .catch(function (error) {
                            console.log("I am not running");
                            
                        });  
                    return request                              
                }
                fetchData();                                
            })
        }

        if(currentLocation.woeid) {
            async function fetchData() {
                const request = await axios.get(`https://afternoon-ridge-35420.herokuapp.com/https://www.metaweather.com/api/location/${currentLocation.woeid}/`)
                
                .then((response) => {
                    setWeatherData(response.data.consolidated_weather)
                })
                .catch(function (error) {
                    console.log("I am not running");
                })
                
                return request
            }
            fetchData()
        } 

        
    }, [currentLocation.woeid])

    console.log(weatherData)

    // url for api lisbon location "https://www.metaweather.com/api/location/742676/"

    
    function toggleDrawer(open) {
              return function (event) {
                  return setState(open)
              }
          }     

    function getCurrentPosition(){
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                axios
                .get(
                    "https://afternoon-ridge-35420.herokuapp.com/https://www.metaweather.com/api/location/search",
                    {
                        params: {
                            lattlong: `${position.coords.latitude},${position.coords.longitude}`,
                        },
                    }
                )
                .then((response) => {
                    setCurrentLocation(response.data[0])
                    
                })
                .catch(function (error) {
                    console.log("I am not running");
                    
                });                                
            })
        }
        getWeatherData()
    }
    
    function getWeatherData() {
        axios
        .get(`https://afternoon-ridge-35420.herokuapp.com/https://www.metaweather.com/api/location/${currentLocation.woeid}/`)
        
        .then((response) => {
            setWeatherData(response.data.consolidated_weather)
        })
        .catch(function (error) {
            console.log("I am not running");
        })
        
    }
    

    return (
        <div className="page__wrapper flex-row">
            <ThemeProvider theme={Theme}>
                {!weatherData && 
                    <h1>Loading Data</h1>
                }
                {weatherData && <>                
                    <Sidebar 
                    toggleDrawer={toggleDrawer}
                    currentPosition={getCurrentPosition}
                    weatherData={weatherData}
                    currentLocation={currentLocation}
                    theme={Theme}
                    tempFormat={tempFormat}
                    />
                    <Drawer 
                    anchor={'left'}
                    open={state}
                    onClose={toggleDrawer(false)}
                    >
                        <DrawerContent />
                    </Drawer>
                    <Main 
                    weatherData={weatherData}
                    theme={Theme}
                    tempFormat={tempFormat}
                    />
                </>}
            </ThemeProvider>
        </div>
    )
}