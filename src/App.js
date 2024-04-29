
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Main from './Main'
import Portfolio from './Pages/Portfolio';
import Contacts from './Pages/Contacts';






const Home = () => {
  return (
    <>
      <Router>
          <Routes>
              <Route path='/' element={<Main />} />
              <Route path='/Portfolio' element={<Portfolio />} /> 
              <Route path='/Contacts' element={<Contacts />} /> 

          </Routes>
      </Router>
    </>
  )
}

export default Home