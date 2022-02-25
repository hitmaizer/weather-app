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
    const [location, setLocation] = React.useState("lisbon")
    const [tempFormat, setTempFormat] = React.useState(0)
    const [data, setData] = React.useState(null)
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)
    const [typedLocation, setTypedLocation] = React.useState("")
    
    
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
    }, [location])
        
    function toggleDrawer(open) {
              return function (event) {
                  return setState(open)
              }
          }     

    function getCurrentPosition(){
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                setLoading(true)
                axios
                .get(`https://api.weatherapi.com/v1/forecast.json?key=ab6b1356bf884054be9193112222402&q=${position.coords.latitude},${position.coords.longitude}&days=7&aqi=no&alerts=no`)
                .then((response) => {
                    setData(response.data)    
                })
                .catch(function (error) {
                    setError(error) 
                    console.log(error)
                })
                .finally(setLoading(false))                                
            })
        }
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

    function handleTyping() {
        // keep track of input event.target.value 
        // store it in a state 
        
    }

    function searchTypedLocation () {
        // on search click set location to value
        setLocation(typedLocation)
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
                            currentPosition={getCurrentPosition}
                            />
                            <Drawer 
                            anchor={'left'}
                            open={state}
                            onClose={toggleDrawer(false)}
                            
                            >
                                <DrawerContent 
                                handlePopularCities={(string) => handlePopularCities(string)}
                                />
                            </Drawer>
                            
                            <Main 
                            data={data}
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