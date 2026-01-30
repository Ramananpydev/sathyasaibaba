import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import App from './App.jsx'



const basename = import.meta.env.PROD ? "/sweet-savory" : "/";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/sweet-savory">
    <App />
    </BrowserRouter>
  </StrictMode>,
)
