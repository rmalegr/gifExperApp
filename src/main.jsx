import ReactDOM from 'react-dom/client'
import './styles.css'
import { BrowserRouter } from 'react-router-dom'
import { GifExpertApp } from './GiffExpertApp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter>
     <GifExpertApp />
  </BrowserRouter>
   
  // </React.StrictMode>,
)
