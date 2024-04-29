import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Caurosel from './components/Caurosel/Caurosel';
import Cards from './components/Cards/Cards';
import ShowProject from './components/ShowProject/ShowProject';
import  Project2 from './components/Project2/Project2';
import Portfolio3 from './components/Portfolio3/Portfolio3';
import Award from './components/Award/Award';
// import Portfolio4 from './components/Portfolio4/Portfolio4';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Navbar /> 

      <Caurosel/>
      
      <Cards/>

      <ShowProject/>

      <Project2/>

      <Portfolio3/>

      <Award/>
    
    <Footer/>
    </div>
  );
}

export default App;