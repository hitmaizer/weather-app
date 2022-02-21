import React from 'react'
import { ThemeProvider } from "styled-components";
import Sidebar from './components/Sidebar';
import Theme from './theme/theme'

export default function App() {
    return (
        <div className="page__wrapper flex-row">
            <ThemeProvider theme={Theme}>
              <Sidebar />
            </ThemeProvider>
        </div>
    )
}