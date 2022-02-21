import React from 'react'
import { ThemeProvider } from "styled-components";
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import Theme from './theme/theme'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';



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
              />
              <Main />
            </ThemeProvider>
        </div>
    )
}