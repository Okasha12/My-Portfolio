import React from 'react';
import './Award.css'; 

function CardContainer() {
  return (
    <div className="card-container">
      <div className="card">
        <h2>Client</h2>
        <p> 05</p>
      </div>
      <div className="card">
        <h2>Project</h2>
        <p>08 </p>
      </div>
      <div className="card">
        <h2>Awards</h2>
        <p>06</p>
      </div>
      <div className="card">
        <h2>Experience</h2>
        <p> 02</p>
      </div>
    </div>
  );
}

export default CardContainer;
