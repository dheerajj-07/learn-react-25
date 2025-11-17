import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthProvider from './context/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <App /> 
      
    </AuthProvider>
    // we wrapped App component in Authcontext for centralizing the data. Data ko ek jgha rakh denge ta ki har ek component use easily access kr ske 

  // </StrictMode>
)
