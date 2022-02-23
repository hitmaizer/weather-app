import React from 'react'
import { ThemeProvider } from "styled-components";
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import Theme from './theme/theme';
import Drawer from '@mui/material/Drawer';
import DrawerContent from './components/DrawerContent';
import axios from 'axios'
import SkeletonSidebar from './skeletons/SkeletonSidebar';
import SkeletonMain from './skeletons/SkeletonMain';


export default function App() {
    const [state, setState] = React.useState(false)
    const [weatherData, setWeatherData] = React.useState()
    const [location, setLocation] = React.useState("lisbon")
    const [currentLocation, setCurrentLocation] = React.useState([])
    const [tempFormat, setTempFormat] = React.useState(0)
    const [initialLocation, setInitialLocation] = React.useState([])

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
                            setInitialLocation(response.data[0])
                            
                        })
                        .catch(function (error) {
                            console.log("I am not running");
                            
                        });  
                    return request                              
                }
                fetchData();                                
            })
        }
        console.log(initialLocation)
        

        if(initialLocation.woeid) {
            async function fetchData() {
                const request = await axios.get(`https://afternoon-ridge-35420.herokuapp.com/https://www.metaweather.com/api/location/${initialLocation.woeid}/`)
                .then((response) => {
                    setWeatherData(response.data.consolidated_weather)
                    setWeatherData(data => data.map(item => {
                        return {...item,
                        isCelcius: true}
                    }))
                })
                .catch(function (error) {
                    console.log("I am not running");
                })
                
                return request
            }
            fetchData()
            
        } 

        
    }, [])

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

    function convertToFahrenheit(num) {
        const convertedNumber = (num * 1.8) + 32
        return convertedNumber
    }
    
    function convertToCelsius(num) {
        const convertedNumber = (num - 32) * .5556
        return convertedNumber
    }

    function toggleTempFormat(id, state) {
        
        //Styling Btn
        const selectedElement = document.getElementById(id)
        const groupElements = document.querySelectorAll('.selected')
        if (selectedElement.classList.contains('selected')) {
            
        } else {
            groupElements.forEach(e => {
                if(e.classList.contains('selected')) {
                    e.classList.remove('selected')
                }
            })
            selectedElement.classList.add('selected')
        }
        
        //Convertion Logic
        setTempFormat(state)
        console.log(state)
        if(tempFormat === 0) {
            setWeatherData(oldData => oldData.map(item => {
                return {...item, 
                    max_temp: convertToFahrenheit(item.max_temp),
                    min_temp: convertToFahrenheit(item.min_temp),
                    the_temp: convertToFahrenheit(item.the_temp),
                    isCelcius: !item.isCelcius
                }
            }))
        } else {
            setWeatherData(oldData => oldData.map(item => {
                return {...item, 
                    max_temp: convertToCelsius(item.max_temp),
                    min_temp: convertToCelsius(item.min_temp),
                    the_temp: convertToCelsius(item.the_temp),
                    isCelcius: !item.isCelcius
                }
            }))
        }
    }

    function handlePopularCities(string) {
        setLocation(string)
        
    }
    
    function getWeatherFromLocation() {
        //search da location
        async function fetchData() {
            const request = await axios.get(`https://afternoon-ridge-35420.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${location}`)
            //pegar no woeid que retorna 
            .then(response => {
                setCurrentLocation(response.data[0], currentLocation)
            })
            .catch(function (error) {
                console.log("I am not running");
            })
        }
        fetchData()
        //fazer fetch com o woeid
        async function fetchDataWithWoeid() {
            const request = await axios.get(`https://afternoon-ridge-35420.herokuapp.com/https://www.metaweather.com/api/location/${currentLocation.woeid}/`)
        
            //set weatherData
            .then((response) => {
                setWeatherData(response.data.consolidated_weather, weatherData)
            })
            .catch(function (error) {
                console.log("I am not running");
            })
        }
        fetchDataWithWoeid()
        
    }

    React.useEffect(() => {
        getWeatherFromLocation()
    }, [location])

    

    


    return (
        <div className="page__wrapper flex-row">
            <ThemeProvider theme={Theme}>
                {!weatherData && <>
                    <SkeletonSidebar />
                    <SkeletonMain />
                </>
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
                        <DrawerContent
                        handlePopularCities={handlePopularCities} />
                    </Drawer>
                    
                    <Main 
                    weatherData={weatherData}
                    theme={Theme}
                    tempFormat={tempFormat}
                    setTempFormat={(state, id) => toggleTempFormat(state, id)}
                    />

                </>}
            </ThemeProvider>
        </div>
    )
}