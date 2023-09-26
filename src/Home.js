import React from 'react'
import Allvin from './Allvin'
import Contact from './Contact'
import Error404 from './Error404'
import Header from './Header'
import HowitWorks from './HowitWorks'
import Login from './Login'
import Navbar from './Navbar'
import Register from './Register'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <HowitWorks/>
        <Contact/>
        <Allvin/>
        {/* <Error404/> */}
        {/* <Login />
        <Register /> */}
    </div>
  )
}

export default Home