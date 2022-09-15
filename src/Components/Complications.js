import React from 'react';
import rbc from '../pics/RBC.png';
import '../App.css';

function Complications() {
    return (
        <section className='complications'>
        <div className='container container-complications'>
          <img className='rbc' src={rbc} alt='red blood cells'/>
          <div className='container container-vert'>
            <h1>Complications of CAD</h1>
            <ol>
                <li>Heart failure</li>
                <li>Abnormal heartbeat</li>
                <li>Heart attack</li>
                <li>Sudden death</li>
                <li>Other related arterial diseases</li>
            </ol>
          </div>
        </div>
      </section>
    )   
}

export default Complications;