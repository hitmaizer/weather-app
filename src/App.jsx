import React from 'react'
import { ThemeProvider } from "styled-components";
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import Theme from './theme/theme';
import Drawer from '@mui/material/Drawer';
import DrawerContent from './components/DrawerContent';


export default function App() {
    const [state, setState] = React.useState(false)
    const [currentLocation, setCurrentLocation] = React.useState("")

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
                console.log(position)
                setCurrentLocation({
                    lat: position.coords.latitude,
                    long: position.coords.longitude 
                })
            })
        }
        console.log(currentLocation)
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