import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import './assets/styles/reset.css'
import './assets/font/iconfont.css'
import './assets/fontpro/iconfont.css'
import './assets/fontdelete/iconfont.css' 
import {Provider} from 'react-redux'
import store from './store'
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
