import React from 'react';
import logo from './pics/logo.png';
import heart from './pics/heart.png';
import girl from './pics/girl.png';
import './App.css';
import Button from '@mui/material/Button';


function App() {
  return (
    <>
      <section className='hero'>
        <div className='container container-hero'>
              <div className='container container-vert container-vert-hero'>
                <img className='logo' src={logo} alt='logo'/>
                <h1>Coronary Artery Disease</h1>
                <p>Analyze your risk of getting a heart disease now!</p>
              </div>
              <img className='heart-img' src={heart} alt='heart'/>
        </div>
      </section>
      <section className='about-cad'>
        <div className='container container-about'>
          <div className='container container-vert add-right-margin'>
            <h1>What is CAD?</h1>
            <p>
              Coronary Heart Disease is the most common form of heart disease
              caused when coronary arteries fail to supply your heart with blood,
              oxygen and nutrients. Cholesterol deposits and plaques are to blame
              most of the time. The good news is you can lower your risk of getting
              one by making lifestyle changes.
            </p>
            <Button variant="contained" size="large">TAKE A TEST</Button>
          </div>
          <img className='girl-img' src={girl} alt='girl'/>
        </div>
      </section>
    </>
  );
}

export default App;
