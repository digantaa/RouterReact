import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {RouteProvider, createBrowserRoute} from 'react-router-dom'
import Layout from './Layout';
import Home from './components/Home';
import About from './components/About';

const router = createBrowserRoute([
  {
    path:'/',
    element: <Layout/>,
    children: [
      {
        path:"",
        element: <Home/>
      }, 
      {
        path:"about",
        element: <About/>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouteProvider router={router}/>
  </StrictMode>,
)
