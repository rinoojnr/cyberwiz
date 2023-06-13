import React from 'react'
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'
import Footer from '../Components/Footer'
import Getintouch from '../Components/Getintouch'
import Whoweare from './Whoweare'
import Whyus from './Whyus'
import Projects from './Projects'
import Ourteam from './Ourteam'


const Home = () => {
  return (
    <div className='home'>
        <Navbar />
        <Banner />
        <Whoweare />
        <Whyus />
        <Projects />
        <Ourteam />
        <Getintouch/>
        <Footer/>
    </div>
  )
}

export default Home