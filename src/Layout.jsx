import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';


const Layout = () => {
  return (
    <>
      {/* <Signup/> */}
      <Login/>
      {/* <Header/>
      <Outlet/> 
      <Footer/> */}
    </>
  )
}

export default Layout


// outlet baare meh padhna hai 