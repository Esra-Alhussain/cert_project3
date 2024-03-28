import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {store} from './redux/store.ts';
import './index.css'

/**
 * Necessary for adding redux toolkit
 */
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'


//Making the store available throughout the application to connect react to redux
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
