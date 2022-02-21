import React from 'react'
import { ThemeProvider } from "styled-components";
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import Theme from './theme/theme';
import Drawer from '@mui/material/Drawer';
import DrawerContent from './components/DrawerContent';




export default function App() {
    const [state, setState] = React.useState(false)

    //your first function
    function toggleDrawer(open) {
        //your secound function
              return function (event) {
                  return setState(open)
              }
          }     

    return (
        <div className="page__wrapper flex-row">
            <ThemeProvider theme={Theme}>
              <Sidebar toggleDrawer={toggleDrawer}/>
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