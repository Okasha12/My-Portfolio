import React from 'react';
import './Caurosel.css'; 

function Layout() {
  return (
    <div className="container">
      <div className="content">
        <div className="text">
          <h2>Welcome to my website</h2>
          <p>i am a javascript MernStack Devolper Bs computer Science from Kfueit  </p>
        </div>
        <div className="image">
          <img src="/hero-image.jpg" alt="Example" />
        </div>
      </div>
    </div>
    
  );
}

export default Layout;
