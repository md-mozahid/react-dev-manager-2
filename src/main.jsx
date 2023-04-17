import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import ReactDOM from 'react-dom/client'
import 'react-toastify/dist/ReactToastify.css'
import App from './routes/App'
import { AuthProvider } from './context/AuthContext'
import { ContactProvider } from './context/Contact.Context'
import './styles.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ContactProvider>
          <App />
        </ContactProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
)
