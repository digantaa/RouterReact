import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import Signup from './pages/Signup';


const Layout = () => {
  return (
    <>
      <Signup/>
      {/* <Header/>
      <Outlet/> 
      <Footer/> */}
    </>
  )
}

export default Layout


// outlet baare meh padhna hai 