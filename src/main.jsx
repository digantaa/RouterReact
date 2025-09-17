import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {RouteProvider, createBrowserRoute} from 'react-router-dom'
import Layout from './Layout';

const router = createBrowserRoute([
  {
    path:'/',
    element: <Layout/>,
    children: [
      {
        path:"",
        element: <Home/>
      }, 
      {}
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouteProvider router={router}/>
  </StrictMode>,
)
