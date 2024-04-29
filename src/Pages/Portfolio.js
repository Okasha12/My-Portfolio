import React from 'react'

import Navbar from '../components/Navbar/Navbar';
import Portfolio3 from '../components/Portfolio3/Portfolio3';
import Project2 from '../components/Project2/Project2';
import ShowProject from '../components/ShowProject/ShowProject';
import Footer from '../components/Footer/Footer';
const Portfolio = () => {
  return (
    <div>
      <Navbar/>
      <Portfolio3/>
     
      <Project2/>
      <ShowProject/>
      <Footer/>

    </div>
  )
}

export default Portfolio
