import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
<<<<<<< HEAD
import { Provider } from 'react-redux'
import store from './todo/store.jsx'
=======
import store from './store/store.jsx'
import { Provider } from 'react-redux'
>>>>>>> ab592bba4604d79ab41e24c17b75427df9c2b41c

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <App /></Provider>
  </StrictMode>,
)
