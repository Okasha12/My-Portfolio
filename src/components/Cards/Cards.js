import React from "react";
import "./Cards.css";

function Layout() {
  return (
    <div className="container">
      <div className="cards">
        <div className="card">
          <div className="card-content">
          <div className="navbar-logo">
          <img src="th.jpg" alt="Logo" /> {/* Path to your logo image in the public folder */}
        </div>
            <h3> Frontend Devolper </h3>
            <p> Html css and javascript for frontend devolpment </p>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
          <div className="navbar-logo">
          <img src="th (2).jpg" alt="Logo" /> {/* Path to your logo image in the public folder */}
        </div>
            <h3> Frontend Libararies</h3>
            <p> React.js BootStrap Tailwind.css  </p>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
          <div className="navbar-logo">
          <img src="th (3).jpg" alt="Logo" /> {/* Path to your logo image in the public folder */}
        </div>
          
            <h3>Backend devolpment </h3>
            <p> Node.js && Express.js   </p>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
          <div className="navbar-logo">
          <img src="th (1).jpg" alt="Logo" /> {/* Path to your logo image in the public folder */}
        </div>
            <h3> DataBase</h3>
            <p> Mongodb DataBase for my Clients </p>
          </div>
        </div>
      </div>
      <div className="text">
        <h2> Why Hire Me For Next Project?</h2>
        <p>
        Why Hire Me For Next Project?
        The technological revolution is changing aspect of our lives, and the fabric of society itself. There's no imperative to be an expert at doing everything when you can.
        </p>
      </div>
    </div>
  );
}

export default Layout;
