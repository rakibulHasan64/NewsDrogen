import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from '../route/Router'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './cmponet/provider/AuthProvider'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    
  
  </StrictMode>,
)
