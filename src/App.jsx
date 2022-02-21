import React from 'react'
import { ThemeProvider } from "styled-components";
import Theme from './theme/theme'

export default function App() {
    return (
        <div className="page__wrapper flex-row">
            <ThemeProvider theme={Theme}>
              
            </ThemeProvider>
        </div>
    )
}