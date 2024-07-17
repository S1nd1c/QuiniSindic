import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Layout'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import './assets/fonts/stylesheet.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
  //</React.StrictMode>,
)
