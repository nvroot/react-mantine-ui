import React from 'react'
import ReactDOM from 'react-dom/client'
import { MantineProvider, createTheme } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import '@mantine/core/styles.css'
import '@mantine/notifications/styles.css'
import '@mantine/charts/styles.css'
import '@mantine/dates/styles.css'

const theme = createTheme({
  colorScheme: 'dark',
  primaryColor: 'blue',
  colors: {
    dark: [
      '#C1C2C5',
      '#A6A7AB',
      '#909296',
      '#5c5f66',
      '#373A40',
      '#2C2E33',
      '#25262b',
      '#1A1B1E',
      '#141517',
      '#101113',
    ],
  },
  defaultRadius: 'sm',
  fontFamily: 'Inter, system-ui, sans-serif',
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <Notifications />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MantineProvider>
  </React.StrictMode>,
)