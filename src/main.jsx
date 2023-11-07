import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/router'
import ContextProvider from './Hooks/AllContext'
import QueryProvider from './Hooks/QueryProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <QueryProvider>
        <RouterProvider router={router} />
      </QueryProvider>
    </ContextProvider>
  </React.StrictMode>,
)
