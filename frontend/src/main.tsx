import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Login from './pages/Login.tsx'
import { StyledEngineProvider } from '@mui/material/styles';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
   <StyledEngineProvider injectFirst>
       <Login/>
    </StyledEngineProvider>
  </React.StrictMode>,
)
