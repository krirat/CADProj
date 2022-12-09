import React from 'react';
import rbc from '../pics/RBC.png';
import '../App.css';

function Complications() {
    return (
        <section className='complications'>
        <div className='container container-complications'>
          <div style={{position:'relative', zIndex:'1'}}>
            <img className='rbc' src={rbc} alt='red blood cells'/>
            <div className='circle green' style={{position:'absolute',bottom:'30px',right:'100px',width:'90px',height:'90px',}}></div>
            <div className='circle orange' style={{position:'absolute',top:'-30px',left:'-0px',width:'300px',height:'300px',zIndex:'-1'}}></div>
          </div>
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