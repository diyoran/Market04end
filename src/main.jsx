import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from 'react-use-cart'
import { ModeProvider } from './context/mode.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <ModeProvider>
   <BrowserRouter>
      <CartProvider>
        <App />
      </CartProvider>
    </BrowserRouter>
   </ModeProvider>
  </React.StrictMode>,
)
