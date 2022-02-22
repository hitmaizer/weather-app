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
    const [currentLocation, setCurrentLocation] = React.useState({
        lat: null,
        long: null
    })
    

    const searchApi = {
        base: "https://www.metaweather.com/api/location/search/?query=",
        query: ""
    }

    React.useEffect(() => {
        
    }, [currentLocation])

    // url for api lisbon location "https://www.metaweather.com/api/location/742676/"

    //your first function
    function toggleDrawer(open) {
        //your secound function
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
                    //console.log(response)
                })
                .catch(function (error) {
                    console.log("I am not running");
                    
                });
                console.log(currentLocation)
            })
        }
    }

    function getWeatherData() {
        
    }

    return (
        <div className="page__wrapper flex-row">
            <ThemeProvider theme={Theme}>
              <Sidebar 
              toggleDrawer={toggleDrawer}
              currentPosition={getCurrentPosition}
              />
              <Drawer 
              anchor={'left'}
              open={state}
              onClose={toggleDrawer(false)}
              >
                  <DrawerContent />
              </Drawer>
              <Main />
            </ThemeProvider>
        </div>
    )
}