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
    const [data, setData] = React.useState(null)
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)
    
    
    React.useEffect(() => {
        setLoading(true)
        async function fetchData() {
            const request = await 
            axios
            .get(`https://api.weatherapi.com/v1/forecast.json?key=ab6b1356bf884054be9193112222402&q=${location}&days=7&aqi=no&alerts=no`)
            .then((response) => {
                setData(response.data)

            })
            .catch((error) => {
                setError(error)
            })
            .finally(() => {
                setLoading(false)
            })
            return request
        }
        fetchData()
    }, [])

    console.log(data)
        
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
        
        setTempFormat(state)
        
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
            return request
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
            return request
        }
        fetchDataWithWoeid()
        
    }

   

    return (
        <div className="page__wrapper flex-row">
            <ThemeProvider theme={Theme}>
                {data === null ?  
                <>
                    <SkeletonSidebar />
                    <SkeletonMain />
                </>
                :
                <>
                    {data !== null &&                     
                        <>
                            <Sidebar 
                            toggleDrawer={toggleDrawer}
                            data={data}
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
                            data={data}
                            forescast={data.forecast}
                            theme={Theme}
                            tempFormat={tempFormat}
                            setTempFormat={(state, id) => toggleTempFormat(state, id)}
                            />
                        </>
                    } 
                </>
                }
            </ThemeProvider>
        </div>
    )
}