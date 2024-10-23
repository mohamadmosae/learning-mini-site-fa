import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import App from './Components/App/App'
import { Provider } from 'react-redux'
import store from './Redux/store'
createRoot(document.getElementById('root')).render(
<Provider store={store}>
<App />


</Provider>

)
